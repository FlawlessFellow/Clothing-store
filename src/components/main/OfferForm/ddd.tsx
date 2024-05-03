import React, { useState } from 'react';
import './style.css';

const OfferForm = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <form action="" id="offer_form" className="offer-form">
                <div className="offer-block">
                    <div className="offer_block-subtitle">Оберіть колір</div>
                    <div className="offer_block-variants">
                        <label
                            htmlFor=""
                            className={`offer_block-label ${selectedColor === 'Серый' ? 'checked' : ''}`}
                            style={{
                                borderColor: selectedColor === 'Серый' ? '#000' : '',
                            }}
                        >
                            <input
                                type="radio"
                                className="offer-input"
                                value="Серый"
                                checked={selectedColor === 'Серый'}
                                onChange={handleColorChange}
                            />
                            Серый
                        </label>
                        <label
                            htmlFor=""
                            className={`offer_block-label ${selectedColor === 'Черный' ? 'checked' : ''}`}
                            style={{
                                borderColor: selectedColor === 'Черный' ? '#000' : '',
                            }}
                        >
                            <input
                                type="radio"
                                className="offer-input"
                                value="Черный"
                                checked={selectedColor === 'Черный'}
                                onChange={handleColorChange}
                            />
                            Черный
                        </label>
                        <label
                            htmlFor=""
                            className={`offer_block-label ${selectedColor === 'Красный' ? 'checked' : ''}`}
                            style={{
                                borderColor: selectedColor === 'Красный' ? '#000' : '',
                            }}
                        >
                            <input
                                type="radio"
                                className="offer-input"
                                value="Красный"
                                checked={selectedColor === 'Красный'}
                                onChange={handleColorChange}
                            />
                            Красный
                        </label>
                        <label
                            htmlFor=""
                            className={`offer_block-label ${selectedColor === 'Желтый' ? 'checked' : ''}`}
                            style={{
                                borderColor: selectedColor === 'Желтый' ? '#000' : '',
                            }}
                        >
                            <input
                                type="radio"
                                className="offer-input"
                                value="Желтый"
                                checked={selectedColor === 'Желтый'}
                                onChange={handleColorChange}
                            />
                            Желтый
                        </label>
                        <label
                            htmlFor=""
                            className={`offer_block-label ${selectedColor === 'Голубой' ? 'checked' : ''}`}
                            style={{
                                borderColor: selectedColor === 'Голубой' ? '#000' : '',
                            }}
                        >
                            <input
                                type="radio"
                                className="offer-input"
                                value="Голубой"
                                checked={selectedColor === 'Голубой'}
                                onChange={handleColorChange}
                            />
                            Голубой
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OfferForm;
