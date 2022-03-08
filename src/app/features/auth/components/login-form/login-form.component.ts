import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { hasError } from 'src/app/utils/error-helpers';
import { selectMessage } from '../../store/auth.reducer';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() status: string | null = null
  message: string | null = null
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

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectMessage).subscribe(
      (message) => {
        this.message = message
      }
    )
  }

  pushData() {
    const toSubmit = this.loginForm.value
    console.log(toSubmit)
    this.submit.emit(toSubmit)
  }


  hasError(controlName: string, errorKey: string) {
    return hasError(this.loginForm, controlName, errorKey)
  }

}
