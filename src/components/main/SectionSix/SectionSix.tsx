import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';

const images = [
    { url: 'https://imgur.com/qZP6Pio.jpg' },
    { url: 'https://imgur.com/vZmYRqs.jpg' },
    { url: 'https://imgur.com/22qrsof.jpg' },
];

const SectionSix = () => {
    return (
        <div>
            <SectionComponent
                images={images}
                pText={'Жовтий'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
            />
        </div>
    );
};

export default SectionSix;
