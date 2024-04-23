import React from 'react';
import './style.css';

const ProductsCount = () => {
    return (
        <div>
            <div className="products__count-wrapper">
                <span className="products-count">
                    Залишилось <b>4</b> шт за акцією
                </span>
            </div>
        </div>
    );
};

export default ProductsCount;
