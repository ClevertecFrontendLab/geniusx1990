import './style.css';
import CardFooter from '@components/CardFooter/CardFooter';
import { Button } from 'antd';
export default function Footer() {
    return (
        <footer>
            <Button className='reviews-button'>Смотреть отзывы</Button>
            <CardFooter />
        </footer>
    );
}
