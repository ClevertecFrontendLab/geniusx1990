import './main-page.css';
import React, { useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainSection from '@components/MainSection/MainSection';
import Sider from 'antd/lib/layout/Sider';
import CustomMenu from '@components/CustomMenu/CustomMenu';
import ButtonExit from '@components/ButtonExit/ButtonExit';
import LogoComponent from '@components/LogoComponent/LogoComponent';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    return (
        <Layout className='main-page' style={{ minHeight: '100vh' }}>
            <div
                data-test-id='sider-switch'
                className={`trigger ${collapsed ? 'collapsed' : ''}`}
                onClick={() => onCollapse(!collapsed)}
            >
                {collapsed ? (
                    <MenuFoldOutlined style={{ color: '#8C8C8C' }} />
                ) : (
                    <MenuUnfoldOutlined style={{ color: '#8C8C8C' }} />
                )}
            </div>
            <div
                data-test-id='sider-switch-mobile'
                className={`trigger-mobile ${collapsed ? 'collapsed' : ''}`}
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
                <LogoComponent collapsed={collapsed} />
                <CustomMenu collapsed={collapsed} />
                <ButtonExit collapsed={collapsed} />
            </Sider>
            <Layout
                className='site-layout'
                style={{
                    marginLeft: collapsed ? 64 : 208,
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
