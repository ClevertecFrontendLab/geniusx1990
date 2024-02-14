import './style.css';
import React from 'react';
import { Menu } from 'antd';
import { CalendarFilled, HeartFilled, TrophyFilled, IdcardFilled } from '@ant-design/icons';

interface MenuItem {
    key: string;
    icon: JSX.Element;
    label: string;
}

interface CustomMenuProps {
    collapsed: boolean;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ collapsed }) => {
    const menuItems: MenuItem[] = [
        {
            key: '1',
            icon: <CalendarFilled style={{ color: '#061178', marginRight: '10px' }} />,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <HeartFilled style={{ color: '#061178', marginRight: '10px' }} />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <TrophyFilled style={{ color: '#061178', marginRight: '10px' }} />,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: <IdcardFilled style={{ color: '#061178', marginRight: '10px' }} />,
            label: 'Профиль',
        },
    ];

    return (
        <Menu
            className='test'
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            inlineCollapsed={collapsed}
            style={{ textAlign: 'left' }}
            items={menuItems.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: <span>{!collapsed && item.label}</span>,
            }))}
        />
    );
};

export default CustomMenu;
