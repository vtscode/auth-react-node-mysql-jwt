import React from 'react';
import { Input } from 'antd';
import InputWrapper from './InputWrapper';

const App = ({ propsFormItem,propsInput }) => (
  <InputWrapper propsFormItem={propsFormItem}>
    <Input.TextArea rows={propsInput?.rows ?? 4} {...propsInput} />
  </InputWrapper>
);

export default App;