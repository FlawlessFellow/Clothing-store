import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';

const images = [
    { url: 'https://imgur.com/cIDNrlP.jpg' },
    { url: 'https://imgur.com/cWhIjm5.jpg' },
    { url: 'https://imgur.com/mfa1m6T.jpg' },
];

const SectionSeven = () => {
    return (
        <div>
            <SectionComponent
                images={images}
                pText={'Червоний'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
            />
        </div>
    );
};

export default SectionSeven;
