import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import SimpleImageSlider from 'react-simple-image-slider';
import Button from '../Button/Button';

const images = [
    { url: 'https://imgur.com/YA7egHA.jpg' },
    { url: 'https://imgur.com/2yjoUuC.jpg' },
    { url: 'https://imgur.com/IEW96jR.jpg' },
];

const SectionTwo = () => {
    return (
        <div>
            <section className="section-two">
                <MainDescription
                    pText="Смарагдовий"
                    descWrapperClassName="description__wrapper"
                    spanClassName="description__subtitle"
                />
                <SimpleImageSlider width={480} height={480} images={images} showBullets={true} showNavs={true} />
                <Button />
            </section>
        </div>
    );
};

export default SectionTwo;
