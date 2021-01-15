import { createSelector } from 'reselect';

const stateGlobal =  state => state;
const authSelector = state => state.auth;

const getAuth = createSelector(
  authSelector,
  auth => auth
);
const getTheme = createSelector(
  stateGlobal,
  state => state.theme
);
const getHistoryPath = createSelector(
  stateGlobal,
  state => state.historypath
);

export { getAuth,getTheme,getHistoryPath };