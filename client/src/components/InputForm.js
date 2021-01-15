import React from 'react';
import { Row, Col } from 'antd';
import InputDate from './form/InputDate';
import InputText from './form/InputText';
import InputButton from './form/InputButton';
import InputSelect from './form/InputSelect';
import InputNumber from './form/InputNumber';
import InputSwitch from './form/InputSwitch';
import InputPassword from './form/InputPassword';
import InputTextArea from './form/InputTextArea';
import InputCheckbox from './form/InputCheckbox';

const InputControl = (props) => {
  const { type } = props;
  const prop = { ...props };

  switch (type) {
    case 'button':
      return InputButton(prop);
    case 'checkbox':
      return InputCheckbox(prop);
    case 'datepicker':
      return InputDate(prop);
    case 'number':
      return InputNumber(prop);
    case 'password':
      return InputPassword(prop);
    case 'row':
      return InputRow(prop);
    case 'select':
      return InputSelect(prop);
    case 'switch':
      return InputSwitch(prop);
    case 'textarea':
      return InputTextArea(prop);
    default:
      return <InputText {...prop} />
  }
};
const InputRow = ({ cols=[], gutter=12 }) => (
  <Row gutter={gutter}>
    {cols.map((item, idx) => (
      <Col key={idx} span={12} className={!item.text ? 'no-label' : ''} {...item.propsCol}>
        <InputControl {...item} />
      </Col>
    ))}
  </Row>
);

export default ({inputs = []}) => (
  <React.Fragment>
    {inputs.map((item, idx) => <InputControl key={idx} {...item} />)}
  </React.Fragment>
);