import React, { useState } from 'react';
import './main-page.css';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainSection from '@components/MainSection/MainSection';
import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content } from 'antd/lib/layout/layout';
import CustomMenu from '@components/CustomMenu/CustomMenu';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ButtonExit from '@components/ButtonExit/ButtonExit';
import Logo from '@components/Logo/Logo';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };
    const dataTestId = window.innerWidth <= 361 ? 'sider-switch-mobile' : 'sider-switch';

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <div
                data-test-id={dataTestId}
                className={`trigger ${collapsed ? 'collapsed' : ''}`}
                onClick={() => onCollapse(!collapsed)}
            >
                {collapsed ? (
                    <MenuFoldOutlined style={{ color: '#8C8C8C' }} />
                ) : (
                    <MenuUnfoldOutlined style={{ color: '#8C8C8C' }} />
                )}
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
            <Layout
                className='site-layout'
                style={{
                    marginLeft: collapsed ? 0 : window.innerWidth <= 361 ? 0 : collapsed ? 64 : 208,
                }}
            >
                <Header />
                <Content>
                    <MainSection />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
