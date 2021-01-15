/* eslint-disable */
import React from 'react';
import { numberFormat } from "utils";
import { Typography,Table } from "antd";
// import { DataContext } from "views/pages/EventBudget";

export default (props) => {
  const columns = [
    {
      title : <Typography.Text strong>{props.type === 'income' ? 'INCOME' : 'EXPENSE'}</Typography.Text>,
      dataIndex : 'name',
    },
    {
      title : <Typography.Text strong>Estimated ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'totalEstimated',
      render : x => x ? numberFormat(x) : 0,
    },
    {
      title : <Typography.Text strong>Actual ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'totalActual',
      render : x => x ? numberFormat(x) : 0,
    },
  ];
  const columnsExpand = [
    {
      title : <Typography.Text strong>Sub-Field</Typography.Text>,
      dataIndex : 'name_field',
    },
    {
      title : <Typography.Text strong>Estimated ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'estimated',
    },
    {
      title : <Typography.Text strong>Actual ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'actual',
    },
  ];
  const columIncome = [
    {
      title : <Typography.Text strong>Price ($)</Typography.Text>,
      align : 'right',
      dataIndex : 'price',
    },
    {
      title : <Typography.Text strong>Total Estimated ($)</Typography.Text>,
      align : 'right',
      render : row => numberFormat(row.estimated * row.price)
    },
    {
      title : <Typography.Text strong>Total Actual ($)</Typography.Text>,
      align : 'right',
      render : row => numberFormat(row.actual * row.price)
    },
  ];

  return(
  <Table 
    bordered
    rowKey={row => row.id}
    columns={columns}
    dataSource={props.dataSource}
    pagination={{
      hideOnSinglePage : true,
      total : props.dataSource?.length
    }}
    expandable={{
      expandedRowRender : record => (
      <React.Fragment key={record.id}>
        <Table 
          rowKey={row => row.id}
          dataSource={record.row}
          pagination={{
            hideOnSinglePage : true,
            total : record?.row?.length
          }}
          columns={props.type === 'income' ? [...columnsExpand,...columIncome] : columnsExpand}
          summary={pageData => {
            let totalEstimate,totalActual;
            if(props.type === 'income'){
              totalEstimate = record.row.reduce((total,num) => total + (num.estimated * num.price),0);
              totalActual = record.row.reduce((total,num) => total + (num.actual * num.price),0);
            }else{
              totalEstimate = record.row.reduce((total,num) => total + num.estimated,0);
              totalActual = record.row.reduce((total,num) => total + num.actual,0);
            }
            
            return(
              <Table.Summary.Row style={{textAlign:'right'}}>
                <Table.Summary.Cell colSpan={props.type === 'income' ? 4 : 1}><Typography.Text strong>Total ($)</Typography.Text></Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Typography.Text strong>{numberFormat(totalEstimate)}</Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Typography.Text strong>{numberFormat(totalActual)}</Typography.Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            );
          }}
        />
      </React.Fragment>
      )
    }}
    summary={pageData => {
      const totalEstimate = props.dataSource.reduce((total,num) => total + num.totalEstimated ,0);
      const totalActual = props.dataSource.reduce((total,num) => total + num.totalActual ,0);
      return(
        <Table.Summary.Row style={{textAlign:'right'}}>
          <Table.Summary.Cell colSpan={2}><Typography.Text strong>Total ($)</Typography.Text></Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text strong>{numberFormat(totalEstimate)}</Typography.Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell strong>
            <Typography.Text>{numberFormat(totalActual)}</Typography.Text>
          </Table.Summary.Cell>
        </Table.Summary.Row>
      );
    }}
  />);
};