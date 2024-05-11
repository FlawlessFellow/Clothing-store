import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';

const images = [
    { url: 'https://imgur.com/AkyCMXr.jpg' },
    { url: 'https://imgur.com/CuVer6B.jpg' },
    { url: 'https://imgur.com/O3RRESZ.jpg' },
];

const SectionTwo = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName='section-two'
                images={images}
                pText="Рожевий"
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
            />
        </div>
    );
};

export default SectionTwo;
