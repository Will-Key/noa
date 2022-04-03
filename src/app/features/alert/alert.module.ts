import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { AlertService } from './service/alert.service';
import { alertFeature } from './store/alert.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forFeature(alertFeature),
  ],
  providers: [AlertService],
})
export class AlertModule { }
