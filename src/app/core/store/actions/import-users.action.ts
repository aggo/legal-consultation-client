import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum ImportUserActionTypes {
  ImportFromCsvCompleted = '[Import Users] Import From Csv',
  ImportFromCsvSuccess = '[Import Users] Import From Csv Success',
}

export class ImportFromCsvCompleted implements Action {
  readonly type: string = ImportUserActionTypes.ImportFromCsvCompleted;

  constructor(public payload: User[]) {
  }
}

export class ImportFromCsvSuccess implements Action {
  readonly type: string = ImportUserActionTypes.ImportFromCsvSuccess;

  constructor(public payload: User[]) {
  }
}

export type ImportUsersAction = ImportFromCsvCompleted
  | ImportFromCsvSuccess;
