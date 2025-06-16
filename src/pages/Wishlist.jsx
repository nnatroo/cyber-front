import React, {useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import classes from "../modules/wishlist.module.scss";
import cross from '../assets/close.svg'

export const Wishlist = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    const removeFromWishlist = (name) => {
        const updatedFavorites = favorites.filter(item => item.name !== name);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    return (
        <>

            <Header/>
            <div className={classes['wishlist']}>
                <div className={classes['wishlist-container']}>
                    <h1>Wishlist</h1>
                    {favorites.length === 0 ? (
                        <p>Your wishlist is empty.</p>
                    ) : (
                        <ul>
                            {favorites.map((item) => (
                                <li key={item.name}>
                                    <div className={classes['wishlist-item']}>
                                        <div className={classes['item-details']}>
                                            <img src={item.imageUrl} alt="product" className={classes['item-img']}/>
                                            <h3 className={classes['item-name']}>{item.name}</h3>
                                        </div>
                                        <button className={classes['remove-btn']}
                                                onClick={() => removeFromWishlist(item.name)}>
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
