import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionComponent from '../SectionComponent/SectionComponent';
import { Carousel, CarouselItem } from 'react-bootstrap';
import yellow from '../../../assets/images/slider-images/yellow.jpg';
import yellow1 from '../../../assets/images/slider-images/yellow1.jpg';
import yellow2 from '../../../assets/images/slider-images/yellow2.jpg';

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
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={yellow} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={yellow1} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={yellow2} alt="#!" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                }
            />
        </div>
    );
};

export default SectionTwo;
