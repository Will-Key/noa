import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableDefaultActions, TableEmittedAction, TableSchema } from 'src/app/shared/components/table/table.interfaces';
import { Adherent, AdherentSubscription } from '../../../models';
import { selectEntitledPersonList, selectPrincipalAdherent } from '../../store/secondary-adherent.reducer';
import * as EntitledPersonActions from '../../store/secondary-adherent.action'
import { RemoveConfirmationDialogComponent } from 'src/app/shared/components/remove-confirmation-dialog/remove-confirmation-dialog.component';
import { RemoveDialogData } from 'src/app/shared/components/remove-confirmation-dialog/remove-dialog.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { selectAlert } from 'src/app/features/alert/store/alert.reducer';
import { ListService } from 'src/app/shared/services/list.service';
import { FetchResponse } from 'src/app/shared/models';

@Component({
  selector: 'app-secondary-adherent-listing',
  templateUrl: './secondary-adherent-listing.component.html',
  styleUrls: ['./secondary-adherent-listing.component.scss']
})
export class SecondaryAdherentListingComponent implements OnInit {

  title: string = 'Adherent';
  subTitle: string = 'Sécondaire';
  adherentList: AdherentSubscription[] = []
  entitledPersonList: Adherent[] = []
  adherentSelected: Adherent
  subscription = new Subscription()
  loading: boolean = false

  adherentIsSelected = false

  tableSchema: TableSchema[] = [
    {
      field: 'r_numero',
      label: 'Police',
    },
    {
      field: 'r_nom',
      label: 'Nom',
    },
    {
      field: 'r_prenoms',
      label: 'Prenoms',
    },
    {
      field: 'r_age',
      label: 'Age',
    },
    {
      field: 'r_nom_prenoms_parent',
      label: 'Parent',
    }
  ]

  constructor(private router: Router, 
    private store: Store, 
    private dialog: MatDialog,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(EntitledPersonActions.TRY_FETCH_ADHERENT({ request: { p_code: 'REQ007', p_arguments: ''} }))
    this.fetchAdherent()
  }

  fetchAdherent() {
    this.subscription.add(
      this.store.select(selectPrincipalAdherent).subscribe((adherents) => {
        this.adherentList = adherents
      })
    )
  }

  onSelectAdherent(event: any) {
    const adherentSelect: AdherentSubscription = event.value
    this.adherentSelected = adherentSelect
    event.value != 0 ? this.adherentIsSelected = true : this.adherentIsSelected = false
    this.entitledPersonList = adherentSelect.r_adherent_secondaire ? adherentSelect.r_adherent_secondaire : []
    this.store.dispatch(EntitledPersonActions.SET_ADHERENT({ adherent: adherentSelect}))
  }

  openForm() {
    this.router.navigate(['/dashboard/adherent/secondary/form']);
  }

  tableAction(action: TableEmittedAction) {
    if (action.action == TableDefaultActions.DELETE) {
      this.remove(action.element)
    }

    if (action.action == TableDefaultActions.UPDATE) {
      this.update(action.element)
    }
  }

  remove(adherent: AdherentSubscription) {
    const toDelete: AdherentSubscription = {
      ...adherent,
      r_statut: 3
    }
    console.log(toDelete)
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent, {
      data: {
        message: 'Voulez vous vraiment supprimer cet ayant droit ? ',
        title: 'Suppression ayant droit',
      } as RemoveDialogData,
    })

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.store.dispatch(EntitledPersonActions.TRY_CUD_ENTITLED_PERSON({
        payload: toDelete
      }))

      this.store.select(selectAlert).subscribe((alertState) => {
        if (alertState && alertState.type === 'success') {
          this.listService.fetch({ p_code: 'REQ009', p_arguments: this.adherentSelected.r_i?.toString()! }).subscribe((response: FetchResponse) => {
            this.entitledPersonList = response.contenu
          })
        }
      })
    })
  }

  update(entitledPerson: Adherent) {
    this.store.dispatch(EntitledPersonActions.SET_ENTITLED_PERSON({ entitledPerson }))
    this.openForm()
  }

}
