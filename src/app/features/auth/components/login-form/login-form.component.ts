import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { hasError } from 'src/app/utils/error-helpers';
import { selectLoading, selectMessage } from '../../store/auth.reducer';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @Input() status: string | null = null
  message: string | null = null
  isLoading: boolean = false
  @Output() submit = new EventEmitter()
  hide: boolean = true

  loginForm = this.formBuilder.group({
    p_login: ['', [Validators.required]],
    p_mdp: ['', [Validators.required]]
  })

  errorMessages = {
    login: { required: 'Le login est réquis'},
    password: { required: 'Le mot de passe est réquis'},
  }

  subscription: Subscription = new Subscription()

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.subscription.add(this.store.select(selectMessage).subscribe(
      (message) => {
        this.message = message
      }
    ))

    this.subscription.add(this.store.select(selectLoading).subscribe(
      (loading) => {
        this.isLoading = loading
      }
    ))
  }

  pushData() {
    const toSubmit = this.loginForm.value
    console.log(toSubmit)
    this.submit.emit(toSubmit)
  }


  hasError(controlName: string, errorKey: string) {
    return hasError(this.loginForm, controlName, errorKey)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
