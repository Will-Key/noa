import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
