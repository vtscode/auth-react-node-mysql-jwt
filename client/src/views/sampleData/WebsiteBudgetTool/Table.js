/* eslint-disable */
import React from 'react';
import { numberFormat } from "utils";
import { Typography,Table } from "antd";
import { ContextWebsiteBudgetTool } from "views/pages/WebsiteBudgetTool";

export default (props) => {
  const {reducerFunc} = React.useContext(ContextWebsiteBudgetTool);
  const columns = [
    {
      title : props.mainFieldType,
      dataIndex : 'main_field_type',
    },
    {
      title: 'YEAR',
      children: [
        {
          title: '1',
          dataIndex: 'year_1',
          align : 'right',
          key: 'year_1',
          sorter: (a, b) => a.year_1 - b.year_1,
          render : x => x ? numberFormat(x) : 0,
        },
        {
          title: '2',
          align : 'right',
          dataIndex: 'year_2',
          key: 'year_2',
          sorter: (a, b) => a.year_2 - b.year_2,
          render : x => x ? numberFormat(x) : 0,
        },
        {
          title: '3',
          align : 'right',
          dataIndex: 'year_3',
          key: 'year_3',
          sorter: (a, b) => a.year_3 - b.year_3,
          render : x => x ? numberFormat(x) : 0,
        },
        {
          title: '4',
          align : 'right',
          dataIndex: 'year_4',
          key: 'year_4',
          sorter: (a, b) => a.year_4 - b.year_4,
          render : x => x ? numberFormat(x) : 0,
        },
        {
          title: '5',
          align : 'right',
          dataIndex: 'year_5',
          key: 'year_5',
          sorter: (a, b) => a.year_5 - b.year_5,
          render : x => x ? numberFormat(x) : 0,
        },
      ]
    }
  ];
  const styleCtm = {
    textAlign : {textAlign:'right'}
  };

  const totalRecordYear1 = props.dataSource?.reduce((total,num) => total + parseInt(Math.abs(num.year_1)),0);
  const totalRecordYear2 = props.dataSource?.reduce((total,num) => total + parseInt(Math.abs(num.year_2)),0);
  const totalRecordYear3 = props.dataSource?.reduce((total,num) => total + parseInt(Math.abs(num.year_3)),0);
  const totalRecordYear4 = props.dataSource?.reduce((total,num) => total + parseInt(Math.abs(num.year_4)),0);
  const totalRecordYear5 = props.dataSource?.reduce((total,num) => total + parseInt(Math.abs(num.year_5)),0);

  React.useEffect(() => {
    reducerFunc(props.type,{
      totalRecordYear1,totalRecordYear2,totalRecordYear3,totalRecordYear4,totalRecordYear5
    });
  },[]);
  return(<Table 
    rowKey={row => row.id}
    columns={columns}
    dataSource={props.dataSource}
    pagination={{
      hideOnSinglePage : true,
      total : props.dataSource?.length
    }}
    summary={record => {
      
      return(<>
        <Table.Summary.Row style={styleCtm.textAlign}>
          <Table.Summary.Cell colSpan={1}>
            <Typography.Title level={5}>Total ($)</Typography.Title>
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text>{numberFormat(totalRecordYear1)}</Typography.Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text>{numberFormat(totalRecordYear2)}</Typography.Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text>{numberFormat(totalRecordYear3)}</Typography.Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text>{numberFormat(totalRecordYear4)}</Typography.Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            <Typography.Text>{numberFormat(totalRecordYear5)}</Typography.Text>
          </Table.Summary.Cell>
        </Table.Summary.Row>
        </>
      )
    }}
  />
)};