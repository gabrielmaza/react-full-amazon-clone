import React from 'react'
import './Product.css'

function Product() {
    return ( 
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                </div>
                <img
                    className="product__image" 
                    src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
                    alt="..."
                />
                <button className="product__button">Add to basket</button>
            </div>
        </div>
    )
}

export default Product;