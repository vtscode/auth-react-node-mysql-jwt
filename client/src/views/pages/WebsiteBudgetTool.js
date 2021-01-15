/* eslint-disable */
import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { useCustomReducer } from "hooks";
import { randomString } from "utils/generate";
import { Row,Col,Space,Typography,Statistic, Card } from "antd";
import { TableData } from '../sampleData/WebsiteBudgetTool';
import { formDateDisplayValue,titleNameByPathUrl } from "utils";
import { dataInitialInvestment,dataAdvantage } from '../sampleData/WebsiteBudgetTool/exampleData';

export const ContextWebsiteBudgetTool = React.createContext({});
const initialData = {
  tax : 30,
  ror : 10,
  npv : 394,
  irr : 10.1,
  cost : {},
  payback : 2.52,
  advantage : {},
  netBenefit : {},
  initialBenefit : {},
};
export default (props) => {
  const { home } = pathName;
  const [dataReducer,reducerFunc] = useCustomReducer(initialData);
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) }
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : 'This is Subtitle page 1',
  };
  
  const dataCost = [
    {
      id : randomString(7),
      main_field_type : 'Cost of sales',
      year_1 : 35700,
      year_2 : 35700,
      year_3 : 35700,
      year_4 : 35700,
      year_5 : 35700,
    },
    {
      id : randomString(7),
      main_field_type : 'Maintenance',
      year_1 : 15000,
      year_2 : 15000,
      year_3 : 15000,
      year_4 : 15000,
      year_5 : 15000,
    },
    {
      id : randomString(7),
      main_field_type : 'Project management, customer support',
      year_1 : 35000,
      year_2 : 35000,
      year_3 : 35000,
      year_4 : 35000,
      year_5 : 35000,
    },
    {
      id : randomString(7),
      main_field_type : 'Online advertising, search-engine registration',
      year_1 : 10000,
      year_2 : 10000,
      year_3 : 10000,
      year_4 : 10000,
      year_5 : 10000,
    },
    {
      id : randomString(7),
      main_field_type : 'Depreciation on capital expenditures (calculation uses three-year period)',
      year_1 : Math.round(dataReducer?.initialBenefit?.totalRecordYear1 / 3),
      year_2 : Math.round(dataReducer?.initialBenefit?.totalRecordYear1 / 3),
      year_3 : Math.round(dataReducer?.initialBenefit?.totalRecordYear1 / 3),
      year_4 : Math.round(dataReducer?.initialBenefit?.totalRecordYear1 / 3),
      year_5 : Math.round(dataReducer?.initialBenefit?.totalRecordYear1 / 3),
    },
    {
      id : randomString(7),
      main_field_type : 'Hosting, domain-name registration',
      year_1 : 150,
      year_2 : 150,
      year_3 : 150,
      year_4 : 150,
      year_5 : 150,
    },
    {
      id : randomString(7),
      main_field_type : 'General and administrative (e.g., rent, insurance, exec. salaries)',
      year_1 : 10000,
      year_2 : 10000,
      year_3 : 10000,
      year_4 : 10000,
      year_5 : 10000,
    },
    {
      id : randomString(7),
      main_field_type : '[Other costs]',
      year_1 : 0,
      year_2 : 0,
      year_3 : 0,
      year_4 : 0,
      year_5 : 0,
    },
  ];
  const dataNetBenefit = [
    {
      id : randomString(7),
      main_field_type : 'Net Benefits (Costs)',
      year_1 : 123412,
      year_2 : 324512,
      year_3 : 485923,
      year_4 : 190823,
      year_5 : 214993,
    },
    {
      id : randomString(7),
      main_field_type : 'Tax',
      year_1 : 123412,
      year_2 : 34524,
      year_3 : 28495,
      year_4 : 23495,
      year_5 : 12890,
    },
    {
      id : randomString(7),
      main_field_type : 'Value after tax',
      year_1 : 12312,
      year_2 : 42132,
      year_3 : 52323,
      year_4 : 23942,
      year_5 : 23940,
    },
    {
      id : randomString(7),
      main_field_type : 'Depreciation added back',
      year_1 : Math.round(dataReducer?.initialBenefit?.totalRecordYear1 / 3),
      year_2 : Math.round(dataReducer?.initialBenefit?.totalRecordYear2 / 3),
      year_3 : Math.round(dataReducer?.initialBenefit?.totalRecordYear3 / 3),
      year_4 : Math.round(dataReducer?.initialBenefit?.totalRecordYear4 / 3),
      year_5 : Math.round(dataReducer?.initialBenefit?.totalRecordYear5 / 3),
    },
    {
      id : randomString(7),
      main_field_type : 'Cash flow',
      year_1 : dataReducer?.initialBenefit?.totalRecordYear1,
      year_2 : 12412,
      year_3 : 3241,
      year_4 : 12412,
      year_5 : 12412,
    },
    {
      id : randomString(7),
      main_field_type : 'Cumulative cash flow',
      year_1 : dataReducer?.initialBenefit?.totalRecordYear1,
      year_2 : 70341,
      year_3 : 35233,
      year_4 : 42340,
      year_5 : 41029,
    },
  ];
  
  return(
    <BaseLayout {...contentProps}>
      <ContextWebsiteBudgetTool.Provider value={{dataReducer,reducerFunc}}>
        <center>
          <Typography.Title level={2}>[Company Name]</Typography.Title>
          <Typography.Title level={4}>[Website Budgeting Tool]</Typography.Title>
          <Typography.Title level={5}>{formDateDisplayValue(new Date(),'DD MMMM YYYY')}</Typography.Title>
        </center>
        <Row gutter={16}>
          <Col xs={24} md={12} lg={10} xl={10}>
            <Card title="Company Data">
              <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
                <Statistic title="Required rate return" value={`${dataReducer?.ror}%`} />
                <Statistic title="Tax Rate" value={`${dataReducer?.tax}%`} />
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={14} xl={14}>
            <Card title="Evaluation Metrics">
              <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
                <Statistic title="Net present value (NPV)" value={`$${dataReducer?.npv}`} />
                <Statistic title="Internal rate of return (IRR)" value={`${dataReducer?.irr}%`} />
                <Statistic title="Payback period (in years)" value={`${dataReducer?.payback}`} />
              </Space>
            </Card>
          </Col>
        </Row>
        <Typography.Text type="danger">Years column contain calculations that should not be altered.</Typography.Text>
        <TableData 
          mainFieldType={<Typography.Title level={5}>Initial Investment</Typography.Title>} 
          dataSource={dataInitialInvestment}
          type='initialBenefit'
        />
        <TableData 
          mainFieldType={<Typography.Title level={5}>Benefit from the Website</Typography.Title>}
          dataSource={dataAdvantage} 
          type='advantage'
        />
        <TableData 
          mainFieldType={<Typography.Title level={5}>Costs (Excluding Initial Capital Investments)</Typography.Title>} 
          dataSource={dataCost} 
          type='cost'
        />
        <TableData 
          mainFieldType={<Typography.Title level={5}>Net Benefits (Costs)</Typography.Title>} 
          dataSource={dataNetBenefit} 
          type='netBenefit'
        />
      </ContextWebsiteBudgetTool.Provider>
    </BaseLayout>
  )
}