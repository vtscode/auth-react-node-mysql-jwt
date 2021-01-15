import React from "react";
import routes from "routes";
import pathName from "routes/pathName";
import ProtectedRoute from './protectedroute';
import {LoadingState} from 'components/loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  const { base } = pathName;
  return(
  <React.Suspense fallback={<LoadingState />}>
    <BrowserRouter>
      <Switch>
        {routes.public.map((route,idx) => (<Route key={idx} {...route} />))}
        <Route path={base} render={m => <ProtectedRoute {...m} />} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>);
};
export default App;