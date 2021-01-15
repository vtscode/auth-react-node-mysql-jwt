import React from 'react';
import { Select } from 'antd';
import InputWrapper from './InputWrapper';

export default ({ propsFormItem, propsInput, data = [] }) => (
  <InputWrapper propsFormItem={propsFormItem}>
    <Select {...propsInput}>
      {data?.map(m => (
        <Select.Option key={m.value} value={m.value}>{m.text}</Select.Option>
      ))}
    </Select>
  </InputWrapper>
);