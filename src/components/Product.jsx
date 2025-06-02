import classes from "../modules/Product.module.scss"
import favoriteIcon from "../assets/favorites-icon.png";
import favorite from "../assets/liked.png"
import {useDispatch} from "react-redux";
import {addToCart} from "../store/cartSlice.js";
import {useState} from "react";
import {Link} from "react-router";

export const Product = ({product}) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const [isfavorite, setIsfavorite] = useState(false);
    let oldFavorites = localStorage.getItem("favorites");

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setIsAdded(true);
    };
    const favoriteHandler = (product) => {
        const updatedFavorites = [...oldFavorites, product];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsfavorite(true);
    }

    return (
        <div className={classes["product"]}>
            {isfavorite ?
                <img src={favorite} alt="product-img" className={classes["fav-icon"]}
                                                    onClick={() => favoriteHandler(product)}/>:
                <img src={favoriteIcon} alt="product-img" className={classes["fav-icon"]} onClick={() => favoriteHandler(product)}/>

            }
            <div className={classes["flex-center"]}>
                <img src={`http://localhost:5000/${product.picture}`} alt="product"
                     className={classes["products-image"]}/>
                <div className={classes['about-product']}>
                    <p>{product.name}</p>
                    <h2>${product.price}</h2>
                    {isAdded ? (
                        <button className={classes["link-btn"]}>
                            <Link to={"/shopping-cart"} className={classes["link"]}>In cart</Link>
                        </button>
                    ) : (
                        <button onClick={() => handleAddToCart(product)} className={classes["buy-btn"]}>
                            Buy Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
