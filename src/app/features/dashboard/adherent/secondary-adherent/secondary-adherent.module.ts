import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondaryAdherentComponent } from './containers/secondary-adherent/secondary-adherent.component';
import { SecondaryAdherentListingComponent } from './containers/secondary-adherent-listing/secondary-adherent-listing.component';
import { SecondaryAdherentForm } from './containers/secondary-adherent-form/secondary-adherent-form.component';
import { SecondaryAdherentFormComponent } from './components/secondary-adherent-form/secondary-adherent-form.component';
import { RouterModule, Routes } from '@angular/router';
import { entitledPersonReducer } from './store/secondary-adherent.reducer';
import { EntitledPersonEffects } from './store/secondary-adherent.effects';

const routes: Routes = [
  {
    path: '',
    component: SecondaryAdherentComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SecondaryAdherentListingComponent },
      { path: 'form', component: SecondaryAdherentForm },
    ],
  },
];

@NgModule({
  declarations: [
    SecondaryAdherentComponent,
    SecondaryAdherentFormComponent,
    SecondaryAdherentForm,
    SecondaryAdherentListingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(entitledPersonReducer),
    EffectsModule.forFeature([EntitledPersonEffects]),
  ]
})
export class SecondaryAdherentModule { }
