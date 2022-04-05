import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { principalAdherentReducer } from './store/principal-adherent.reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrincipalAdherentComponent } from './containers/principal-adherent/principal-adherent.component';
import { PrincipalAdherentFormComponent } from './components/principal-adherent-form/principal-adherent-form.component';
import { ListingComponent } from './containers/listing/listing.component';
import { FormComponent } from './containers/form/form.component';
import { PrincipalAdherentEffects } from './store/principal-adherent.effects';

const routes: Routes = [
  {
    path: '',
    component: PrincipalAdherentComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListingComponent },
      { path: 'form', component: FormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PrincipalAdherentComponent,
    PrincipalAdherentFormComponent,
    ListingComponent,
    FormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(principalAdherentReducer),
    EffectsModule.forFeature([PrincipalAdherentEffects]),
  ],
  exports: [RouterModule],
})
export class PrincipalAdherentModule {}
