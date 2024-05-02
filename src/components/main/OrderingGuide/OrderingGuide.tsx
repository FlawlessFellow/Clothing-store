import React from 'react';
import './style.css';
import stepItemIcon from '../../../assets/images/order-steps-icon.png';
import stepItemIcon2 from '../../../assets/images/order-steps-icon2.png';
import stepItemIcon3 from '../../../assets/images/order-steps-icon3.png';
import stepItemIcon4 from '../../../assets/images/order-steps-icon4.png';

const OrderingGuide = () => {
    return (
        <div>
            <section className="ordering-guide">
                <h2 className="ordering-subtitle-wrapper">
                    <p className="ordering-subtitle">
                        Як замовити <div className="ordering__subtitle-last-word"> товар?</div>
                    </p>
                </h2>
                <div className="step-item-content-wrapper">
                    <div className="step-item-wrapper">
                        <div className="step-item">
                            <img src={stepItemIcon} className="step-item-img" alt="step one img" />
                            <h4 className="step-item-subtitle">Заявка</h4>
                            <p className="step-item-text">Заповніть форму на сайті</p>
                        </div>
                    </div>
                    <div className="step-item-wrapper">
                        <div className="step-item1">
                            <img src={stepItemIcon2} className="step-item-img" alt="step one img" />
                            <h4 className="step-item-subtitle">Заявка</h4>
                            <p className="step-item-text">Заповніть форму на сайті</p>
                        </div>
                    </div>
                    <div className="step-item-wrapper">
                        <div className="step-item2">
                            <img src={stepItemIcon3} className="step-item-img" alt="step one img" />
                            <h4 className="step-item-subtitle">Заявка</h4>
                            <p className="step-item-text">Заповніть форму на сайті</p>
                        </div>
                    </div>
                    <div className="step-item-wrapper">
                        <div className="step-item3">
                            <img src={stepItemIcon4} className="step-item-img" alt="step one img" />
                            <h4 className="step-item-subtitle">Заявка</h4>
                            <p className="step-item-text">Заповніть форму на сайті</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderingGuide;
