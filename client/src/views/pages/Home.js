/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import BaseLayout from "../frame/Base";
import { getAuth } from "redux/reselect";
import { Button,Menu, Dropdown, Typography,Card,Row, Col} from "antd";
// import useCustomReducer from "hooks/useCustomReducer";
import { EllipsisOutlined,FolderOpenTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import pathName from 'routes/pathName';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://rvaha.site">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://rvaha.site">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://rvaha.site">
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
const Home = (props) => {
  const contentProps = {
    breadcrumb : [
      { text : 'Home' },
    ],
    title : `Hi ${props.userLogin.user && props.userLogin.user.username.toUpperCase()}, Welcome Home`,
    extra : {
      avatar : { src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' },
      extra :[
        <Button key="today" type="text" icon={<FolderOpenTwoTone />}><Typography.Text strong> Today</Typography.Text></Button>,
        <DropdownMenu key="more" />,
      ]
    }
  };
  
  return(
  <BaseLayout {...contentProps}>
    <Row>
      <Col>
        <Card title="Menu Barang">
          <Link to={pathName.pages.barang}>Barang</Link>
        </Card>
      </Col>
    </Row>
  </BaseLayout>
  );
};

const mapStateToProps = (state) => { 
 console.log(state)
  return{
  userLogin : getAuth(state),
}};

export default connect(mapStateToProps)(Home);