import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/wishlistSlice';
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import classes from "../modules/wishlist.module.scss";
import cross from '../assets/close.svg'
export const Wishlistpage = () => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    return (
        <>

            <Header/>
    <div className={classes['wishlist']}>    <div className={classes['wishlist-container']}>
            <h1>Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.name}>
                            <div className={classes['wishlist-item']}>
                                <img src={`http://localhost:5000${item?.picture}`} alt="product"
                                     className={classes['item-img']}/>
                                <h3 className={classes['item-name']}>{item.name}</h3>
                                <button className={classes['remove-btn']}
                                        onClick={() => dispatch(removeFromWishlist(item.name))}>
                                <img src={cross} alt="cross" className={classes["cross"]}/>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
    </div>
    </div>
            <Footer/>
</>
    );
};
