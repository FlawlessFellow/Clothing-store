import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';

const images = [
    { url: 'https://imgur.com/YA7egHA.jpg' },
    { url: 'https://imgur.com/2yjoUuC.jpg' },
    { url: 'https://imgur.com/IEW96jR.jpg' },
];

const SectionEight = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-eight"
                images={images}
                pText="Смарагдовий"
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
            />
        </div>
    );
};

export default SectionEight;
