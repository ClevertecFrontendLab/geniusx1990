import MainSectionTop from '@components/MainSectionTop/MainSectionTop';
import './style.css';
import MainSectionMiddle from '@components/MainSectionMiddle/MainSectionMiddle';
import CardList from '@components/CardList/CardList';

export default function MainSection() {
    return (
        <section className='main-section'>
            <MainSectionTop />
            <MainSectionMiddle />
            <CardList />
        </section>
    );
}
