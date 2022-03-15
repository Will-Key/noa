import { NgModule } from '@angular/core';
import { AuthComponent } from './containers/auth/auth.component';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { authFeature } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
