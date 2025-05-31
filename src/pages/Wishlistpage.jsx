import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/wishlistSlice';
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
export const Wishlistpage = () => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    return (
        <>
            <Header/>
        <div>
            <h1>Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.name}>
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <img src={`http://localhost:5000${item?.picture}`} alt="product"/>
                                <button onClick={() => dispatch(removeFromWishlist(item.name))}>
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
            <Footer/>
</>
    );
};
