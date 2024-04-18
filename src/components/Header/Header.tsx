import React from 'react';
import './style.css';
import HeaderLogo from '../../assets/images/header-logo.png';
import Description from '../main/Description/Description';
import HeaderImg from '../../assets/images/header-img.png';

const Header = () => {
    return (
        <header id="header" className="header">
            <div className="header__wrapper">
                <h1 className="header__content">
                    <img src={HeaderLogo} alt="decoration img" className="header__img" />
                    <span className="header__content-text">Трендовий костюм- двійка із Ангори</span>
                </h1>
                <Description />
                <div className="header__image-wrapper">
                    <div className="discount">
                        <b className="discount_text">40% знижка</b>
                    </div>
                    <img src={HeaderImg} alt="model images" />
                    <div className="price-comparison">
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
            </div>
        </header>
    );
};

export default Header;
