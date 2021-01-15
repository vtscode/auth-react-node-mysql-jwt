import React from 'react';
import { Avatar, Button, Dropdown, Tooltip,
Layout, Menu, Space, Typography } from "antd";
import { noImagePath } from "utils";
import { connect } from 'react-redux';
import styled from "styled-components";
import pathName from "routes/pathName";
import { clearAuth } from "redux/auth/action";
import { changeTheme } from "redux/theme/action";
import { getAuth,getTheme } from "redux/reselect";
import { UserOutlined,BulbOutlined, BulbFilled } from '@ant-design/icons';

const colorTheme = {
  light : 'rgb(255, 241, 184)',
  white : '#fff',
  dark : '#001529'
}
const {Header} = Layout;
const ImageHead = styled.div`
  width: 120px;
  height: 31px;
  margin: 1rem 28px 1rem 0;
  float: left;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url(${props => props.src && props.src}) no-repeat center center;

  @media screen and (max-width: 400px) {
    margin: 1rem 0 0 0;
  }
`;
const AvatarStyled = styled(Avatar)`
  background-color: #fff;
  color: darkolivegreen;
`;
const HeaderStyled = styled(Header)`
  background-color: ${props => props.color};
  @media screen and (max-width: 400px) {
    padding: 0 1rem 0 0;
  }
`;
const WrapperMenuHeader = styled.div`
  float:right;
`;

const menu = (props,handleLogout) => {
  const changeMode = () => {
    const newMode = props.theme.mode === 'vertical' ? 'inline' : 'vertical';
    props.changeTheme({mode : newMode });
  }
  
  return(
  <Menu style={{}}>
    <Menu.Item key="3"><Button type="text" onClick={changeMode}>Sidebar : {props.theme.mode}</Button></Menu.Item>
    <Menu.Item key="4"><Button type="text" onClick={handleLogout}>LOGOUT</Button></Menu.Item>
  </Menu>
)};

const App = (props) => {
  // const {state,setState} = React.useContext(LayoutContext);
  const changeTheme = () => {
    const newTheme = props.theme.theme === 'light' ? 'dark' : 'light';
    const newColor = props.theme.colorheader === colorTheme.dark ? colorTheme.light : colorTheme.dark;
    props.changeTheme({theme : newTheme, colorheader : newColor});
  }

  const handleLogout = () => {
    props.loggedOut();
    window.location.replace(pathName.login);
  }

  return(<>
    <HeaderStyled color={props.theme.colorheader}>
      <ImageHead src={noImagePath} />
      <WrapperMenuHeader>
        <Tooltip title="Change theme">
          <Button 
            type="text" 
            shape="circle" 
            size="large"
            icon={props.theme.theme === 'light' ? <BulbOutlined /> : <BulbFilled/>} 
            onClick={changeTheme} 
            style={props.theme.theme === 'light' ? {color : 'inherit'} : {color : colorTheme.white }}
          />
        </Tooltip>
        <Dropdown trigger={['click']} placement="bottomRight" overlay={() => menu(props,handleLogout)}>
          <Space direction="horizontal" style={{float:'right'}}>
          <Typography.Text style={props.theme.theme === 'light' ? {color : 'inherit'} : {color : colorTheme.white }}>Hi, <strong>{props.userLogin?.user?.username}</strong></Typography.Text>
          <AvatarStyled 
            size={30} 
            icon={<UserOutlined />}
          />
          </Space>
        </Dropdown>
      </WrapperMenuHeader>
    </HeaderStyled>
  </>);
};

const mapStateToProps = (state) => ({
  userLogin : getAuth(state),
  theme : getTheme(state) 
});
const mapDispatchToProps = dispatch => ({
  loggedOut : () => dispatch(clearAuth()),
  changeTheme : (value) => dispatch(changeTheme(value)), //passing value {theme : ,colorheader : } from action menu above
})

export default connect(mapStateToProps,mapDispatchToProps)(App);