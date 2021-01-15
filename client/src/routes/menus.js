/* eslint-disable */
import React from 'react';
import { UserOutlined, 
  LaptopOutlined,WindowsOutlined,MoneyCollectOutlined,
  AimOutlined,BankOutlined,AreaChartOutlined,ClusterOutlined,SlidersOutlined,
  FormOutlined,SnippetsOutlined,UsergroupAddOutlined,AppstoreOutlined
} from '@ant-design/icons';
import pathName from "./pathName";

const { home,pages,chart } = pathName;

export default {
  items: [
    { name: 'Home', url: home, icon: <UserOutlined/> },
    {
      name: 'Pages',
      icon: <WindowsOutlined />,
      url: pages.page1,
      children: [
        { name: 'Online Sales Tracking', url: pages.onlinesalestracker, icon: <SnippetsOutlined /> },
        { name: 'Website Budget Tool', url: pages.websitebudgettool, icon: <LaptopOutlined /> },
        { name: 'Event Budget', url: pages.eventbudget, icon: <SnippetsOutlined /> },
        { name: 'Family Budget', url: pages.familybudget, icon: <UsergroupAddOutlined /> },
        { name: 'College Budget', url: pages.collegebudget, icon: <BankOutlined /> },
      ]
    },
    { name: 'Forms', url: pages.forms, icon: <FormOutlined/> },
    { name: 'PDF Example', url: pages.pdfexample, icon: <FormOutlined/> },
    { name: 'Map React Leaflet', url: pages.mapleaftlet, icon: <AimOutlined/> },
    {
      name: 'Example Chart',
      icon: <AreaChartOutlined />,
      url: pages.page1,
      children: [
        { name: 'Map', url: chart.map, icon: <AimOutlined /> },
        { name: 'Candle Stick', url: chart.candlestick, icon: <SlidersOutlined /> },
        { name: 'Mix Timeline Finance', url: chart.timelineFinance, icon: <MoneyCollectOutlined /> },
        { name: 'Tree', url: chart.tree, icon: <ClusterOutlined /> },
        { name: 'Graph', url: chart.graph, icon: <AppstoreOutlined /> },
      ]
    },
  ]
}