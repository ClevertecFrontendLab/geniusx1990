import React from 'react';
import logoImage from '/fit.svg';
import logoName from '/Clever.svg';
import './style.css';
import mobileLogo from '/logo_mobile.svg';
interface LogoProps {
    collapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
    if (window.innerWidth <= 361) {
        return (
            <div className='logo'>
                <img src={mobileLogo} alt='Mobile Logo' />
            </div>
        );
    } else {
        return (
            <div
                className='logo'
                style={{
                    paddingLeft: collapsed ? '18px' : '29px',
                    paddingRight: collapsed ? '17.45px' : '46px',
                }}
            >
                {!collapsed && <img src={logoName} alt='Clever' />}
                <img src={logoImage} alt='Clever Logo' />
            </div>
        );
    }
};

export default Logo;
