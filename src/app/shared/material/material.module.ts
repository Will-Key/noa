import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

const matModules = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  imports: [
    ...matModules
  ],
  exports: [
    ...matModules
  ]
})
export class MaterialModule { }
