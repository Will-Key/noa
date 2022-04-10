import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ContributionComponent } from '../contribution/containers/contribution/contribution.component';
import { DisasterFormComponent } from './components/disaster-form/disaster-form.component';
import { DisasterEditorComponent } from './containers/disaster-editor/disaster-editor.component';
import { DisasterComponent } from './containers/disaster/disaster.component';

const routes: Routes = [
  { path: '', component: DisasterComponent }
]

@NgModule({
  declarations: [
    DisasterComponent,
    ContributionComponent,
    DisasterEditorComponent,
    DisasterFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DisasterModule { }
