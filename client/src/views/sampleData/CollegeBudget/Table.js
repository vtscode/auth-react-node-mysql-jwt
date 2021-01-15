/* eslint-disable */
import React from 'react';
import { numberFormat } from "utils";
import { Typography,Table } from "antd";

export default (props) => {
  // const title = (type) => {
  //   switch (type) {
  //     case 'income':
  //       return 'INCOME'        
  //     case 'expenses':
  //       return 'DETAIL BUDGET per CATEGORY'        
  //     case 'semester':
  //       return 'DETAIL BUDGET per CATEGORY'        
  //     default:
  //       return 'OVERVIEW';
  //   }
  // }

  const baseColumns = [
    {
      title : <Typography.Text strong>Item</Typography.Text>,
      dataIndex : 'name_field',
    },
    {
      title : <Typography.Text strong>Amount ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'amount',
      render : x => x ? numberFormat(x) : 0,
    },
  ];

  const smstrCol = [...baseColumns,
    {
      title : <Typography.Text strong>Per Month ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'perMonth',
      render : x => x ? numberFormat(x) : 0,
    }];

  return(
  <Table 
    bordered
    rowKey={row => row.id}
    columns={props.type === 'semester' ? smstrCol : baseColumns}
    dataSource={props.dataSource}
    pagination={{
      hideOnSinglePage : true,
      position : ['bottomRight'],
      pageSize : 5,
      total : props.dataSource?.length
    }}
    summary={pageData => {
      const grandTotal = props.dataSource.reduce((total,num) => (total + num.amount),0);
      const grandTotalPerMonth = props.dataSource.reduce((total,num) => (total + num.perMonth),0);

      return(
        <Table.Summary.Row style={{textAlign:'right'}}>
          <Table.Summary.Cell colSpan={1}><Typography.Text strong>Grand Total ($)</Typography.Text></Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text strong>{numberFormat(grandTotal)}</Typography.Text>
          </Table.Summary.Cell>
          {props.type === 'semester' && <Table.Summary.Cell strong>
            <Typography.Text>{numberFormat(grandTotalPerMonth)}</Typography.Text>
          </Table.Summary.Cell>}
        </Table.Summary.Row>
      )
    }}
  />);
};