import React, { useContext } from "react";
import { ShopContext } from './ShopContext'

export const CartShoe = (props) => {
    
    const {id, title, description, image, color, type, gender, price} = props.data;
    const { cartItems, removeFromCart } = useContext(ShopContext);

    const handleDelete = () => {
        removeFromCart(id);
    };
  

    return ( 
        <div className="shoe-preview">
            <h2>{title}</h2>
            <img src={image} className="shoe-image"></img>
            <p className="cart-price">Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Color: {color}</p>
            <p>Type: {type}</p>
            <p>Gender: {gender}</p>
            <br/>
            <button className = "deleteFromCartButton" onClick={handleDelete}>Delete shoe from Cart</button>
        </div>
     );
}

export default CartShoe;

