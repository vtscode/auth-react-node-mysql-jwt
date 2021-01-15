/* eslint-disable */
import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import styled from "styled-components";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
import { Card,Typography,Row,Col } from 'antd';
import { exampleData,TableView,
  optMonthExpenses,optSmstrExpense,optMonthIncome } from "../sampleData/CollegeBudget";

export default props => {
  const { home } = pathName;
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : `This is Subtitle page ${titleNameByPathUrl(props.location.pathname)}`,
  };

  const WrapperTitle = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
  `;

  return(
    <BaseLayout {...contentProps}>
      <WrapperTitle>
        <Typography.Title level={3}>My College Budget</Typography.Title>
      </WrapperTitle>
      <Row>
        <Col xs={24} md={12} lg={8} xl={8}>
          <Row>
            <Col span={24}>
              <ReactEcharts
                option={optMonthIncome}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                onChartReady={(e) => {}}
                opts={{}}
                style={{height:500}}
              />
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Monthly Income</Typography.Title>
              <hr/>
              <TableView
                type="income"
                dataSource={exampleData.monthlyIncome}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} lg={8} xl={8}>
          <Row>
            <Col span={24}>
              <ReactEcharts
                option={optMonthExpenses}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                onChartReady={(e) => {}}
                opts={{}}
                style={{height:500}}
              />
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Monthly Expenses</Typography.Title>
              <hr/>
              <Card>
                <TableView
                  type="expense"
                  dataSource={exampleData.monthlyExpenses}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} lg={8} xl={8}>
          <Row>
            <Col span={24}>
              <ReactEcharts
                option={optSmstrExpense}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                onChartReady={(e) => {}}
                opts={{}}
                style={{height:500}}
              />
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Semester Expense</Typography.Title>
              <hr/>
              <TableView
                type="semester"
                dataSource={exampleData.semesterExpenses}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </BaseLayout>
  );
};