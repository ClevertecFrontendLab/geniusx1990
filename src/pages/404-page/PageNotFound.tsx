import { Layout } from "antd";
import './style.css';

export const PageNotFound: React.FC = () => {
    return (
        <Layout className='not-found'>
            <h1 style={{ margin: 0 }}>Page 404</h1>
        </Layout>
    );
};
