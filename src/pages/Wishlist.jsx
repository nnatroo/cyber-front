import classes from "../modules/Wishlist.module.scss";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {useEffect, useState} from "react";
export const Wishlist = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return(
        <>
            <Header></Header>
            <div>
                { favorites.length > 0 ? ( <div>
                    <h1 className={classes["wishlist-title"]}>Your Wishlist</h1>
                    <div className={classes["wishlist-container"]}>
                        {favorites.map((product, index) => (
                            <div key={index} className={classes["wishlist-item"]}>
                                <img src={`http://localhost:5000/${product.picture}`} alt={product.name} className={classes["wishlist-image"]}/>
                                <div className={classes["wishlist-details"]}>
                                    <h2>{product.name}</h2>
                                    <p>${product.price}</p>
                                    <button className={classes["remove-btn"]} onClick={() => {
                                        const updatedFavorites = favorites.filter((_, i) => i !== index);
                                        localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
                                        window.location.reload();
                                    }}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> ) : (
                    <div className={classes["empty-wishlist"]}>
                        <h2>Your Wishlist is Empty</h2>
                        <p>Start adding products to your wishlist to keep track of your favorites!</p>
                    </div>
                )
                }
            </div>
            <Footer></Footer>
        </>
    )



}