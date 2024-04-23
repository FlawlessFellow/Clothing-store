import React from 'react';
import './style.css';

interface ButtonProps {
    text?: string;
    className?: string;
    id?: number;
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
    return (
        <div>
            <div className="button-wrapper">
                <a href="#!">
                    <button className="button">
                        <span className="button-text">Оформити замовлення</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Button;
