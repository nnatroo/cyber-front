import classes from "../modules/Product.module.scss"
import favoriteIconFilled from "../assets/wishlist-icon-filled.svg";
import favoriteIcon from "../assets/wishlist-icon-empty.svg";
import {addToCart} from "../store/cartSlice.js";
import {useState} from "react";
import {Link} from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";

export const Product = ({product}) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setIsAdded(true);
    };
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const isWishlisted = wishlistItems.some((item) => item.name === product.name);

    const handleToggleWishlist = () => {
        if (isWishlisted) {
            dispatch(removeFromWishlist(product.name));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div className={classes["product"]}>
            <img src={isWishlisted ? favoriteIconFilled : favoriteIcon}
                alt="wishlist-icon"
                className={classes["fav-icon"]}
                onClick={handleToggleWishlist}
            />

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
