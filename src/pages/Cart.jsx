import React, { useEffect, useState } from 'react';
import classes from '../modules/ShoppingCart.module.scss';
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const ShoppingCart = () => {
    const [products, setProducts] = useState([]);

    const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const tax = 50;
    const shipping = 29;
    const total = subtotal + tax + shipping;

    return (
        <>
            <Header/>
            <div className={classes["shopping-cart-container"]}>
                <div className={classes["cart-items"]}>
                    <h2>Shopping Cart</h2>
                    {products.map((product) => (
                        <div className={classes["cart-item"]} key={product.id}>
                            <img src={product.image} alt={product.name}/>
                            <div className={classes["item-details"]}>
                                <p className={classes["name"]}>{product.name}</p>
                                <p className={classes["id"]}>#{product.id}</p>
                            </div>
                            <div className={classes["quantity-controls"]}>
                                <button>-</button>
                                <span>{product.quantity}</span>
                                <button>+</button>
                            </div>
                            <p className={classes["price"]}>${product.price}</p>
                            <button className={classes["remove"]}>×</button>
                        </div>
                    ))}
                </div>

                <div className={classes["order-summary"]}>
                    <h2>Order Summary</h2>
                    <input type="text" placeholder="Code"/>
                    <div className={classes["card-input"]}>
                        <input type="text" placeholder="Enter Card Number"/>
                        <button>Apply</button>
                    </div>
                    <div className={classes["summary-row"]}>
                        <span>Subtotal</span><span>${subtotal}</span>
                    </div>
                    <div className={classes["summary-row"]}>
                        <span>Estimated Tax</span><span>${tax}</span>
                    </div>
                    <div className={classes["summary-row"]}>
                        <span>Estimated shipping & Handling</span><span>${shipping}</span>
                    </div>
                    <div className={`${classes["summary-row"]} ${classes["total"]}`}>
                        <span>Total</span><span>${total}</span>
                    </div>
                    <button className={classes["checkout"]}>Checkout</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

