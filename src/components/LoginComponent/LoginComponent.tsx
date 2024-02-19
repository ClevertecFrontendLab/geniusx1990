import { Form, Checkbox, Button } from 'antd';
import './style.css';
import EmailInput from '@components/EmailInput/EmailInput';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import { GooglePlusOutlined } from '@ant-design/icons';

interface LoginComponentProps {
    onFinish: (values: any) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onFinish }) => {
    return (
        <Form name='login' onFinish={onFinish}>
            <EmailInput name='email' />
            <PasswordInput
                name='password'
                rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
            />

            <div className='remember-me'>
                <Form.Item name='remember' valuePropName='checked'>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item>
                    <a href='#'>Забыли пароль?</a>
                </Form.Item>
            </div>

            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Войти
                </Button>
            </Form.Item>

            <Form.Item>
                <Button
                    type='default'
                    icon={<GooglePlusOutlined />}
                    onClick={() => {
                        console.log('clic button');
                    }}
                >
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginComponent;
