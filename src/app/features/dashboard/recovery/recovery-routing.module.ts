import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisasterComponent } from './disaster/containers/disaster/disaster.component';


const routes: Routes = [
  { 
    path: '', 
    component: DisasterComponent, 
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'disaster' },
      {
        path: 'disaster',
        loadChildren: () => 
          import('./disaster/disaster.module').then(
            (m) => m.DisasterModule
          )
      },
    //   {
    //     path: 'secondary',
    //     loadChildren: () => 
    //       import('./secondary-adherent/secondary-adherent.module').then(
    //         (m) => m.SecondaryAdherentModule
    //       )
    //   },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecoveryRoutingModule { }
