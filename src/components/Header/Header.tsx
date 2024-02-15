import './style.css';
import SettingsButton from '@components/SettingsButton/SettingsButton';

export default function Header() {
    return (
        <header>
            <p className='header-title'>Главная</p>
            <div className='header-container'>
                <h1 className='header-content'>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </h1>
                <SettingsButton />
            </div>
        </header>
    );
}
