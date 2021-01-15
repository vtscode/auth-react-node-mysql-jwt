/* eslint-disable */
import React from 'react';
import { noImagePath } from "utils";
import network from "services/network";
import pathName from "routes/pathName";
import { Link } from 'react-router-dom';
import {InputForm,Notif} from "components";
import { Layout,Form,Card, Image } from "antd";

const Register = () => {
  const [form] = Form.useForm();
  const { endpoint } = pathName;
  const [process,setprocess] = React.useState({loading : false, disabled : false });

  const handleSubmit = async (e) => {
    setprocess({ loading : true, disabled : true });
    let loginpath = endpoint.register;
    try {
      await form.validateFields();
      const resp = await network.post(loginpath,'',e);
      
      if(resp){
        Notif({type : 'success', response : {code : 'Success', message : 'Registered !'} })
      }
      setprocess({ loading : false, disabled : false });
    } catch (error) {
      setprocess({ loading : false, disabled : false });
      console.log(error);
    }
  };

  const inputs = [
    { propsFormItem : { 
      name : 'username', rules: [{required : true, message : 'Username harus diisi'}] }, propsInput : { placeholder : 'Username', autoFocus: true} },
    { type : 'password', propsFormItem : { 
      name : 'password', rules: [{required : true, message : 'Password harus diisi'}] }, propsInput : { placeholder : 'Password'} },
    { type : 'button', text : 'Register', propsBtn : { ...process, type: 'primary', htmlType : 'submit', block:true } },
  ];

  return(
    <Layout.Content>
      <Card className="login__card">
        <center>
          <Image src={noImagePath} alt="nothing" />
          <h1>Register Pages</h1>
        </center>
        <Form form={form} onFinish={handleSubmit}>
          <InputForm inputs={inputs} />
        </Form>
        <br/>
        <center>
          <Link to={pathName.login}>Login</Link>
        </center>
      </Card>
    </Layout.Content>
  )
};
export default Register;