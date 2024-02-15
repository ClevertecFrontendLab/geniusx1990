import './style.css';

export default function MainSectionTop() {
    return (
        <div className='top-container'>
            <h2 className='main-top-title'>С CleverFit ты сможешь:</h2>
            <ul className='main-list'>
                <li className='main-list-item'>— Планировать свои тренировки на календаре, выбирая тип и уровень нагрузки.</li>
                <li className='main-list-item'>
                    — Отслеживать свои достижения в разделе статистики, сравнивая свои результаты с
                    нормами и рекордами.
                </li>
                <li className='main-list-item'>
                    — Создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
                    тренировках.
                </li>
                <li className='main-list-item'>
                    — Выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и советам профессиональных тренеров.
                </li>
            </ul>
        </div>
    );
}
