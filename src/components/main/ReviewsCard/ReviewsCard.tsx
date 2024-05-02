import React from 'react';
import './style.css';

interface ReviewsCardProps {
    wrapperClassName: string;
    text: string;
    img: string;
    clientName: string;
    clientInfoText: string;
}

const ReviewsCard: React.FC<ReviewsCardProps> = ({ wrapperClassName, text, img, clientName, clientInfoText }) => {
    return (
        <div>
            <div className={wrapperClassName}>
                <p className="client-review-text">{text}</p>
                <div className="client-info-wrapper">
                    <img src={img} className="client-personal-img" alt="Reviews personal photo" />
                    <div className="client-info">
                        <p className="client-name">{clientName}</p>
                        <p className="client-info">{clientInfoText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
