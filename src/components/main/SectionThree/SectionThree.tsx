import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import SimpleImageSlider from 'react-simple-image-slider';
import Button from '../Button/Button';

const images = [
    { url: 'https://imgur.com/bhDtfGE.jpg' },
    { url: 'https://imgur.com/E8CZiFD.jpg' },
    { url: 'https://imgur.com/W5SiSAi.jpg' },
];

const SectionThree = () => {
    return (
        <div>
            <section className="section-three">
                <MainDescription
                    pText="Ліловий"
                    descWrapperClassName="description__wrapper"
                    spanClassName="description__subtitle"
                />
                <SimpleImageSlider width={480} height={480} images={images} showBullets={true} showNavs={true} />
                <Button />
            </section>
        </div>
    );
};

export default SectionThree;
