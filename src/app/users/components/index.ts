import { UsersTableComponent } from '@app/users/components/users-table/users-table.component';
import { UsersHeaderComponent } from '@app/users/components/users-header/users-header.component';
import { UserFormComponent } from '@app/users/components/user-form/user-form.component';
import { ImportCsvComponent } from '@app/users/containers/import-csv/import-csv.component';
import { ImportedUsersTableComponent } from '@app/users/components/imported-users-table/imported-users-table.component';
// tslint:disable-next-line:max-line-length
import { ImportedUsersTableRowComponent } from '@app/users/components/imported-users-table/imported-users-table-row/imported-users-table-row.component';

export const components: any[] = [
  UsersTableComponent,
  UsersHeaderComponent,
  UserFormComponent,
  ImportCsvComponent,
  ImportedUsersTableComponent,
  ImportedUsersTableRowComponent
];

