import { SettingOutlined } from '@ant-design/icons';
import './style.css';
import { Button } from 'antd';
export default function SettingsButton() {
    return (
        <Button className='settings-button'>
            <SettingOutlined className='seettings-icon'/>Настройки
        </Button>
    );
}
