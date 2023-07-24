import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { CartShoe } from './CartShoe';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    const subtotalCost = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    const shippingCost = subtotalCost === "0.00" ? 0 : 10 ;

  return (
    <>
    <h2 className = "checkout-title">Your Cart</h2>
    <div className="cart">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartShoe key={item.id} data={item}/>
            ))}
          </ul>
        )}
      </div>
      <div className="cost-summary">
        <h3>Subtotal:</h3>
        <p>${subtotalCost}</p>
        <h3>Taxes:</h3>
        <p>${subtotalCost*0.13}</p>
        <h3>Estimated Delivery and Handling:</h3>
        <p>${ shippingCost }</p>
        <br/>
        <hr/>
        <h3>Total Cost:</h3>
        <p>${(subtotalCost*1.13 + shippingCost).toFixed(2)}</p>
        <br/>
        <Link className="checkoutButton" to="/checkout"> checkout </Link>
      </div>
    </div>
    </>
  );
};

export default Cart;