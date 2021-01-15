import React from 'react';
import { Switch } from 'antd';
import InputWrapper from './InputWrapper';

export default ({propsFormItem,propsInput}) => (
  <InputWrapper propsFormItem={{...propsFormItem,valuePropName:"checked"}}>
    <Switch {...propsInput}/>
  </InputWrapper>
);