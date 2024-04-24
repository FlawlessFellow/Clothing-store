import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import sectionOneImg from '../../../assets/images/section-one.jpg';

const SectionOne = () => {
    return (
        <div>
            <section className="section-one">
                <MainDescription
                    descWrapperClassName="description__wrapper"
                    text="Чарівний костюм"
                    spanClassName="description__subtitle"
                    pText="для справжніх леді!"
                />
                <div className="img__wrapper">
                    <img src={sectionOneImg} alt="" className="section__one-img" />
                </div>
            </section>
        </div>
    );
};

export default SectionOne;
