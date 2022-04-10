import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Adherent } from '../../../models';
import * as EntitledPersonActions from '../../store/secondary-adherent.action'
import { selectEntitledPersonSelected } from '../../store/secondary-adherent.reducer';

@Component({
  selector: 'app-secondary-form',
  templateUrl: './secondary-adherent-form.component.html',
  styleUrls: ['./secondary-adherent-form.component.scss']
})
export class SecondaryAdherentForm implements OnInit {

  isEditMode: boolean
  subscription: Subscription = new Subscription()

  constructor(private router: Router, private store: Store) {
    this.isEditMode = false
  }

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectEntitledPersonSelected).subscribe((entitledPersonSelected) => {
        this.isEditMode = !!entitledPersonSelected
      })
    )
  }

  onGoBack() {
    this.router.navigate(['/dashboard/adherent/secondary/list'])
  }

  onSubmit(payload: Adherent) {
    this.store.dispatch(EntitledPersonActions.TRY_CUD_ENTITLED_PERSON({ payload }))
  }

}
