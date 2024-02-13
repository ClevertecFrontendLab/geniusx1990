import { ReactNode } from 'react';
import './style.css';
interface CardIconProps {
    icon: ReactNode;
    name: string;
}

export default function CardIcon({ icon, name }: CardIconProps) {
    return (
        <div className='card-item'>
            {icon}
            <span>{name}</span>
        </div>
    );
}
