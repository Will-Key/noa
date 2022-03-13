import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdherentComponent } from './adherent.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdherentComponent, 
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'principal' },
      {
        path: 'principal',
        loadChildren: () => 
          import('./principal-adherent/principal-adherent.module').then(
            (m) => m.PrincipalAdherentModule
          )
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdherentRoutingModule { }
