import React from 'react';
import { Row,Col, Card } from 'antd';
import pathName from "routes/pathName";
import BaseLayout from "views/frame/Base";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
import 'echarts/extension/bmap/bmap';
import echarts from 'echarts';
import { buslineOpt,populationOpt,airQualityOpt } from "./dummy/map";
import HKGeojson from "./dummy/HKGeojson.json";
// import BMap from 'BMap';
/* eslint-disable */

export default (props) => {
  const { home } = pathName;
  echarts.registerMap('HK',HKGeojson);

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : 'This is Subtitle ' + titleNameByPathUrl(props.location.pathname),
  };

  return(
  <BaseLayout {...contentProps}>
    <React.Fragment>
      <Row>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={buslineOpt}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}}
              style={{height:800}}
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={populationOpt}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}}
              style={{height:800}}
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Card>
            <ReactEcharts
              option={airQualityOpt}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}}
              style={{height:800}}
            />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  </BaseLayout>
  );
}