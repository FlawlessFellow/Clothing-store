import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import pink from '../../../assets/images/slider-images/pink.jpg';
import pink1 from '../../../assets/images/slider-images/pink1.jpg';
import pink2 from '../../../assets/images/slider-images/pink2.jpg';

const SectionTwo = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-two"
                pText="Рожевий"
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
                children={
                    <div className="carousel-wrapper">
                        <Carousel>
                            <CarouselItem>
                                <img src={pink} alt="#!" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={pink1} alt="#!" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={pink2} alt="#!" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                }
            />
        </div>
    );
};

export default SectionTwo;
