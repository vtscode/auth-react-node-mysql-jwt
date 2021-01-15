import React from 'react';
import { Row,Col, Card } from 'antd';
import graphData from "./dummy/graph";
import pathName from "routes/pathName";
import BaseLayout from "views/frame/Base";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
/* eslint-disable */

export default (props) => {
  const { home } = pathName;

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : 'This is Subtitle ' + titleNameByPathUrl(props.location.pathname),
  };

  const option = {
    backgroundColor: '#161627',
    title: {
      text: 'NPM Dependencies',
      left : 'center',
      textStyle : {
        color : '#fff'
      }
    },
    grid : {
      zlevel : 2,
      z : 2,
      height: 700,
      width: 500,
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 30
      },
      // progressiveThreshold: 700,
      data: graphData.nodes.map(function (node) {
        return {
          x: null,
          y: null,
          draggable: true,
          id: node.id,
          name: node.label,
          symbolSize: node.size,
          itemStyle: {
            color: node.color
          }
        };
      }),
      edges: graphData.edges.map(function (edge) {
        return {
          source: edge.sourceID,
          target: edge.targetID
        };
      }),
      emphasis: {
        label: {
          position: 'right',
          show: true
        }
      },
      roam: true,
      // focusNodeAdjacency: true,
      lineStyle: {
        width: 0.5,
        curveness: 0.3,
        opacity: 0.7
      }
    }]
  };

  return(
    <BaseLayout {...contentProps}>
      <Row>
        <Col span={24}>
          <Card>
            <ReactEcharts
              option={option}
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
    </BaseLayout>
  )
}