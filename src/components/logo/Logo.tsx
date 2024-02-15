import './style.css';
import React from 'react';
import logoImage from '/fit.svg';
import logoName from '/Clever.svg';
interface LogoProps {
    collapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
    return (
        <div
            className='logo'
            style={{
                paddingLeft: collapsed ? '18px' : '29px',
                paddingRight: collapsed ? '17.45px' : '46px',
            }}
        >
            {!collapsed && <img className='first-img' src={logoName} alt='Clever' />}
            <img className='second-img' src={logoImage} alt='Clever Logo' />
        </div>
    );
};

export default Logo;
