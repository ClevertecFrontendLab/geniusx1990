import { Form, Button } from 'antd';
import './style.css';
import EmailInput from '@components/EmailInput/EmailInput';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import { GooglePlusOutlined } from '@ant-design/icons';

interface RegistrationComponentProps {
    onFinish: (values: any) => void;
}

const RegistrationComponent: React.FC<RegistrationComponentProps> = ({ onFinish }) => {
    return (
        <Form name='login' onFinish={onFinish}>
            <EmailInput name='email' />

            <PasswordInput
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                    },
                ]}
            />

            <PasswordInput
                name='password_repeat'
                rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
            />


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
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationComponent;
