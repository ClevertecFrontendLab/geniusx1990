import { Layout } from 'antd';
import './style.css';
import AuthForm from '@components/AuthForm/AuthForm';
import LogoComponent from '@components/LogoComponent/LogoComponent';

export const AuthPage: React.FC = () => {
    return (
        <Layout className='registration-page'>
            <Layout className='form-container'>
                <LogoComponent collapsed={false} />
                <AuthForm />
            </Layout>
        </Layout>
    );
};
