import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TableDefaultActions, TableEmittedAction, TableSchema } from 'src/app/shared/components/table/table.interfaces';
import { Adherent, AdherentSubscription } from '../../../models';
import { selectLoading, selectPrincipalAdherentList } from '../../store/principal-adherent.reducers';
import * as PrincipalAdherentActions from '../../store/principal-adherent.actions'
import { PrincipalAdherentService } from '../../service/principal-adherent.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveConfirmationDialogComponent } from 'src/app/shared/components/remove-confirmation-dialog/remove-confirmation-dialog.component';
import { RemoveDialogData } from 'src/app/shared/components/remove-confirmation-dialog/remove-dialog.interfaces';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit, OnDestroy {
  title: string = 'Adherent';
  subTitle: string = 'Principal';
  adherentList: AdherentSubscription[] = []
  subscription = new Subscription()
  loading: boolean = false

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
      field: 'r_email',
      label: 'Email',
    },
    {
      field: 'r_telephone',
      label: 'N° Téléphone',
    },
  ]

  constructor(private router: Router, private store: Store, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(PrincipalAdherentActions.TRY_FETCH_ADHERENT({ request: { p_code: 'REQ007', p_arguments: ''} }))

    this.subscription.add(
      this.store.select(selectPrincipalAdherentList).subscribe((listOfAdherent) => {
        this.adherentList = listOfAdherent
      })
    )

    this.subscription.add(
      this.store.select(selectLoading).subscribe((isLoading) => {
        this.loading = isLoading
      })
    )
  }

  openForm() {
    this.router.navigate(['/dashboard/adherent/principal/form']);
  }

  tableAction(action: TableEmittedAction) {
    if (action.action == TableDefaultActions.DELETE) {
      this.removeAdherent(action.element)
    }

    if (action.action == TableDefaultActions.UPDATE) {
      this.updateAdherent(action.element)
    }
  }

  removeAdherent(adherent: AdherentSubscription) {
    const toDelete: AdherentSubscription = {
      ...adherent,
      r_statut: 3
    }
    console.log(toDelete)
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent, {
      data: {
        message: 'Voulez vous vraiment supprimer cet adherent ? ',
        title: 'Suppression adherent',
      } as RemoveDialogData,
    })

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.store.dispatch(PrincipalAdherentActions.TRY_DELETE_ADHERENT({
        payload: toDelete
      }))
    })
  }

  updateAdherent(adherent: AdherentSubscription) {
    this.store.dispatch(PrincipalAdherentActions.SET_ADHERENT({adherent}))
    this.openForm()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
