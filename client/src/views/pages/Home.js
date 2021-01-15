/* eslint-disable */
import React from 'react';
import { numberFormat } from 'utils';
import { connect } from 'react-redux';
import BaseLayout from "../frame/Base";
import { getAuth } from "redux/reselect";
import { nFormatter } from 'utils/generate';
import ReactEcharts from 'echarts-for-react';
import { Button,Menu, Dropdown, Typography,Space,
  Statistic, Row, Col,Tag,Card,Tabs } from "antd";
import useCustomReducer from "hooks/useCustomReducer";
import { TableView,chartData,optionGauge } from '../sampleData/Home';
import { EllipsisOutlined,FolderOpenTwoTone } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.rhivent.github.io/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.rhivent.github.io/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.rhivent.github.io/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};
const initialData = {
  addData : 0,
  gauge : optionGauge,
};
const Home = (props) => {
  const [dataReducer,reducerFunc] = useCustomReducer(initialData);
  const contentProps = {
    breadcrumb : [
      { text : 'Home' },
    ],
    title : `Hi ${props.userLogin.user.username.toUpperCase()}, Welcome Home`,
    extra : {
      avatar : { src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' },
      extra :[
        <Button key="today" type="text" icon={<FolderOpenTwoTone />}><Typography.Text strong> Today</Typography.Text></Button>,
        <DropdownMenu key="more" />,
      ]
    }
  };
  const operations = {
    right: <Button>Last Month</Button>,
  }
  React.useEffect(() => {
    setInterval(() => {
      reducerFunc('addData',parseFloat((Math.random()*100).toFixed(3)),'conventional');
    },1000);
  },[]);
  React.useEffect(() => {
    reducerFunc('gauge',{
      series: [
        {
          name: 'Business indicators',
          type: 'gauge',
          splitNumber: 10,
          max : 50000,
          min : 10000,
          radius: '100%',
          axisLine: {// coordinate axis
            lineStyle: {// attribute lineStyle controls the line style
              width: 5
            }
          },
          splitLine: {       // divider
            length: 20,      // attribute length control line length
            lineStyle: {     // Attribute lineStyle (see lineStyle for details) controls the line style
              color: 'auto'
            }
          },
          axisLabel : {
            formatter: val => nFormatter(val)
          },
          detail: {formatter: '${value}'},
          data: [{value: 14495 + dataReducer.addData, name: 'Completion rate'}]
        }
      ]
    });
  },[dataReducer.addData]);

  return(
  <BaseLayout {...contentProps}>
    <>
    <Row>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            title={<Space direction="horizontal"><Typography>Total Revenue</Typography><Tag color="green">+12.5%</Tag></Space>} 
            value={32621.72} 
            precision={2} 
          />
          <Typography.Text>433 Orders</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            title={<Space direction="horizontal"><Typography>Subscribers</Typography><Tag color="green">+32.5%</Tag></Space>} 
            value={484205} 
            precision={2} 
          />
          <Typography.Text>$56 Average Order</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            title={<Space direction="horizontal"><Typography>Conversations</Typography><Tag color="red">-3.4%</Tag></Space>} 
            value={552553} 
            precision={2} 
          />
          <Typography.Text>5min Average Response Time</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            formatter={val => `${val}%`} 
            title={<Space direction="horizontal"><Typography>Popup Conversation Rate</Typography><Tag color="green">+32.5%</Tag></Space>} 
            value={25} 
            precision={0} 
          />
          <Typography.Text>5% Sales Conversation Rate</Typography.Text>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Card>
          <ReactEcharts
            option={chartData}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onChartReady={(e) => {}}
            opts={{}}
            style={{height:500}}
          />
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs={24} md={24} lg={16} xl={16}>
        <Tabs tabBarExtraContent={operations}>
          <Tabs.TabPane tab={<Typography.Text strong>Automations</Typography.Text>} key="1">
            <TableView />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<Typography.Text strong>Campaigns</Typography.Text>} key="2">
            <Typography.Text strong>Campaigns</Typography.Text>
            <TableView />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<Typography.Text strong>Segments</Typography.Text>} key="3">
            <Typography.Text strong>Segments</Typography.Text>
            <TableView />
          </Tabs.TabPane>
        </Tabs>
      </Col>
      <Col xs={24} md={24} lg={8} xl={8}>
        <Card>
          <center><Typography.Title level={5}>Level 5</Typography.Title></center>
          <center><Typography.Text>+$({numberFormat(32050)}) in the last month</Typography.Text></center>
          <ReactEcharts
            option={dataReducer?.gauge}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onChartReady={(e) => {}}
            opts={{}}
          />
        </Card>
      </Col>
    </Row>
    </>
  </BaseLayout>
  );
};

const mapStateToProps = (state) => ({
  userLogin : getAuth(state),
});

export default connect(mapStateToProps)(Home);