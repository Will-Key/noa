import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

const matModules = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    ...matModules
  ],
  exports: [
    ...matModules
  ]
})
export class MaterialModule { }
