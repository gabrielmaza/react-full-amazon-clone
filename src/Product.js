import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"

function Product({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch de date into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return ( 
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* El método fill() llena todos los elementos en un arreglo por un valor estático que yo elija */}
                    {/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>⭐</p>
                        ))}
                </div>
            </div>            
            <img
                className="product__image" 
                src={image} 
                alt={title}
            />
            <div className="product_buttonContainer">
                <button className="product__button" onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    )
}

export default Product;