import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';

const images = [
    { url: 'https://imgur.com/vhlVFT5.jpg' },
    { url: 'https://imgur.com/8GSt9Eu.jpg' },
    { url: 'https://imgur.com/3DdAURp.jpg' },
];

const SectionFour = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-four"
                images={images}
                pText={'Чорний'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
            />
        </div>
    );
};

export default SectionFour;
