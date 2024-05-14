import React from 'react';
import './style.css';
import SectionComponent from '../SectionComponent/SectionComponent';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bereza from '../../../assets/images/slider-images/bereza.jpg';
import bereza1 from '../../../assets/images/slider-images/bereza1.jpg';
import bereza2 from '../../../assets/images/slider-images/bereza2.jpg';

const SectionSeven = () => {
    return (
        <div>
            <SectionComponent
                sectionClassName="section-seven"
                pText={'Бірюзовий'}
                descWrapperClassName="description__wrapper"
                spanClassName="description__subtitle"
                children={
                    <div className="carousel-wrapper">
                        <Carousel>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={bereza} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={bereza1} alt="#!" />
                            </CarouselItem>
                            <CarouselItem style={{ height: '480px' }}>
                                <img src={bereza2} alt="#!" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                }
            />
        </div>
    );
};

export default SectionSeven;
