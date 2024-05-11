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
                <a href="tg://resolve?domain=E_L_N_U_R">
                    <button type="submit" className="button">
                        <span className="button-text">Оформити замовлення</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Button;
