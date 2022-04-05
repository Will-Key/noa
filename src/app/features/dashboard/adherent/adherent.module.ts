import { NgModule } from '@angular/core';
import { AdherentRoutingModule } from './adherent-routing.module';
import { AdherentComponent } from './adherent.component';
import { SecondaryAdherentComponent } from './secondary-adherent/containers/secondary-adherent/secondary-adherent.component';

@NgModule({
  declarations: [AdherentComponent, SecondaryAdherentComponent],
  imports: [
    AdherentRoutingModule
  ],
})
export class AdherentModule { }
