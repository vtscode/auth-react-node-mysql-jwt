import React from 'react';
import { Form } from "antd";
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { InputForm } from "components";

export default () => {
  const { home } = pathName;
  const [form] = Form.useForm();
  const [,setState] = React.useState({})

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : 'Form' },
    ],
    title : 'Example Form',
    subtitle : 'This is example form input',
  };

  const inputs = [
    { type : 'row', 
      cols : [
        { propsFormItem : { 
          label : 'Username',
          name : 'identifier', rules: [{required : true, message : 'Username harus diisi'}] }, propsInput : { placeholder : 'Username', autoFocus: true }, propsCol : { span: 23, md: 12, lg: 10 } 
        },
        { type : 'password', propsFormItem : { 
          label : 'Password',
          name : 'password', rules: [{required : true, message : 'Password harus diisi'}] }, propsInput : { placeholder : 'Password'} },
        { type : 'number', propsFormItem : { 
          label : 'Your ID Card',
          name : 'data_number', rules: [{required : true, message : 'ID card harus diisi'}] }, propsInput : { placeholder : 'ID Card Number'} },
        
      ],
    },
    { type : 'row',
      cols : [
        { type : 'select',
          propsFormItem : { 
            label : 'Province',
            name : 'province', rules: [{required : true, message : 'Pilih data'}] }, propsInput : { placeholder : 'Pilih Data' },
            propsCol : { span: 20, md: 8, lg: 8 } 
        },
        { type : 'select',
          propsFormItem : { 
            label : 'District',
            name : 'district', rules: [{required : true, message : 'Pilih data'}] }, propsInput : { placeholder : 'Pilih Data' },
            propsCol : { span: 20, md: 8, lg: 8 } 
        },
        { type : 'select',
          propsFormItem : { 
            label : 'City',
            name : 'city', rules: [{required : true, message : 'Pilih data'}] }, propsInput : { placeholder : 'Pilih Data' },
            propsCol : { span: 20, md: 8, lg: 8 } 
        },
      ]
    },
    { type : 'textarea',
      propsFormItem : { 
        label : 'Keterangan',
        name : 'data_keterangan', rules: [{required : true, message : 'Tulis keterangan'}] }, propsInput : { placeholder : 'Tulis keterangan' } 
    },
    { type : 'row',
      cols : [
        {
          type : 'switch',
          propsFormItem : { 
            label : 'On/Off',
            name : 'data_on_off', rules: [{required : true, message : 'Switch to aktif'}] }, propsInput : { placeholder : 'Pilih Switch' },
            propsCol : { span: 2, md: 2, lg: 2 }  
        },
        {
          type : 'checkbox',
          propsFormItem : { 
            label : 'Terms and Agreement',
            name : 'data_agree_not', rules: [{required : true, message : 'Agree button'}] }, propsInput : { placeholder : 'Check data' },
            propsCol : { span: 6, md: 6, lg: 6 } 
        }
      ]
    },
    
    { type : 'button', text : 'Login', propsBtn : { ...process, type: 'primary', htmlType : 'submit', block:true,} },
  ];

  const handleSubmit = async (value) => {
    try {
      const values = await form.validateFields();
      setState(values);
    } catch (error) {
      console.log(error?.message);
    }
  }

  return(
    <BaseLayout {...contentProps}>
      <Form form={form} 
        layout="horizontal"
        onFinish={handleSubmit} 
        initialValues={{identifier: 'riventus',password : 'qweqwe123'}}
      >
        <InputForm inputs={inputs} />
      </Form>
    </BaseLayout>
  )
}