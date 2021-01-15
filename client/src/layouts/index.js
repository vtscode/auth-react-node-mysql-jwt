import React from "react";
import AllRoute from "./allroutes";
import {LoadingState} from 'components/loading';

export default () => (
  <React.Suspense fallback={<LoadingState />}>
    <AllRoute />
  </React.Suspense>
);