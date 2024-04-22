import React from 'react';
import './style.css';

const CountdownTimer = () => {
    return (
        <div className="countdown-timer">
            <span className="countdown__timer-subtitle">Пропозиція діє:</span>
            <div className="timer">
                <div className="timer-items">
                    <div className="count-hours">
                        <span></span>
                        <span></span>
                        <div className="timer-text">годин</div>
                    </div>
                </div>
                <div className="timer-items">
                    <div className="count-minutes">
                        <span></span>
                        <span></span>
                        <div className="timer-text">хвилин</div>
                    </div>
                </div>
                <div className="timer-items">
                    <div className="count-seconds">
                        <span></span>
                        <span></span>
                        <div className="timer-text">секунд</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
