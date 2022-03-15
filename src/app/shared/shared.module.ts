import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';

const componentToExport = [
  HeaderComponent,
  TableComponent,
  StatsCardComponent
]

@NgModule({
  declarations: [
    ...componentToExport,
    StatsCardComponent
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
    ...componentToExport
  ]
})
export class SharedModule { }
