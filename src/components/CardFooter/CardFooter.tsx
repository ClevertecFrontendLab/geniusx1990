import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import MobileIconItem from '@components/MobileIconItem/MobileIconItem';
import './style.css';
import { Link } from 'react-router-dom';

export default function CardFooter() {
    return (
        <div className='card-footer'>
            <div className='top-card'>
                <Link className='download' to={'#'} >Скачать на телефон</Link>
                <p className='card-info-download'>Доступно в PRO-тарифе</p>
            </div>
            <div className='bottom-card'>
                <MobileIconItem icon={<AndroidFilled />} name='Android OS' />
                <MobileIconItem icon={<AppleFilled />} name='Apple iOS' />
            </div>
        </div>
    );
}
