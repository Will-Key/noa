import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'

const matModules = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule
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
