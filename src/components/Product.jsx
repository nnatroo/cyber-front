import classes from "../modules/Product.module.scss"
import favoriteIcon from "../assets/wishlist-icon-empty.svg";
import favorite from "../assets/wishlist-icon-filled.svg"
import {useDispatch} from "react-redux";
import {Link,useNavigate} from "react-router";
import {addToCart} from "../store/cartSlice.js";
import {useEffect, useState} from "react";

export const Product = ({product}) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const [isfavorite, setIsfavorite] = useState(false);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setIsAdded(true);
    };
    const navigate = useNavigate();

    const detailsHandler = () => {
        navigate(`/products/${product.id}`)
    };

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites"))|| [] ;
        const exists = favorites.some((item) => item.name === product.name);
        setIsfavorite(exists);
    }, [product.name]);
    const favoriteHandler = (product) => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favorites.some((item) => item.name === product.name);
        let updatedFavorites;

        if (exists) {
            updatedFavorites = favorites.filter((item) => item.name !== product.name);
            setIsfavorite(false);
        } else {
            updatedFavorites = [...favorites, product];
            setIsfavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    }

    return (
        <div className={classes["product"]} onClick={detailsHandler} >
            {isfavorite ?
                <img src={favorite} alt="product-img" className={classes["fav-icon"]}
                                                    onClick={() => favoriteHandler(product)}/>:
                <img src={favoriteIcon} alt="product-img" className={classes["fav-icon"]} onClick={() => favoriteHandler(product)}/>

            }
            <div className={classes["flex-center"]}>
                <img src={product.imageUrl} alt="product" className={classes["products-image"]}/>
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
        // <>
        //     <div className={classes["product"]} onClick={detailsHandler}>
        //         <img src={favoriteIcon} alt="product-img" className={classes["fav-icon"]}/>
        //         <div className={classes["flex-center"]}>
        //             <img src={`http://localhost:5000${product?.picture}`} alt="product"
        //                  className={classes["products-image"]}/>
        //             <div className={classes['about-product']}>
        //                 <p>{product?.name}</p>
        //                 <h2>${product?.price}</h2>
        //                 {isAdded ? <button className={classes["link-btn"]} onClick={(e) => e.stopPropagation()}>
        //                     <Link to={"/shopping-cart"} className={classes["link"]} onClick={(e) => e.stopPropagation()}>In
        //                         cart</Link></button> : <button onClick={(e) => handleAddToCart(e,product)}
        //                                                        className={classes["buy-btn"]}>Buy Now
        //                 </button>}
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

