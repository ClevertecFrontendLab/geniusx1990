import { Form, Tabs } from 'antd';
import React, { useState } from 'react';
import './style.css';
import TabPane from 'antd/lib/tabs/TabPane';
import LoginComponent from '@components/LoginComponent/LoginComponent';
import RegistrationComponent from '@components/RegistrationComponent/RegistrationComponent';

/* const AuthForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (key: any) => {
        setActiveTab(key);
    };

    return (
        <Form className='auth-form'>
            <Tabs activeKey={activeTab} onChange={handleTabChange} className='auth-tabs'>
                <TabPane tab='Вход' key='login'>
                    <LoginComponent onFinish={onFinish} />
                </TabPane>
                <TabPane tab='Регистрация' key='register'>
                    <RegistrationComponent onFinish={onFinish} />
                </TabPane>
            </Tabs>
        </Form>
    );
};

export default AuthForm;

 */

const AuthForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (key: any) => {
        setActiveTab(key);
    };

    return (
        <Form className='auth-form'>
            <Tabs
                className='auth-tabs'
                defaultActiveKey='1'
                onChange={handleTabChange}
                items={[
                    {
                        label: `Вход`,
                        key: '1',
                        children: <LoginComponent onFinish={onFinish} />,
                    },
                    {
                        label: `Регистрация`,
                        key: '2',
                        children: <RegistrationComponent onFinish={onFinish} />,
                    },
                ]}
            />
        </Form>
    );
};

export default AuthForm;

{
    /* <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `Tab 1`,
        key: '1',
        children: `Content of Tab Pane 1`,
      },
      {
        label: `Tab 2`,
        key: '2',
        children: `Content of Tab Pane 2`,
      },
      {
        label: `Tab 3`,
        key: '3',
        children: `Content of Tab Pane 3`,
      },
    ]}
  /> */
}

{
    /* <Layout
name='normal_login'
className='login-form'
initialValues={{ remember: true }}
onFinish={onFinish}
>
<LogoComponent collapsed={false} />
<Tabs activeKey={activeTab} onChange={handleTabChange} className='auth-tabs'>
    <TabPane tab='Вход' key='login'>
        <div>LOGIN</div>
    </TabPane>
    <TabPane tab='Регистрация' key='register'>
        <div>РЕГИСТРАЦИЯ</div>
    </TabPane>
</Tabs>
{/* <Form.Item
    name='username'
    rules={[{ required: true, message: 'Please input your Username!' }]}
>
    <Input
        prefix={<UserOutlined className='site-form-item-icon' />}
        placeholder='Username'
    />
</Form.Item>
<Form.Item
    name='password'
    rules={[{ required: true, message: 'Please input your Password!' }]}
>
    <Input
        prefix={<LockOutlined className='site-form-item-icon' />}
        type='password'
        placeholder='Password'
    />
</Form.Item>
<Form.Item>
    <Form.Item name='remember' valuePropName='checked' noStyle>
        <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <a className='login-form-forgot' href=''>
        Forgot password
    </a>
</Form.Item>

<Form.Item>
    <Button type='primary' htmlType='submit' className='login-form-button'>
        Log in
    </Button>
    Or <a href=''>register now!</a>
</Form.Item> */
}
/* </Layout> */
