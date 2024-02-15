import { ReactNode } from 'react';
import './style.css';
interface CardProps {
    title: string;
    cardIcon: ReactNode;
}

export default function Card({ title, cardIcon }: CardProps) {
    return (
        <div className='card'>
            <p className='card-title'>{title}</p>
            {cardIcon}
        </div>
    );
}
