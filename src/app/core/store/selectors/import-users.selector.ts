import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromImportUsers from '../reducers/import-users.reducer';
import { IUser, User } from '../../models';

export const getImportUsersState = createSelector(fromFeature.getCoreState, (state: fromFeature.CoreState) => state.importUsers);

const getImportUsersEntitiesAsInterfaces = createSelector(getImportUsersState, fromImportUsers.getImportedUsersEntities);
export const getImportUsersEntities = createSelector(getImportUsersEntitiesAsInterfaces,
  (users: { [id: number]: IUser }) => {
    const importUserEntities: { [id: number]: User } = {};
    const importUserInterfaces = {...users};

    Object.keys(importUserInterfaces).map(key => {
      importUserEntities[key] = new User(importUserInterfaces[key]);
    });

    return importUserEntities;
  }
);

export const getImportUsers = createSelector(getImportUsersEntities, (entities: { [id: number]: User }) => {
  return Object.keys(entities).map(id => entities[id]);
});

// export const getImportUsersEntities   = createSelector(getImportUsersEntities, (entities: { [id: number]: User }) => {
//   return Object.keys(entities).map(id => entities[id]);
// });

// export const getUsersLoaded = createSelector(getUsersState, fromUsers.getUsersLoaded);
// export const getUsersLoading = createSelector(getUsersState, fromUsers.getUsersLoading);
// export const getUsersShouldReload = createSelector(getUsersState, fromUsers.getUsersShouldReload);

// const getUsersPageDataEntityAsInterface = createSelector(getUsersState, fromUsers.getUsersPageData);
// export const getUsersPageData = createSelector(getUsersPageDataEntityAsInterface,
//   (iPageData: IPageData) => {
//     const pageData = new PageData();
//     pageData.fromJson(iPageData);
//     return pageData;
//   });
//
// const getUserFilterAsInterface = createSelector(getUsersState, fromUsers.getUsersFilter);
// export const getUsersFilter = createSelector(getUserFilterAsInterface,
//   (iFilter: IFilter) => {
//     const filter = new Filter();
//     filter.fromJson(iFilter);
//     return filter;
//   });
// export const getUsersErrors = createSelector(getUsersState, fromUsers.getUsersErrors);
