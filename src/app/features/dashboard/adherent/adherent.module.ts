import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdherentComponent } from './adherent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdherentRoutingModule } from './adherent-routing.module';


@NgModule({
  declarations: [
    AdherentComponent,
  ],
  imports: [
    CommonModule,
    AdherentRoutingModule,
  ],
})
export class AdherentModule { }
