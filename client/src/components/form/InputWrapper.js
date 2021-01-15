import React from 'react';
import { Form } from 'antd';

export default ({propsFormItem,children}) => (
  <Form.Item {...propsFormItem}>
    {children}
  </Form.Item>
);