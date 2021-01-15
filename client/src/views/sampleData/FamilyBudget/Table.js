/* eslint-disable */
import React from 'react';
import { numberFormat } from "utils";
import { Typography,Table } from "antd";

export default (props) => {
  const title = (type) => {
    switch (type) {
      case 'income':
        return 'INCOME'        
      case 'detail':
        return 'DETAIL BUDGET per CATEGORY'        
      default:
        return 'OVERVIEW';
    }
  }

  const baseColumns = [
    {
      title : <Typography.Text strong>{title(props.type)}</Typography.Text>,
      dataIndex : 'name_field',
    },
    {
      title : <Typography.Text strong>Projected ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'projected',
      render : x => x ? numberFormat(x) : 0,
    },
    {
      title : <Typography.Text strong>Actual ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'actual',
      render : x => x ? numberFormat(x) : 0,
    },
    {
      title : <Typography.Text strong>Difference ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'diff',
      render : x => x ? numberFormat(x) : 0,
    },
  ];

  return(
  <Table 
    bordered
    rowKey={row => row.id}
    columns={baseColumns}
    dataSource={props.dataSource}
    pagination={{
      hideOnSinglePage : true,
      position : ['topRight','bottomRight'],
      total : props.dataSource?.length
    }}
    expandable={props.type === 'detail' && {
      expandedRowRender : record => (
        <React.Fragment key={record.id}>
          <Table 
            rowKey={row => row.id}
            dataSource={record.row}
            pagination={{
              hideOnSinglePage : true,
              total : record?.row?.length
            }}
            columns={baseColumns}
          />
        </React.Fragment>
        )
      }}
    summary={pageData => {
      if(props.type === 'detail'){
        const grandTotal = props.dataSource.reduce((total,num) => {
          let p = total.p + num.projected;
          let a = total.a + num.actual;
          let d = total.d + num.diff;
          return { p : p, a : a, d : d };
        },{p : 0,a: 0,d:0})
        return(
          <Table.Summary.Row style={{textAlign:'right'}}>
            <Table.Summary.Cell colSpan={2}><Typography.Text strong>Grand Total ($)</Typography.Text></Table.Summary.Cell>
            <Table.Summary.Cell>
              <Typography.Text strong>{numberFormat(grandTotal.p)}</Typography.Text>
            </Table.Summary.Cell>
            <Table.Summary.Cell strong>
              <Typography.Text>{numberFormat(grandTotal.a)}</Typography.Text>
            </Table.Summary.Cell>
            <Table.Summary.Cell strong>
              <Typography.Text>{numberFormat(grandTotal.d)}</Typography.Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )
      }
      return null
    }}
  />);
};