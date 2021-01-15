import React from 'react';
/* eslint-disable */
import routes from "routes";
import pathName from "routes/pathName";
import NotFound from "views/pages/NotFound";
import { Route,Switch } from 'react-router-dom';
import {LoadingState} from "components/loading";
import localStorageService from "services/localStorageService";

const ProtectedRoute = ({history}) => {
  const { login} = pathName;
  if(!localStorageService('auth').getAccessToken()?.user){
    history.replace(login);
  }
  return(
  <React.Suspense fallback={<LoadingState />}>
    <Switch>
      {routes.strict.map((route,idx) => (<Route key={idx} {...route} />))}
      <Route render={m => <NotFound {...m} />} />
    </Switch>
  </React.Suspense>);
};

export default ProtectedRoute;