import classes from '../modules/Wishlist.module.scss'
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";


export const Wishlist = () => {
    const navigate = useNavigate();

    const [productData, setProductData] = useState([])
    const [wishlist, setWishlist] = useState(wishlistLocalStorage)


    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist'));
        if (wishlist) {
            setWishlist(wishlist);
        }
    }, []);
    return (
        <>
            <Header/>
            <div className={classes['main-wrapper']}>
                <h2>Wishlist</h2>
                <div className={classes["wishlist-items"]}>
                    {productData.length === 0 ? (
                        <div className={classes['empty-state']}>
                            <h2>No items in Wishlist </h2>
                            <button onClick={() => navigate('/')} className={classes['btn-back']}>
                                Go to Home Page
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                    {productData.map((product) => (
                        <div className={classes["wishlist-item"]} key={product.id}>
                            <figure>
                                <img src={`http://localhost:5000${product?.picture}`} alt="product"/>
                            </figure>
                            <div className={classes['item-details']}>
                                <h3>{product.name}</h3>
                                <span>${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
