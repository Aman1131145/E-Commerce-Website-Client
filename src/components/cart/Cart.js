import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { BsCartX } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";
import { loadStripe } from "@stripe/stripe-js";


function Cart({ onClose }) {
    const cart = useSelector((state) => state.cartReducer.cart);
    let totalAmount = 0;
    cart.forEach(
        (element) => (totalAmount += element.quantity * element.price)
    );
    const isCartEmpty = cart.length === 0;

    async function handleCheckout() {
        try {
            const response = await axiosClient.post("/orders", {
                products: cart,
            });
            const stripe = await loadStripe(`${ process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY }`);
            await stripe.redirectToCheckout({
                sessionId: response.data.stripeId,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Cart">
            <div className="overlay" onClick={onClose}></div>
            <div className="cart-content">
                <div className="header">
                    <h3>Shopping Cart</h3>
                    <div className="close-btn" onClick={onClose}>
                        <AiOutlineClose /> Close
                    </div>
                </div>
                <div className="cart-items">
                    {cart.map((item) => (
                        <CartItem cart={item} key={item.key} />
                        ))}
                </div>
                {isCartEmpty && (
                    <div className="empty-cart-info">
                        <div className="icon">
                            <BsCartX />
                        </div>
                        <h3>Cart is Empty</h3>
                    </div>
                )}
                {!isCartEmpty && (
                    <div className="checkout-info">
                        <div className="total-amount">
                            <h3 className="total-message">Total:</h3>
                            <h4 className="total-value">₹ {totalAmount}</h4>
                        </div>
                        <div
                            className="checkout btn-primary"
                            onClick={handleCheckout}
                        >
                            Checkout now
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
