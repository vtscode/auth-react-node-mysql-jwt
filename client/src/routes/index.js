import React from "react";
import pathName from "./pathName";

const { login, home,register, pages} = pathName;
export default {
  public : [
    { path: register, component: React.lazy(() => import('views/pages/Register')) },
    { path: login, component: React.lazy(() => import('views/pages/Login')) },
  ],
  strict : [
    { path: home, exact : true, component: React.lazy(() => import('views/pages/Home')) },
    { path: pages.barang, exact : true, component: React.lazy(() => import('views/pages/Barang')) },
    { path: pages.forms, exact : true, component: React.lazy(() => import('views/pages/Barang')) },
  ]
};