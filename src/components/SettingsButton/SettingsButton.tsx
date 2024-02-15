import { SettingOutlined } from '@ant-design/icons';
import './style.css';
import { Button } from 'antd';
export default function SettingsButton() {
    const isMobile = window.innerWidth <= 361;

    return (
        <Button className={`settings-button ${isMobile ? 'mobile' : ''}`}>
            <SettingOutlined className='seettings-icon' />
            {!isMobile && 'Настройки'}
        </Button>
    );
}
