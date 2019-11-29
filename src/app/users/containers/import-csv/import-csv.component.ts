import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '../../../core/store';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-import-csv',
  templateUrl: './import-csv.component.html',
  styleUrls: ['./import-csv.component.scss']
})
export class ImportCsvComponent {
  private importedUsers$ = this.store.select(fromStore.getImportUsers);

  constructor(private store: Store<CoreState>) {
  }

}
