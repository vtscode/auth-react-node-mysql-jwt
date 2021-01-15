import React from 'react';
import { Row,Col } from 'antd';
import pathName from "routes/pathName";
import BaseLayout from "views/frame/Base";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
import candlestickData from "./dummy/candlestick";

export default (props) => {
  const { home } = pathName;
  const [data,] = React.useState(candlestickData);
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : 'This is Subtitle ' + titleNameByPathUrl(props.location.pathname),
  };
  // React.useEffect(() => {
  //   setInterval(() =>{
  //     data0.shift();
  //     data0.push(generateOHLC(1));
  //     setdata({...candlestickData, dataset : { source : data0 } });
  //   },1000);
  // },[]);
  return ( <BaseLayout {...contentProps}>
    <Row>
      <Col span={24}>
        <ReactEcharts
          option={data}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
          onChartReady={(e) => {}}
          opts={{}}
          style={{height:'50em'}}
        />
      </Col>
    </Row>
  </BaseLayout>);
}