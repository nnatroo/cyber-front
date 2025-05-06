import React, { useEffect, useState } from 'react';
import classes from '../modules/ShoppingCart.module.scss';
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import close from  "../assets/close.svg"
import {useDispatch, useSelector} from "react-redux";
import { removeFromCart } from '../redux/cartSlice';

export const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <>
            <Header/>
            <div className={classes["shopping-cart"]}>
                <div className={classes["shopping-cart-container"]}>
                    <div className={classes["cart-items"]}>
                        <h2>Shopping Cart</h2>
                        {cartItems.map((item) => (
                            <div className={classes["cart-item"]} key={item.id}>
                                <figure>
                                    <img src={item.img} alt={"image"}/>
                                </figure>
                                <div className={classes["item-details"]}>
                                    <div className={classes["item-header"]}>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className={classes["functionality"]}>
                                        <div className={classes["quantity-controls"]}>
                                            <button>-</button>
                                            <span>{item.quantity}</span>
                                            <button>+</button>
                                        </div>
                                        <h3 className={classes["price"]}>${item.price}</h3>
                                        <p>{item.title} (x{item.quantity}) - ${item.price * item.quantity}</p>
                                        <button className={classes["remove"]}
                                                onClick={() => dispatch(removeFromCart(item.id))}><img src={close}
                                                                                                       alt={"close"}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                    <div className={classes["order-summary"]}>
                        <h2>Order Summary</h2>
                        <input type="text" placeholder="Code"/>
                        <div className={classes["card-input"]}>
                            <input type="text" placeholder="Enter Card Number"/>
                            <button>Apply</button>
                        </div>
                        <div className={classes["summary-row"]}>
                            <span>Subtotal</span><span></span>
                        </div>
                        <div className={classes["summary-row"]}>
                            <span>Estimated Tax</span><span></span>
                        </div>
                        <div className={classes["summary-row"]}>
                            <span>Estimated shipping & Handling</span><span></span>
                        </div>
                        <div className={`${classes["summary-row"]} ${classes["total"]}`}>
                            <span>Total</span><span></span>
                        </div>
                        <button className={classes["checkout"]}>Checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

