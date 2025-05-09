import React, { useEffect, useState } from 'react';
import classes from '../modules/ShoppingCart.module.scss';
import Header from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import close from "../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';

export const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [estimatedTax, setEstimatedTax] = useState(0);
    const estimatedShipping = 29;
    const taxRate = 0.02;

    useEffect(() => {
        const newSubtotal = cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        const tax = Math.floor(newSubtotal * taxRate);
        const totalAmount = Math.floor(newSubtotal + tax + estimatedShipping);

        setSubtotal(Math.floor(newSubtotal));
        setEstimatedTax(tax);
        setTotal(totalAmount);
    }, [cartItems]);

    return (
        <>
            <Header />
            <div className={classes["shopping-cart"]}>
                <div className={classes["shopping-cart-container"]}>
                    <div className={classes["cart-items"]}>
                        {cartItems.length === 0 ? (
                            <h3 className={classes["empty-cart"]}>Your cart is empty</h3>
                        ) : (
                            <h2>Shopping Cart</h2>
                        )}
                        {cartItems.map((item) => (
                            <div className={classes["cart-item"]} key={item.id}>
                                <figure>
                                    <img src={`http://localhost:5000${item?.image}`} alt={"image"} />
                                </figure>
                                <div className={classes["item-details"]}>
                                    <div className={classes["item-header"]}>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className={classes["functionality"]}>
                                        <div className={classes["quantity-controls"]}>
                                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                        </div>
                                        <h3 className={classes["price"]}>${item.price}</h3>
                                        <button className={classes["remove"]} onClick={() => dispatch(removeFromCart(item.id))}>
                                            <img src={close} alt={"close"} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={classes["order-summary"]}>
                        <h2>Order Summary</h2>

                        <div className={classes["discount-code-input"]}>
                            <p>Discount code / Promo code</p>
                            <input type="text" placeholder="Code" />
                        </div>

                        <div className={classes["card-input"]}>
                            <p>Your bonus card number</p>
                            <input type="text" placeholder="Enter Card Number" />
                            <button>Apply</button>
                        </div>

                        <div className={classes["summary-box"]}>
                            <div className={classes["total"]}>
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className={classes["Estimated-Tax"]}>
                                <span>Estimated Tax</span>
                                <span className={classes["price"]}>${estimatedTax}</span>
                            </div>
                            <div className={classes["shipping-row"]}>
                                <span>Estimated shipping & Handling</span>
                                {cartItems.length === 0 ? (
                                    <span className={classes["price"]}>$0</span>
                                ) : (
                                    <span className={classes["price"]}>${estimatedShipping}</span>
                                )}
                            </div>
                            <div className={classes["total"]}>
                                <span>Total</span>
                                {cartItems.length === 0 ? (
                                    <span>$0</span>
                                ) : (
                                    <span> ${total}</span>
                                )}
                            </div>
                        </div>

                        <button className={classes["checkout"]}>Checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

