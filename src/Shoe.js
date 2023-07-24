import React, { useContext } from "react";
import { ShopContext } from './ShopContext'

export const Shoe = (props) => {
    
    const {id, title, description, image, color, type, gender, price} = props.data;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        addToCart(props.data);
        console.log(`${title} (ID: ${id}) added to cart`);
    }

    return ( 
        <div className="shoe-preview">
            <h2>{title}</h2>
            <img src={image} className="shoe-image"></img>
            <p className="shoe-price">Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Color: {color}</p>
            <p>Style: {type}</p>
            <p>Department: {gender}</p>
            <br/>
            <button className = "addToCartButton" onClick={handleAddToCart}>Add Shoe to Cart</button>
        </div>
     );
}