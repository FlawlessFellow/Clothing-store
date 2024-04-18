import React, { FC } from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import BenefitsListItems from './benefitsListItems';

const Benefits = () => {
    return (
        <section className="benefits_section">
            <MainDescription
                descWrapperClassName="description__wrapper"
                text="Чим особливий"
                spanClassName="description__subtitle"
                pText="Костюм?"
            />
            <div className="benefits__list-wrapper">
                <ul className="benefits_list">
                    {BenefitsListItems.map((el) => (
                        <li className="benefits__list-item" key={el.id}>
                            <div className="benefits__img-wrapper">
                                <img src={el.img} alt="#!" style={{ width: 24, height: 24 }} />
                            </div>
                            <span className="benefits__text-item">{el.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Benefits;
