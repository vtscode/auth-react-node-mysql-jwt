import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const propLoad = {
  spin: 'true',
  className:'loading__fallback',
  style : {
    fontSize: 24
  }
}

export default (props) => {
  return (
    <Spin 
      spinning={props.loading} 
      indicator={<LoadingOutlined {...propLoad} type="loading"/>} 
      delay={400} 
      size="large" 
      tip="Loading..."
    >
      {props.children}
    </Spin>
  );
};

export const LoadingState = () => <Spin {...propLoad} indicator={<LoadingOutlined/>}  tip="Loading..."/>;