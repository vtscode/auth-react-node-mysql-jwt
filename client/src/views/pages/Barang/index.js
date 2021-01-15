import React from 'react';
import { InputForm,Notif } from "components";
import pathName from "routes/pathName";
import { useCustomReducer } from "hooks";
import BaseLayout from "../../frame/Base";
import { titleNameByPathUrl } from "utils";
import { randomString } from "utils/generate";
import { PlusOutlined,EditOutlined,DeleteOutlined } from "@ant-design/icons";
import Network,{cancelToken} from "services/network";

import { Table, Input, InputNumber, Popconfirm, 
  Form, Space,Button,Row,Modal,Card } from 'antd';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (<React.Fragment key={randomString(7)}>
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  </React.Fragment>);
};


export default (props) => {
  const { home } = pathName.pages;
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : `This is Subtitle ${titleNameByPathUrl(props.location.pathname)}`,
  }
  const initialData = {
    editingKey : '',
    data : [],
    dataCreate : {
      visible : false,
      loading: false
    },
    stateTable :{}
  }
  const [form] = Form.useForm();
  const [formModal] = Form.useForm();
  const [dataReducer,reducerFunc] = useCustomReducer(initialData);
  const isEditing = (record) => record.id === dataReducer.editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      nama: '',
      merk: '',
      keterangan: '',
      ...record,
    });
    reducerFunc('editingKey',record.id,'conventional')
  };

  const cancel = () => {
    reducerFunc('editingKey','','conventional')
  };

  const save = async (record) => {
    try {
      const row = await form.validateFields();
      const resp = await Network.put(pathName.pages.barang+'s/'+record.id,'',row);
      if(resp){
        await fetchData();
        reducerFunc('editingKey','','conventional')
        Notif({type : 'success' , response : { code : 'Success', message : resp.data } })
      }
    } catch (error) {
      Notif({type : 'error' , response : { code : 'Error', message : "Error updated !" } })
      console.log(error);
    }
    // try {
    //   const row = await form.validateFields();
      
    //   const newData = [...dataReducer.data];
    //   const index = newData.findIndex((item) => key === item.key);

    //   if (index > -1) {
    //     const item = newData[index];
    //     newData.splice(index, 1, { ...item, ...row });
    //     reducerFunc('data',newData,'conventional')
    //     reducerFunc('editingKey','','conventional')
    //   } else {
    //     newData.push(row);
    //     reducerFunc('data',newData,'conventional')
    //     reducerFunc('editingKey','','conventional')
    //   }
    // } catch (errInfo) {
    //   console.log('Validate Failed:', errInfo);
    // }
  };

  const columns = [
    {
      title: 'Nama',
      key : randomString(7), 
      dataIndex: 'nama',
      width: '25%',
      editable: true,
    },
    {
      title: 'Merk',
      key : randomString(7), 
      dataIndex: 'merk',
      width: '15%',
      editable: true,
    },
    {
      title: 'Keterangan',
      key : randomString(7), 
      dataIndex: 'keterangan',
      width: '40%',
      editable: true,
    },
    {
      title: 'Action',
      key : randomString(7), 
      dataIndex: 'action',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              type="text"
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="text">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (<Space>
            <Button disabled={dataReducer.editingKey !== ''} onClick={() => edit(record)} icon={<EditOutlined />}>Edit</Button>
            <Popconfirm title="Sure to DELETE?" onConfirm={() => deleteData(record)}>
              <Button danger disabled={dataReducer.editingKey !== ''} icon={<DeleteOutlined />}>Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const deleteData = async (record) => {
    // delete
    try {
      const resp = await Network.delete(pathName.pages.barang+'s/'+record.id);
      if(resp){
        await fetchData();
        Notif({type : 'success' , response : { code : 'Success', message : resp.data } })
      }
    } catch (error) {
      Notif({type : 'error' , response : { code : 'Error', message : "Error updated !" } })
      console.log(error);
    }
  }
  const createData = async (values) => {
    try {
      reducerFunc('dataCreate',{loading:true});
      await formModal.validateFields();
      const resp = await Network.post(pathName.pages.barang+'s','',values);
      if(resp){
        await fetchData();
        formModal.setFieldsValue({nama : '',merk : '',keterangan : ''})
        reducerFunc('dataCreate',{loading:false});
        Notif({type : 'success' , response : { code : 'Success', message : resp.data } })
      }
    } catch (error) {
      reducerFunc('dataCreate',{loading:false});
      Notif({type : 'error' , response : { code : 'Error', message : "Error created !" } })
      console.log(error);
    }
  }

  const inputs = [
    { propsFormItem : { 
      name : 'nama', rules: [{required : true, message : 'Nama harus diisi'}] }, propsInput : { placeholder : 'Nama Barang', autoFocus: true} },
    { propsFormItem : { 
      name : 'merk', rules: [{required : true, message : 'Merk harus diisi'}] }, propsInput : { placeholder : 'Merk Barang'} },
    { type : 'textarea', propsFormItem : { 
      name : 'keterangan', rules: [{required : true, message : 'Keterangan harus diisi'}] }, propsInput : { placeholder : 'Keterangan Barang'} },
    { type : 'button', text : 'CREATE', propsBtn : { disabled : dataReducer.dataCreate.loading, loading: dataReducer.dataCreate.loading, type: 'primary', htmlType : 'submit', block:true } },
  ];

  const fetchData = async () => {
    try {
      reducerFunc('stateTable',{loading : true })
      let resp = await Network.get(pathName.pages.barang+'s');
      if(resp){
        reducerFunc('data',resp,'conventional')
        reducerFunc('stateTable',{loading : false })
      }
    } catch (error) {
      console.log(error);
      reducerFunc('stateTable',{loading : false })
    }
  }

  React.useEffect(() => {
    fetchData();
    return () => cancelToken;
  },[]);

  return(
    <BaseLayout {...contentProps}>
      <Row justify="end">
        <Button 
          type="primary" 
          onClick={() => reducerFunc('dataCreate',{visible:true})} 
          icon={<PlusOutlined />} shape="round"
        >Create</Button>
      </Row>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          {...dataReducer.stateTable}
          dataSource={dataReducer.data}
          columns={mergedColumns}
          rowClassName="editable-row"
          onChange={(pagination,filters,sorter) => reducerFunc('stateTable',{pagination,filters,sorter})}
        />
      </Form>
      <Modal 
        onCancel={() => reducerFunc('dataCreate',{visible:false})}
        visible={dataReducer.dataCreate.visible}
        footer={null}
      >
        <Card>
          <Form form={formModal} onFinish={createData}>
            <InputForm inputs={inputs} />
          </Form>
        </Card>
      </Modal>
    </BaseLayout>
  )
}