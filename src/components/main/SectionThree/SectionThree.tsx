import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';

const images = [
    { url: 'https://imgur.com/bhDtfGE.jpg' },
    { url: 'https://imgur.com/E8CZiFD.jpg' },
    { url: 'https://imgur.com/W5SiSAi.jpg' },
];

const SectionThree = () => {
    return (
        <div>
            <SectionComponent
                images={images}
                pText={'Ліловий'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
            />
        </div>
    );
};

export default SectionThree;
