import { Button } from 'antd';
import image from '/Exit.svg';
import './style.css';

export default function ButtonExit({ collapsed }: { collapsed: boolean }) {
    return (
        <div>
            <Button className='exit-button'>
                {collapsed ? (
                    <img src={image} alt='log-out' className='sign-out' />
                ) : (
                    <>
                        <img src={image} alt='log-out' className='sign-out' />
                        Выход
                    </>
                )}
            </Button>
        </div>
    );
}
