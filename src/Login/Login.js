import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./Login.css"
const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [username,setusername]= useState();
  const [Password,setPassword]= useState();

  return (
    <div>
     <div class="visme_d" data-title="Untitled Project" data-url="g7qkd936-untitled-project?sidebar=true" data-domain="forms" data-full-page="false" data-min-height="600px" data-form-id="20469"></div>
    <div className='Login'>
    
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     
      onFinish={onFinish}
    >
      <h1 className='tittle'>Admin</h1>
      <Form.Item
        name="username"
        rules={[
          {
            
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
     
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default App;