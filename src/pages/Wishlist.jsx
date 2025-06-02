import classes from '../modules/Wishlist.module.scss'
import React, {useEffect, useState} from "react";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([])

    useEffect(() => {
        setWishlistItems(JSON.parse(localStorage.getItem('wishlist')) || [])
    }, [])


    const deleteHandler = (name) => {
        setWishlistItems(wishlistItems.filter(item => item.name !== name))
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }

    return (
        <>
            <Header/>
            <div className={classes.mainDiv}>
                <div className={classes.holderDiv}>
                    <h1>Wishlist</h1>
                    <div className={classes.productHolder}>
                        {wishlistItems.map((item) => (
                            <div className={classes.wishlistCard}>
                                <img src={`http://localhost:5000${item?.picture}`} alt={"Product Image"}/>
                                <div className={classes.textHolder}>
                                    <h2>{item.name}</h2>
                                    <button onClick={() => deleteHandler(item.name)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Wishlist