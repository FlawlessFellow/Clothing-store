import React, { FC } from 'react';
import '../assets/styles/reset.css';
import '../assets/styles/main.css';
import '../assets/fonts/Montserrat.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Benefits from './main/BenefitsSection/BenefitsSection';
import CountdownTimer from './main/CountdownTimer/CountdownTimer';
import Button from './main/Button/Button';
import ProductsCount from './main/ProductsCount/ProductsCount';
import SectionOne from './main/SectionOne/SectionOne';
import SectionTwo from './main/SectionTwo/SectionTwo';
import SectionThree from './main/SectionThree/SectionThree';
import SectionFour from './main/SectionFour/SectionFour';
import SectionFive from './main/SectionFive/SectionFive';
import SectionSix from './main/SectionSix/SectionSix';
import SectionSeven from './main/SectionSeven/SectionSeven';
import SectionEight from './main/SectionEight/SectionEight';
import SectionReviews from './main/Reviews/Reviews';
import OrderingGuide from './main/OrderingGuide/OrderingGuide';
import OfferSection from './main/OfferSection/OfferSection';

const MainSection: FC = () => {
    return (
        <>
            <Header />
            <Benefits />
            <CountdownTimer />
            <Button />
            <ProductsCount />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionReviews />
            <OrderingGuide />
            <OfferSection />
        </>
    );
};

export default MainSection;
