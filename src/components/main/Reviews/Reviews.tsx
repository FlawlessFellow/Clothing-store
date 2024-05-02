import React from 'react';
import './style.css';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import ava1 from '../../../assets/images/ava1.jpg';
import ava2 from '../../../assets/images/ava2.jpg';
import ava3 from '../../../assets/images/ava3.jpg';
import ava4 from '../../../assets/images/ava4.jpg';

const Reviews = () => {
    return (
        <div>
            <section className="reviews">
                <p className="reviews-subtitle">
                    Відгуки <div className="reviews__subtitle-last-word">клієнтів</div>
                </p>
                <ReviewsCard
                    wrapperClassName="reviews-card-wrapper"
                    text="Костюм ідеально сидить на мені! Приємний до тіла і подобається що в штанах є кармани. А взагалі я ще замовлю костюм тільки іншого кольору."
                    img={ava1}
                    clientName="Sofia"
                    clientInfoText="Рівне, 31 років"
                />
                <ReviewsCard
                    wrapperClassName="reviews-card-wrapper"
                    text="Така приємна та легка, але при цьому міцна тканина. Маю схожий дорогий та брендовий костюм, але він нічим не відрізняється від цього. Рекомендую."
                    img={ava2}
                    clientName="Natalia"
                    clientInfoText="Харкiв, 35 років"
                />
                <ReviewsCard
                    wrapperClassName="reviews-card-wrapper"
                    text="Мені дуже сподобався фасон і колір, у нас в магазинах ніде не бачила такого."
                    img={ava3}
                    clientName="Julia"
                    clientInfoText="Черкаси, 28 років"
                />
                <ReviewsCard
                    wrapperClassName="reviews-lastCard-wrapper"
                    text="Прям не можу налюбуватись собою у цьому костюмі. А ще подобається, що з ним можна носити і кросівки, і туфлі. Тому вдягаю на роботу і на прогулянки."
                    img={ava4}
                    clientName="Ekaterina"
                    clientInfoText="Миколаїв, 37 років"
                />
            </section>
        </div>
    );
};

export default Reviews;
