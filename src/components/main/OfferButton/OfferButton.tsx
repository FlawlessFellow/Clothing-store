import React, { useState, FC } from 'react';
import './style.css';

type Props = {
    text: string;
};

const OfferButton: FC<Props> = ({ text }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleBlur = () => {
        setIsButtonClicked(false);
    };

    return (
        <div>
            <input
                type="button"
                value={text}
                className={isButtonClicked ? 'clicked_btn' : 'offer_btn'}
                onClick={() => setIsButtonClicked(true)}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default OfferButton;
