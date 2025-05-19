import classes from '../modules/Summary.module.scss'
import {  useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

export const Summary = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const shippingDetails = useSelector((state) => state.shipping.shippingDetails);
    const taxRate = 0.18;
    const [address, setAddress] = useState(null);
    const [subtotal, setSubtotal] = useState(0);
    const [estimatedTax, setEstimatedTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
        const selectedId = Number(localStorage.getItem("selectedAddress"));
        const foundAddress = savedAddresses.find((a) => a.id === selectedId);
        if (foundAddress) {
            setAddress(foundAddress);
        }
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = +(newSubtotal * taxRate).toFixed(2);
        const shippingCost = +(shippingDetails.price || 0);
        const totalAmount = +(newSubtotal + tax + shippingCost).toFixed(2);
        setSubtotal(+newSubtotal.toFixed(2));
        setEstimatedTax(tax);
        setGrandTotal(totalAmount);
    }, [cartItems, shippingDetails]);

    return (
        <div className={classes['summary']}>
            <div className={classes['products']}>
                <h1>Summary</h1>
                <div className={classes["cart-items"]}>
                    {cartItems.length === 0 ? (
                        <h3 className={classes["empty-cart"]}>no order placed </h3>
                    ) : (
                  ''
                    )}
                    {cartItems.map((item) => (
                        <div className={classes["cart-item"]} key={item.id}>
                            <figure>
                                <img src={`http://localhost:5000${item?.image}`} alt="product"/>
                            </figure>

                            <div className={classes['item-details']}>
                                <h3>{item.name}</h3>
                                <span >${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={classes['info']}>
                    {address ? (
                        <div className={classes['address']}>
                            <span>Address</span>
                            <p> {address.details}</p>
                        </div>
                    ) : (
                        <p>No address selected</p>
                    )}
                    <div className={classes['address']}>
                        <span>Shipment method</span>
                        <p> {shippingDetails.shippingType}</p>
                    </div>
                </div>
                <div className={classes["summary-box"]}>
                    <div className={classes["total"]}>
                        <span>Subtotal</span>
                        <p> ${subtotal.toFixed(2)}</p>
                    </div>
                    <div className={classes["tax"]}>
                        <span>Estimated Tax</span>
                        <p> ${estimatedTax}</p>
                    </div>
                    <div className={classes["tax"]}>
                        <span>Estimated Shipping & Handling</span>
                        <p>${shippingDetails.price?.toFixed(2) || "0.00"}</p>
                    </div>

                    <div className={classes["total"]}>
                        <span>Total</span>
                        <p> <strong> ${grandTotal.toFixed(2)} </strong> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
