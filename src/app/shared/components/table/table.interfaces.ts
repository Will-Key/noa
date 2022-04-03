export interface TableSchema {
  label: string
  field: string
}
  
export interface TableAction {
  name: string
  color?: string
  label: string
}

export interface TableEmittedAction {
  action: string
  element: any
}

export interface TableExcludeAction {
  values: any[]
  field: string
}

export enum TableDefaultActions {
  UPDATE = 'update',
  DELETE = 'delete',
}