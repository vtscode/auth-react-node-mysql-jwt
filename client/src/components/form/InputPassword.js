import React from 'react';
import { Input } from 'antd';
import InputWrapper from './InputWrapper';

export default ({ propsFormItem, propsInput }) => (
  <InputWrapper propsFormItem={propsFormItem}>
    <Input.Password {...propsInput}/>
  </InputWrapper>
);