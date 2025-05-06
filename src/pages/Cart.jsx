import React, { useEffect, useState } from 'react';
import './ShoppingCart.scss';

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);



    const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const tax = 50;
    const shipping = 29;
    const total = subtotal + tax + shipping;

    return (
        <div className="shopping-cart-container">
            <div className="cart-items">
                <h2>Shopping Cart</h2>
                {products.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="item-details">
                            <p className="name">{product.name}</p>
                            <p className="id">#{product.id}</p>
                        </div>
                        <div className="quantity-controls">
                            <button>-</button>
                            <span>{product.quantity}</span>
                            <button>+</button>
                        </div>
                        <p className="price">${product.price}</p>
                        <button className="remove">×</button>
                    </div>
                ))}
            </div>

            <div className="order-summary">
                <h2>Order Summary</h2>
                <input type="text" placeholder="Code" />
                <div className="card-input">
                    <input type="text" placeholder="Enter Card Number" />
                    <button>Apply</button>
                </div>
                <div className="summary-row">
                    <span>Subtotal</span><span>${subtotal}</span>
                </div>
                <div className="summary-row">
                    <span>Estimated Tax</span><span>${tax}</span>
                </div>
                <div className="summary-row">
                    <span>Estimated shipping & Handling</span><span>${shipping}</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span><span>${total}</span>
                </div>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
