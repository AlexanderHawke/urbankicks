import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from 'react-router-dom';
import Popup from "./CheckoutPopup";

const Checkout = () => {
    
    const { cartItems } = useContext(ShopContext);

    // Calculate the total price of all items in the cart
    const subtotalCost = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    const shippingCost = subtotalCost === "0.00" ? 0 : 10 ;

    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [cityAndProvince, setCityAndProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [buttonPopup, setButtonPopup] = useState(false);

    const handlePayNow = () => {
        setButtonPopup(true);
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setStreetAddress('');
        setCityAndProvince('');
        setPostalCode('');
    }

    return ( 
        <>
        <h2 className="checkout-title">Checkout</h2>
        <div className="checkout">
            <div className="checkout-info">
                <div className="form-group">
                <label>E-mail:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>Credit Card Number / Numéro de carte de crédit:</label>
                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>Expiration Date / Date d'expiration:</label>
                <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>CVV:</label>
                <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>Street Address / Adresse de la rue:</label>
                <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>City and Province / Ville et province:</label>
                <input type="text" value={cityAndProvince} onChange={(e) => setCityAndProvince(e.target.value)} required />
                </div>
                <div className="form-group">
                <label>Postal Code / Code Postal:</label>
                <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                </div>
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
                <button className="payNowButton" onClick={() => handlePayNow()} email={email}> Pay Now </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className="checkout-title">Thanks for your order!</h3>
                    <p className="popup-text">Thank you for placing your order with Urban Kicks.</p>
                    <p className="popup-text">A confirmation email will be sent to you shortly at</p>
                    <br/>
                    <p className="popup-text"> {email} </p>
                    <br/>
                    <p className="popup-text">with the order number, receipt number, and additional shipping information.</p>
                    <br/>
                    <p className="popup-text">If you wish to cancel this order please call: </p>
                    <br/>
                    <p className="popup-text">555-555-5555</p>
                    <br/>
                    <p className="popup-text">Provide them with your order and receipt number.</p>
                </Popup>
            </div>
        </div>
        </>
    );
}
 
export default Checkout;