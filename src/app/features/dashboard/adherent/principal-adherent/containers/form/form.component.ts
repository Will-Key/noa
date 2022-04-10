import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdherentSubscription } from '../../../models';
import * as PrincipalAdherentActions from '../../store/principal-adherent.actions'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  isEditMode: boolean = false
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  onGoBack() {
    this.store.dispatch(PrincipalAdherentActions.CLEAR_STATE())
    this.router.navigate(['/dashboard/adherent/principal']);
  }

  onEditMode(event: boolean) {
    this.isEditMode = event
  }

  onSubmit(event: AdherentSubscription) {
    this.store.dispatch(PrincipalAdherentActions.TRY_CREATE_ADHERENT({ payload: event }))
  }
}
