import React, { FC } from 'react';
import '../assets/styles/reset.css';
import '../assets/styles/main.css';
import '../assets/fonts/Montserrat.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SuitFeatures from './main/BenefitsSection/BenefitsSection';

const MainSection: FC = () => {
    return (
        <>
            <Header />
            <SuitFeatures />
            {/* <Footer /> */}
        </>
    );
};

export default MainSection;
