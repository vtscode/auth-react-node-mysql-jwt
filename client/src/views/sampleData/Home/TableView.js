/* eslint-disable */
import React from 'react';
import { Typography,Table,Space } from "antd";
import { randomString } from 'utils/generate';
import { numberFormat,noImagePath } from "utils";

const dummy = [
  {
    img : noImagePath,
    field_title : 'Abadoned Cart 7 Days', 
    field_desc : '4024 Sent | 124 Clicks',
    value_title : 5231,
    value_desc : '41 Orders | $150 AOV',
  },
  {
    img : noImagePath,
    field_title : 'Abadoned Cart 15 Min', 
    field_desc : '4024 Sent | 124 Clicks',
    value_title : 24521,
    value_desc : '41 Orders | $150 AOV',
  },
  {
    img : noImagePath,
    field_title : 'Abadoned Cart 15 Min', 
    field_desc : '4024 Sent | 124 Clicks',
    value_title : 24521,
    value_desc : '41 Orders | $150 AOV',
  },
]

const App = (props) => {

  const columns = [
    {
      title : '#',
      width : 80,
      key : 'img',
      dataIndex : 'img',
      render : x => <img src={x ? x : 'https://via.placeholder.com/50'} alt="data-val" />
    },
    {
      title : 'Field',
      align :'left',
      key : 'field_title',
      render : x => (<Space direction="vertical">
        <Typography.Title level={5}>{x.field_title}</Typography.Title>
        <Typography.Text>{x.field_desc}</Typography.Text>
      </Space>)
    },
    {
      title : 'Value',
      align : 'right',
      key : 'value',
      render : x => (<Space direction="vertical">
        <Typography.Title level={5}>${numberFormat(x.value_title)}</Typography.Title>
        <Typography.Text>{x.value_desc}</Typography.Text>
      </Space>)
    },
  ]

  return (
  <Table 
    rowKey={row => row.id || randomString(7)}
    columns={columns}
    pagination={{
      pageSize:10,
      hideOnSinglePage : true,
      total:dummy.length
    }}
    dataSource={dummy}
  />)
};

export default App;