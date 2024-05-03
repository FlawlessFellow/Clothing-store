import React, { useState, FC } from 'react';
import './style.css';

type Props = {
    checkedBtn?: string;
    text: string;
};

const OfferButton: FC<Props> = ({ checkedBtn, text }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const getInputClass = () => {
        return isButtonClicked ? 'clicked_btn' : 'offer_btn';
    };

    const handleBlur = () => {
        setIsButtonClicked(false);
    };

    return (
        <div>
            <button
                type="button"
                id={checkedBtn}
                className={getInputClass()}
                onClick={() => setIsButtonClicked(true)}
                onBlur={handleBlur}
            >
                {text}
            </button>
        </div>
    );
};

export default OfferButton;
