import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
import { Card,Typography,Row,Col,Space,Statistic } from 'antd';
import { TableData,ExampleData,optChartPie,optChartBar,summaryChart } from "../sampleData/EventBudget";

export default (props) => {
  const { home } = pathName;
  console.log(props);

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : `This is Subtitle page ${titleNameByPathUrl(props.location.pathname)}`,
  }

  return(
    <BaseLayout {...contentProps}>
      <center><Typography.Title level={3}>EVENT NAME</Typography.Title></center>
      <Row gutter={16}>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={optChartBar('income')}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}} 
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={summaryChart}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}} 
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={optChartPie}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              onEvents={{
                click : (e) => console.log(e)
              }}
              opts={{}} 
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={optChartBar()}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}} 
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} md={12} lg={8} xl={8}>
          <Card title="Expense">
            <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
              <Statistic title="Estimated ($)" value={ExampleData.totalExpenses.estimated} />
              <Statistic title="Actual ($)" value={ExampleData.totalExpenses.actual} />
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8} xl={8}>
          <Card title="Income">
            <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
              <Statistic title="Estimated ($)" value={ExampleData.totalIncome.estimated} />
              <Statistic title="Actual ($)" value={ExampleData.totalIncome.actual} />
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8} xl={8}>
          <Card title="Profit - Loss Summary">
            <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
              <Statistic title="Estimated ($)" value={ExampleData.totalIncome.estimated - ExampleData.totalExpenses.estimated} />
              <Statistic title="Actual ($)" value={ExampleData.totalIncome.actual - ExampleData.totalExpenses.actual} />
            </Space>
          </Card>
        </Col>
      </Row>
      <hr/>
      <TableData type="expense" dataSource={ExampleData.expense} />
      <hr/>
      <TableData type="income" dataSource={ExampleData.income} />
    </BaseLayout>
  )
}