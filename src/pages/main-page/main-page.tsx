import React, { useState } from 'react';
import './main-page.css';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainSection from '@components/MainSection/MainSection';
import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content } from 'antd/lib/layout/layout';
import CustomMenu from '@components/CustomMenu/CustomMenu';
import Logo from '@components/Logo/Logo';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ButtonExit from '@components/ButtonExit/ButtonExit';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <div
                data-test-id='sider-switch'
                className={`trigger ${collapsed ? 'collapsed' : ''}`}
                onClick={() => onCollapse(!collapsed)}
            >
                {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
                trigger={null}
                theme='light'
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    backgroundColor: '#FFFFFF',
                }}
            >
                <Logo collapsed={collapsed} />
                <CustomMenu collapsed={collapsed} />
                <ButtonExit collapsed={collapsed} />
            </Sider>
            <Layout className='site-layout' style={{ marginLeft: collapsed ? 64 : 208 }}>
                <Header />
                <Content>
                    <MainSection />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
