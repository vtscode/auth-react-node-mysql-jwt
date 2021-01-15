/* eslint-disable */
import React from 'react';
import { 
  UserOutlined,
  // FormOutlined,
  WindowsOutlined,
  ClusterOutlined
} from '@ant-design/icons';
import pathName from "./pathName";

const { home,pages } = pathName;

export default {
  items: [
    { name: 'Home', url: home, icon: <UserOutlined/> },
    {
      name: 'Warehouse',
      icon: <WindowsOutlined />,
      url: pages.page1,
      children: [
        { name: 'Barang', url: pages.barang, icon: <ClusterOutlined /> },
      ]
    },
    // { name: 'Forms', url: pages.barang, icon: <FormOutlined/> },
  ]
}