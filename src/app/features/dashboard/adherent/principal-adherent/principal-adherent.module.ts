import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { principalAdherentReducer } from './store/principal-adherent.reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrincipalAdherentComponent } from './containers/principal-adherent/principal-adherent.component';
import { PrincipalAdherentFormComponent } from './components/principal-adherent-form/principal-adherent-form.component';
import { PrincipalAdherentListingComponent } from './components/principal-adherent-listing/principal-adherent-listing.component';

const routes: Routes = [
  { path: '', component: PrincipalAdherentComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    PrincipalAdherentComponent,
    PrincipalAdherentFormComponent,
    PrincipalAdherentListingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(principalAdherentReducer),
    EffectsModule.forFeature([])
  ]
})
export class PrincipalAdherentModule { }
