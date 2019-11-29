import { Component, Input, OnInit } from '@angular/core';
import { User } from '@app/core';

@Component({
  selector: 'app-imported-users-table',
  template: `
      <div class="mat-elevation-z8 table-wrapper">
          <mat-table #table [dataSource]="importedUsers" fxFlex>
              <ng-container matColumnDef="lastName">
                  <mat-header-cell *matHeaderCellDef>
                      {{'users.table.column.lastName' | translate}}
                  </mat-header-cell>
                  <mat-cell *matCellDef="let user">
                      <mat-form-field class="users-table-cell">
                          <input matInput value="{{ user.lastName }}">
                      </mat-form-field>
                  </mat-cell>
              </ng-container>

              <ng-container matColumnDef="firstName">
                  <mat-header-cell *matHeaderCellDef>
                      {{'users.table.column.firstName' | translate}}
                  </mat-header-cell>
                  <mat-cell *matCellDef="let user">
                      <mat-form-field class="users-table-cell">
                          <input matInput value="{{ user.firstName }}">
                      </mat-form-field>
                  </mat-cell>
              </ng-container>

              <ng-container matColumnDef="email">
                  <mat-header-cell *matHeaderCellDef>
                      {{'users.table.column.email' | translate}}
                  </mat-header-cell>
                  <mat-cell *matCellDef="let user">
                      <mat-form-field class="users-table-cell">
                          <input matInput value="{{ user.email }}">
                      </mat-form-field>
                  </mat-cell>
              </ng-container>

              <ng-container matColumnDef="phoneNumber">
                  <mat-header-cell *matHeaderCellDef>
                      {{'users.table.column.phoneNumber' | translate}}
                  </mat-header-cell>
                  <mat-cell *matCellDef="let user">
                      <mat-form-field class="users-table-cell">
                          <input matInput value="{{ user.phoneNumber }}">
                      </mat-form-field>
                  </mat-cell>
              </ng-container>

              <ng-container matColumnDef="district">
                  <mat-header-cell *matHeaderCellDef>
                      {{'users.table.column.district' | translate}}
                  </mat-header-cell>
                  <mat-cell *matCellDef="let user">
                      <mat-form-field class="users-table-cell">
                          <input matInput value="{{ user.district }}">
                      </mat-form-field>
                  </mat-cell>
              </ng-container>

              <ng-container matColumnDef="organisation">
                  <mat-header-cell *matHeaderCellDef>
                      {{'users.table.column.organisation' | translate}}
                  </mat-header-cell>
                  <mat-cell *matCellDef="let user">
                      <mat-form-field class="users-table-cell">
                          <input matInput value="{{ user.organisation }}">
                      </mat-form-field>
                  </mat-cell>
              </ng-container>

              <mat-header-row *matHeaderRowDef="tableConfig.displayedColumns"></mat-header-row>
              <mat-row *matRowDef="let row; columns: tableConfig.displayedColumns;"></mat-row>
          </mat-table>
      </div>

  `,
  styleUrls: ['./imported-users-table.component.scss']
})
export class ImportedUsersTableComponent implements OnInit {
  @Input() importedUsers: User[] = [];
  public tableConfig: any = {};

  constructor() {
  }

  ngOnInit() {
    this.tableConfig = {
      displayedColumns: [
        'lastName',
        'firstName',
        'email',
        'phoneNumber',
        'district',
        'organisation',
      ],
    };
  }

}
