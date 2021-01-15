import React from 'react';
import { InputNumber } from 'antd';
import InputWrapper from './InputWrapper';

export default ({ propsFormItem, propsInput }) => (
  <InputWrapper propsFormItem={propsFormItem}>
    <InputNumber
      style={{ width: '100%' }}
      {...propsInput}
    />
  </InputWrapper>
);