import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import pudra from '../../../assets/images/slider-images/pudra.jpg';
import pudra1 from '../../../assets/images/slider-images/pudra1.jpg';
import pudra2 from '../../../assets/images/slider-images/pudra2.jpg';

const SectionEight = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-eight"
                pText="Смарагдовий"
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
                children={
                    <div className="carousel-wrapper">
                        <Carousel>
                            <CarouselItem>
                                <img src={pudra} alt="#!" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={pudra1} alt="#!" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={pudra2} alt="#!" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                }
            />
        </div>
    );
};

export default SectionEight;
