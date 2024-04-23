import React, { useEffect, useState } from 'react';
import './style.css';

const CountdownTimer = () => {
    const [now, setNow] = useState(new Date());
    const [finish, setFinish] = useState(new Date());
    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNow(new Date());
            const diffMs = finish.getTime() - now.getTime();
            if (diffMs < 0) {
                setFinish(new Date(finish.getTime() + 86400000)); // add one day
            }
            const diffSec = Math.floor(diffMs / 1000);
            const hrs = Math.floor(diffSec / 3600);
            const min = Math.floor((diffSec % 3600) / 60);
            const sec = diffSec % 60;
            setHrs(hrs);
            setMin(min);
            setSec(sec);
        }, 200);

        return () => clearTimeout(timer);
    }, [now, finish]);

    useEffect(() => {
        setFinish(new Date());
        setFinish(new Date(finish.setHours(23, 59, 59)));
    }, []);

    function pad(s: number) {
        const str = ('00' + s).substr(-2);
        return (
            <span className="time_text">
                {str[0]}
                {str[1]}
            </span>
        );
    }

    return (
        <div className="countdown-timer">
            <span className="countdown__timer-subtitle">Пропозиція діє:</span>
            <div className="timer">
                <div className="timer-items">
                    <div className="count-item">{pad(hrs)}</div>
                    <div className="timer-text">годин</div>
                </div>
                <div className="timer-items">
                    <div className="count-item">{pad(min)}</div>
                    <div className="timer-text">хвилин</div>
                </div>
                <div className="timer-items">
                    <div className="count-item">{pad(sec)}</div>
                    <div className="timer-text">секунд</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
