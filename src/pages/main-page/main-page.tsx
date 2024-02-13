import React from 'react';
import './main-page.css';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainSection from '@components/MainSection/MainSection';

export const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            < MainSection />
            <Footer />
        </>
    );
};
