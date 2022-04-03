import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RemoveDialogData } from './remove-dialog.interfaces'

@Component({
  selector: 'app-remove-confirmation-dialog',
  templateUrl: './remove-confirmation-dialog.component.html',
  styleUrls: ['./remove-confirmation-dialog.component.scss'],
})
export class RemoveConfirmationDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: RemoveDialogData) {}

  ngOnInit(): void {}
}
