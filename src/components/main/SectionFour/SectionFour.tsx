import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
    { url: 'https://imgur.com/vhlVFT5.jpg' },
    { url: 'https://imgur.com/8GSt9Eu.jpg' },
    { url: 'https://imgur.com/3DdAURp.jpg' },
];

const SectionFour = () => {
    return (
        <div>
            <section className="section-four">
                <MainDescription
                    pText="Чорний"
                    descWrapperClassName="description__wrapper"
                    spanClassName="description__subtitle"
                />
                <SimpleImageSlider width={480} height={480} images={images} showBullets={true} showNavs={true} />
            </section>
        </div>
    );
};

export default SectionFour;
