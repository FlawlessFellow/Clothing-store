import React, { useState } from 'react';
import OfferButton from '../OfferButton/OfferButton';
import './style.css';

const OfferForm = () => {
    return (
        <div>
            <form action="" id="offer_form" className="offer-form">
                <div className="offer-block">
                    <div className="offer_block-subtitle">Оберіть колір</div>
                    <div className="offer_block-variants">
                        <OfferButton text="Сірий" />
                        <OfferButton text="Бежевий" />
                        <OfferButton text="Чорний" />
                        <OfferButton text="Молочний" />
                        <OfferButton text="Пудровий" />
                    </div>
                    <div className="offer_block-subtitle">Оберіть розмiр</div>
                    <div className="offer_block-variants">
                        <OfferButton text="42-44" />
                        <OfferButton text="46-48" />
                        <OfferButton text="50-52" />
                    </div>
                    <div className="offer_block-subtitle">Оберіть тип тканини</div>
                    <div className="offer_block-variants">
                        <OfferButton text="Звичайна" />
                        <OfferButton text="Преміум" />
                    </div>
                </div>
                <div className="offer-table-wrapper">
                    <table className="offer-table">
                        <thead>
                            <tr>
                                <th className="offer-table-th">Розмір кофти</th>
                                <th className="offer-table-th">Обхват грудей </th>
                                <th className="offer-table-th">Довжина </th>
                                <th className="offer-table-th">Довжина рукава від шва</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="offer-table-td">S - M/ 42-44</td>
                                <td className="offer-table-td">90-98 см</td>
                                <td className="offer-table-td">57 см</td>
                                <td className="offer-table-td">55 см</td>
                            </tr>
                            <tr>
                                <td className="offer-table-td">L - XL/ 46-48</td>
                                <td className="offer-table-td">96-104 см</td>
                                <td className="offer-table-td">58 см</td>
                                <td className="offer-table-td">56 см</td>
                            </tr>
                            <tr>
                                <td className="offer-table-td">XXL - 3XL/ 50-52</td>
                                <td className="offer-table-td">106-115 см</td>
                                <td className="offer-table-td">60 см</td>
                                <td className="offer-table-td">56 см</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ margin: '20px auto' }}></p>
                    <table className="offer-table">
                        <thead>
                            <tr>
                                <th className="offer-table-th">Розмір штанів</th>
                                <th className="offer-table-th">Обхват талії</th>
                                <th className="offer-table-th">Обхват стегон</th>
                                <th className="offer-table-th">Довжина</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="offer-table-td">S - M/ 42-44</td>
                                <td className="offer-table-td">60-75 см</td>
                                <td className="offer-table-td">90-98 см</td>
                                <td className="offer-table-td">101 см</td>
                            </tr>
                            <tr>
                                <td className="offer-table-td">L - XL/ 46-48</td>
                                <td className="offer-table-td">68-83 см</td>
                                <td className="offer-table-td">98-106 см</td>
                                <td className="offer-table-td">101 см</td>
                            </tr>
                            <tr>
                                <td className="offer-table-td">XXL - 3XL/ 50-52</td>
                                <td className="offer-table-td">78-93 см</td>
                                <td className="offer-table-td">106-120 см</td>
                                <td className="offer-table-td">101 см</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="offer-description">
                        <p style={{ margin: '20px auto' }}>
                            <b>Типи тканини:</b>
                        </p>
                        <ul style={{ padding: '0 55px 25px' }} className="offer-description-list">
                            <li style={{ margin: '0 0 15px', listStyleType: 'disc' }}>Класична Ангора (Україна, 100% Ангора)</li>
                            <li style={{ listStyleType: 'disc' }}>Преміум американська Ангора</li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OfferForm;
