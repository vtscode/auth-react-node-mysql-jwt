import React from 'react';
import { DatePicker } from 'antd';
import InputWrapper from './InputWrapper';

export default ({ format = 'YYYY-MM-DD', propsFormItem, propsInput }) => (
  <InputWrapper propsFormItem={propsFormItem}>
    <DatePicker format={format} style={{ width: '100%' }} {...propsInput}/>
  </InputWrapper>
);