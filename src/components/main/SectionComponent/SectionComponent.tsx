import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import SimpleImageSlider from 'react-simple-image-slider';
import Button from '../Button/Button';

interface SectionTwoProps {
    images: { url: string }[];
    pText: string;
    descWrapperClassName?: string;
    spanClassName?: string;
}

const SectionTwo: React.FC<SectionTwoProps> = ({ images, pText, descWrapperClassName, spanClassName }) => {
    return (
        <div>
            <section className="section-two">
                <MainDescription pText={pText} descWrapperClassName={descWrapperClassName} spanClassName={spanClassName} />
                <SimpleImageSlider width={480} height={480} images={images} showBullets={true} showNavs={true} />
                <Button />
            </section>
        </div>
    );
};

export default SectionTwo;
