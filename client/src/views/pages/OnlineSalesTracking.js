/* eslint-disable */
import React from 'react';
import 'echarts-gl';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
import { Row,Col,Table, Typography,Card } from "antd";
import { OnlineSalesTracking } from "../sampleData";

const App = (props) => {
  const { home } = pathName;
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
  };

  return(
    <BaseLayout {...contentProps}>
      <Typography.Text>Keeps you up to speed by tracking metrics of your business such as sales and profits. This dashboard provides a very simplistic view of your business and yet it is very powerful.</Typography.Text>
      <br />
      <Row>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={OnlineSalesTracking().barData}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => console.log(e)}
              opts={{}} 
            />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={OnlineSalesTracking().pieData}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => console.log(e)}
              opts={{}} 
            />
          </Card>
        </Col>
        <Col span={24}>
        <Table
          rowKey={row => row.id}
          pagination={{
            hideOnSinglePage : true,
          }}
          dataSource={OnlineSalesTracking().tableData}
          columns={OnlineSalesTracking().columnTable}
        />
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default App;