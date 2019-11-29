import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ImportFromCsvSuccess } from '../actions/import-users.action';
import * as fileUploadActions from '../actions/file-upload.action';
import { UploadCompletedWithResponseAction } from '../actions/file-upload.action';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../models';

@Injectable()
export class ImportUsersEffects {

  @Effect()
  importFromCsvEffect$: Observable<ImportFromCsvSuccess> = this.actions$.pipe(
    ofType(fileUploadActions.FileUploadActionTypes.UPLOAD_COMPLETED_WITH_RESPONSE),
    map((response: UploadCompletedWithResponseAction) => new ImportFromCsvSuccess(response.payload as User[]))
  );

  constructor(private actions$: Actions) {
  }

}
