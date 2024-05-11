import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import SimpleImageSlider from 'react-simple-image-slider';
import Button from '../Button/Button';

interface SectionTwoProps {
    images: { url: string }[];
    pText: string;
    sectionClassName?: string;
    descWrapperClassName?: string;
    spanClassName?: string;
}

const SectionTwo: React.FC<SectionTwoProps> = ({ images, pText, sectionClassName, descWrapperClassName, spanClassName }) => {
    return (
        <div>
            <section className={sectionClassName}>
                <MainDescription pText={pText} descWrapperClassName={descWrapperClassName} spanClassName={spanClassName} />
                <div className="slider-wrapper">
                    <SimpleImageSlider width={480} height={480} images={images} showBullets={true} showNavs={true} />
                </div>
                <Button />
            </section>
        </div>
    );
};

export default SectionTwo;
