/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { noImagePath } from "utils";
import network from "services/network";
import pathName from "routes/pathName";
import { setAuth } from "redux/auth/action";
import InputForm from "components/InputForm";
import { Layout,Form,Card, Image } from "antd";
import localStorageService from "services/localStorageService";
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [form] = Form.useForm();
  const { endpoint,home } = pathName;
  const [process,setprocess] = React.useState({loading : false, disabled : false });

  const handleSubmit = async (e) => {
    setprocess({ loading : true, disabled : true });
    let loginpath = endpoint.login;
    try {
      await form.validateFields();
      const resp = await network.post(loginpath,'',e);
      
      if(resp){
        await props.loggedIn(resp);
        if(localStorageService('historypath').getAccessToken()){
          setTimeout(() => props.history.replace(localStorageService('historypath').getAccessToken()),500)
        }else{
          setTimeout(() => props.history.replace(home),500)
          ;
        }
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
    { type : 'button', text : 'Login', propsBtn : { ...process, type: 'primary', htmlType : 'submit', block:true } },
  ];

  React.useEffect(() => {
    if(localStorageService('auth').getAccessToken()){
      if(localStorageService('historypath').getAccessToken()){
        props.history.replace(localStorageService('historypath').getAccessToken());
      }else{
        props.history.replace(home);
      }
    }
  },[]);

  return(
    <Layout.Content>
      <Card className="login__card">
        <center>
          <Image src={noImagePath} alt="nothing" />
          <h1>Login Pages</h1>
        </center>
        <Form form={form} onFinish={handleSubmit} initialValues={{username: 'riventus',password : 'password'}}>
          <InputForm inputs={inputs} />
        </Form>
        <br/>
        <center>
          <Link to={pathName.register}>Register</Link>
        </center>
      </Card>
    </Layout.Content>
  )
};
const mapDispatchToProps = (dispatch) => ({
  loggedIn: values => dispatch(setAuth(values)),
});
export default connect(null,mapDispatchToProps)(Login);