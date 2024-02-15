import { ReactNode } from 'react';
import './style.css'
interface MobileIconItemProps {
    icon: ReactNode;
    name: string;
}

export default function MobileIconItem({ icon, name }: MobileIconItemProps) {
    return (
        <div className='mobile-icon-item'>
            {icon}
            <span>{name}</span>
        </div>
    );
}