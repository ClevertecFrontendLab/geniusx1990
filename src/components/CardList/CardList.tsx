import CardIcon from '@components/CardIcon/CardIcon';
import Card from '@components/Card/Card';
import { HeartFilled, CalendarFilled, IdcardFilled } from '@ant-design/icons';
import './style.css';

export default function CardList() {
    const cardsData = [
        { title: 'Расписать тренировки', icon: <HeartFilled />, name: 'Тренировки' },
        { title: 'Назначить календарь', icon: <CalendarFilled />, name: 'Календарь' },
        { title: 'Заполнить профиль', icon: <IdcardFilled />, name: 'Профиль' },
    ];
    return (
        <div className='card-list'>
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    cardIcon={<CardIcon icon={card.icon} name={card.name} />}
                />
            ))}
        </div>
    );
}
