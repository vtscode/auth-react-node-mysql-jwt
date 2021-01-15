import React from "react";
import pathName from "./pathName";

const { login, home,register, pages,chart} = pathName;
export default {
  public : [
    { path: register, component: React.lazy(() => import('views/pages/Login')) },
    { path: login, component: React.lazy(() => import('views/pages/Login')) },
  ],
  strict : [
    { path: home, exact : true, component: React.lazy(() => import('views/pages/Home')) },
    { path: pages.page1, exact : true, component: React.lazy(() => import('views/pages/Pages')) },
    { path: pages.forms, exact : true, component: React.lazy(() => import('views/pages/FormExample')) },
    { path: pages.pdfexample, exact : true, component: React.lazy(() => import('views/pages/GeneratePDF')) },
    { path: pages.onlinesalestracker, exact : true, component: React.lazy(() => import('views/pages/OnlineSalesTracking')) },
    { path: pages.websitebudgettool, exact : true, component: React.lazy(() => import('views/pages/WebsiteBudgetTool')) },
    { path: pages.eventbudget, exact : true, component: React.lazy(() => import('views/pages/EventBudget')) },
    { path: pages.familybudget, exact : true, component: React.lazy(() => import('views/pages/FamilyBudget')) },
    { path: pages.collegebudget, exact : true, component: React.lazy(() => import('views/pages/CollegeBudget')) },
    { path: pages.mapleaftlet, exact : true, component: React.lazy(() => import('views/pages/LeafletMap')) },
    { path: chart.map, exact : true, component: React.lazy(() => import('views/pages/Chart/MapChart')) },
    { path: chart.candlestick, exact : true, component: React.lazy(() => import('views/pages/Chart/CandlestickChart')) },
    { path: chart.timelineFinance, exact : true, component: React.lazy(() => import('views/pages/Chart/MixTimelineFinance')) },
    { path: chart.graph, exact : true, component: React.lazy(() => import('views/pages/Chart/GraphChart')) },
    { path: chart.tree, exact : true, component: React.lazy(() => import('views/pages/Chart/TreeChart')) },
  ]
};