import React from 'react';
import './style.css';
import MainDescription from '../MainDescription/MainDescription';
import sectionOneGif from '../../../assets/gif/section-one.gif';

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
                    <img src={sectionOneGif} alt="" className="section__one-img" />
                </div>
                <p className="section__one-text">
                    Стильна кофта під горловину. Штани високої посадки з гумкою на талії. Матеріал приємний на дотик та має
                    відмінні дихаючі властивості. Тому в цьому костюмі Ви будете виглядати неперевершено і почувати себе у повному
                    комфорті за будь-якої погоди.
                </p>
            </section>
        </div>
    );
};

export default SectionOne;
