import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';
import { Carousel, CarouselItem } from 'react-bootstrap';
import lilu from '../../../assets/images/slider-images/lilu.jpg';
import lilu1 from '../../../assets/images/slider-images/lilu1.jpg';
import lilu2 from '../../../assets/images/slider-images/lilu2.jpg';

const SectionThree = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-three"
                pText={'Ліловий'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
                children={
                    <div className="carousel-wrapper">
                        <Carousel>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={lilu} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={lilu1} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={lilu2} alt="#!" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                }
            />
        </div>
    );
};

export default SectionThree;
