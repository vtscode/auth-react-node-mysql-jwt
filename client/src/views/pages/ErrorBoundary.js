import React from 'react';
import { Result, Button } from 'antd';

class ErrorPage extends React.Component{
  constructor(){
    super();
    this.state = {
      hasErrored : false,
    };
  }

  static getDerivedStateFromError(error){
    // process the error
    console.log(error);
    return { hasErrored : true };
  }

  componentDidCatch(error, info){
    // info = which component error
    // console.log(error);
    // console.log(info);
  }

  handleRedirect = (e) => {
    e.preventDefault();
    localStorage.clear();
    // window.location.replace('/login');
  }

  render(){
    if(this.state.hasErrored){
      return(
        <Result
          icon={<img src='/assets/logo.png' alt="riventus-log" />}
          title="Terjadi Kesalahan Pada Sistem"
          extra={<Button type="primary" danger onClick={this.handleRedirect}>Refresh Page</Button>}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorPage;