import { Form, Input } from 'antd';
import React from 'react';
import './style.css';

interface PasswordInputProps {
    name: string;
    rules?: any[];
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, rules = [] }) => {
    return (
        <Form.Item name={name} rules={[{ required: true }, ...rules]}>
            <Input.Password type='password' className='password-input' />
        </Form.Item>
    );
};

export default PasswordInput;
