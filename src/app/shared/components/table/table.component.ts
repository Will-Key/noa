import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import {
  TableAction,
  TableEmittedAction,
  TableExcludeAction,
  TableSchema,
} from './table.interfaces'
import { PageEvent } from '@angular/material/paginator'
import * as _ from 'lodash'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() items: any[] = []

  @Input() isLoading: boolean = false

  @Input() schema: TableSchema[] = []

  @Input() actions?: TableAction[] = [
    {
      label: 'Modifier',
      name: 'update',
    },
    {
      label: 'Supprimer',
      name: 'delete',
      color: 'warn',
    },
  ]

  @Input()
  pageOptions!: PageEvent

  @Output() pageChanged = new EventEmitter<PageEvent>()

  @Output() actionClicked = new EventEmitter<TableEmittedAction>()

  @Input()
  actionExcluded!: TableExcludeAction

  pageSizeOptions = [5, 10, 25, 50]

  readonly ACTIONS_NAME = 'TABLE_ACTIONS'

  get displayedColumnsWithoutOptions(): string[] {
    return this.schema.map((e) => e.field)
  }

  getLabel(elt: any, field: string) {
    return _.get(elt, field)
  }

  displayedColumns: string[] = []

  ngOnInit(): void {
    this.displayedColumns = this.schema.map((e) => e.field)

    if (this.actions && this.actions.length) {
      this.displayedColumns = [...this.displayedColumns, this.ACTIONS_NAME]
    }
  }

  emitAction(element: any, action: string) {
    this.actionClicked.emit({ action, element })
  }

  onPaginatorPageChanged(payload: PageEvent) {
    this.pageChanged.emit(payload)
  }

  excludeActions(element: any) {
    if (this.actionExcluded) {
      const showActions = this.actionExcluded.values.some(
        (v) => element[this.actionExcluded.field] === v,
      )

      return !showActions
    }
    return true
  }
}