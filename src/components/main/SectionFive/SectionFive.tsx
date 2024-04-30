import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import sectionFiveGif from '../../../assets/gif/section-five.gif';

const SectionFive = () => {
    return (
        <div>
            <section className="section-five">
                <MainDescription
                    text="Оцініть костюм"
                    descWrapperClassName="description__wrapper"
                    spanClassName="description__subtitle"
                    pText="з цього ракурсу"
                />
                <div className="img__wrapper">
                    <img src={sectionFiveGif} alt="" className="section__one-img" />
                </div>
            </section>
        </div>
    );
};

export default SectionFive;
