import React from 'react';
import menus from "routes/menus";
import { Layout,Menu } from "antd";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { getTheme } from "redux/reselect";
import {useHistory} from 'react-router-dom';

const {SubMenu} = Menu;
const {Sider} = Layout;
const SiderStyled = styled(Sider)`
  min-height:88vh;
  
  .ant-layout-sider-trigger{
    position : absolute;
    color : #555;
    background-color:${props => props.color};
  }
  .ant-layout-sider-zero-width-trigger{
    position: absolute;
    top : -3.9em;
    left : 12em;
    color : ${props => props.color === '#001529' ? 'white' : 'inherit' };
    background-color:${props => props.color};

    @media screen and (max-width: 500px) {
      left: 9em;
    }
  }
`;

const MenuStyled = styled(Menu)`
  height: 100%; 
  border-right: 0;
`;
const Sidebar = ({theme}) => {
  const history = useHistory();
  const [collapsed,setcollapsed] = React.useState(false);
  
  const onCollapse = collapsed => setcollapsed(collapsed);

  return(
    <SiderStyled
      collapsible 
      collapsed={collapsed} 
      onCollapse={onCollapse}
      color={theme.colorheader}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        // console.log(broken);
      }}
    >
      <MenuStyled
        mode={theme.mode}
        theme={theme.theme}
        defaultSelectedKeys={history.location.pathname}
        selectedKeys={history.location.pathname}
      >
        {menus.items.map((x,idx) => {
          if(x.children){
            return (
            <SubMenu key={idx} icon={x.icon} title={x.name}>
              {
                x.children.map((child,index) => 
                (<Menu.Item key={child.url} icon={child.icon}><Link to={child.url}>{child.name}</Link></Menu.Item>))
              }
            </SubMenu>);
          }
          return <Menu.Item key={x.url} icon={x.icon}><Link to={x.url}>{x.name}</Link></Menu.Item>;
        })}
      </MenuStyled>
    </SiderStyled>
  );
};
const mapStateToProps = (state) => ({theme : getTheme(state)});
export default connect(mapStateToProps)(Sidebar);