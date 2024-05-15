import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';
import { Carousel, CarouselItem } from 'react-bootstrap';
import black from '../../../assets/images/slider-images/black.jpg';
import black1 from '../../../assets/images/slider-images/black1.jpg';
import black2 from '../../../assets/images/slider-images/black2.jpg';

const SectionFour = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-four"
                pText={'Чорний'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
                children={
                    <div className="carousel-wrapper">
                        <Carousel>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={black} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={black1} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={black2} alt="#!" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                }
            />
        </div>
    );
};

export default SectionFour;
