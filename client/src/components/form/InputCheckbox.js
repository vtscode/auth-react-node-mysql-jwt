import React from 'react';
import { Checkbox } from 'antd';
import InputWrapper from './InputWrapper';

export default ({propsFormItem,propsInput,text}) => (
  <InputWrapper propsFormItem={{...propsFormItem,valuePropName:"checked"}}>
    <Checkbox {...propsInput}>{text}</Checkbox>
  </InputWrapper>
);