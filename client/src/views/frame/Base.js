/* eslint-disable */
import React from 'react';
import { Layout } from "antd";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Siderbar';
// import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import styled from 'styled-components';
import pathName from "routes/pathName";
import IsiContent from "components/Content";
import { useHistory } from "react-router-dom";
import { getAuth,getTheme } from "redux/reselect";
import { setHistoryPath } from "redux/historypath/action";

const {Content} = Layout;
const WrapperLayout = styled(Layout)`
  min-height: 100vh;
  background-color : ${props => props.colorbglayout}
`;
const ContentStyled = styled(Content)`
  margin: 1rem 1rem 0 1rem;
`;
const LayoutStyled = styled(Layout)`
  box-shadow:#d971275e 0 1rem 2.5rem 0;
  border-radius : 1rem;
`;

const Base = (props) => {
  const history = useHistory();
  const colorBgLayout = props.theme.theme === 'light' ? 'inherit' : '#1e2020';

  React.useEffect(() => {
    if(props.userLogin?.user){
      props.historyPathFunc(history.location.pathname);
    }else{
      window.location.replace(pathName.login);
    }
  },[props.userLogin?.user]);
  return(
    <WrapperLayout colorbglayout={colorBgLayout}>
      <Header />
      <ContentStyled>
        <LayoutStyled>
          <Sidebar />
          <Content style={{ margin: '0 1rem'}}>
            <IsiContent {...props}>
              {props.children}
            </IsiContent>
            <Footer />
          </Content>
        </LayoutStyled>
      </ContentStyled>
    </WrapperLayout>
  );
};
const mapStateToProps = (state) => ({
  theme : getTheme(state),
  userLogin : getAuth(state)
});
const mapDispatchToProps = (dispatch) => ({
  historyPathFunc : value => dispatch(setHistoryPath(value))
});
export default connect(mapStateToProps,mapDispatchToProps)(Base);