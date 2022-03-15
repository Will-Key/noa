import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { ParamConnexion, FinalParamConnexion } from '../../models';
import { LOGIN } from '../../store/auth.actions'
import { selectMessage } from '../../store/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string | null = null
  susbscription: Subscription = new Subscription()
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.susbscription = this.store.select(selectMessage).subscribe(
      (message) => {
        this.message = message
      }
    )
  }

  onSubmit(body: ParamConnexion) {
    const pCnx = body
    const connexionData: FinalParamConnexion = {
      param_session: { session: '' },
      param_cnx: pCnx
    }
    this.store.dispatch(LOGIN({ body: connexionData }))
  }

}
