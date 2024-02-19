import { Form, Input } from 'antd';
import React from 'react';
import './style.css';

interface EmailInputProps {
    name: string;
    rules?: any[];
}

const EmailInput: React.FC<EmailInputProps> = ({ name, rules = [] }) => {
    return (
        <Form.Item name={name} rules={[{ required: true }, ...rules]}>
            <Input type='email' prefix={<span className='email-icon'>e-mail:</span>} />
        </Form.Item>
    );
};

export default EmailInput;

/*                 placeholder={name}
 */
