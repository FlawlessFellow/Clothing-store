import React, { useState } from 'react';
import './style.css';
import Description from '../Description/Description';
import HeaderImg from '../../../assets/images/header-img.png';
import OfferForm from '../OfferForm/OfferForm';

const OfferSection = () => {
    return (
        <div>
            <section className="offer-section">
                <div className="offer__wrapper">
                    <h1 className="offer-content">Трендовий костюм- двійка із Ангори</h1>
                    <Description />
                    <div className="header__image-wrapper">
                        <div className="discount">
                            <b className="discount_text">40% знижка</b>
                        </div>
                        <img src={HeaderImg} alt="model images" />
                        <div className="offer-price-comparison">
                            <div className="old__price-block">
                                <div className="price__item-text">Стара ціна:</div>
                                <div className="price__item-value">1 999 грн</div>
                            </div>
                            <div className="new__price-block">
                                <div className="price__item-text">Акційна ціна:</div>
                                <div className="price__item-value">799 грн</div>
                            </div>
                        </div>
                    </div>

                    <OfferForm />
                </div>
            </section>
        </div>
    );
};

export default OfferSection;
