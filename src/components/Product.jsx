import classes from "../modules/Product.module.scss"
import favoriteIcon from "../assets/favorites-icon.png";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice.js";
import {useState} from "react";
import {Link,useNavigate} from "react-router";

export const Product = ({product}) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate();


    const handleAddToCart = (e,product) => {
        dispatch(addToCart(product));
        setIsAdded(true);
        e.stopPropagation();
        e.preventDefault();
    };
    const detailsHandler = () => {
        navigate(`/products/${product.name}`)
    };

    return (
        <>
            <div className={classes["product"]} onClick={detailsHandler}>
                    <img src={favoriteIcon} alt="product-img" className={classes["fav-icon"]}/>
                    <div className={classes["flex-center"]}>
                        <img src={`http://localhost:5000${product?.picture}`} alt="product"
                             className={classes["products-image"]}/>
                        <div className={classes['about-product']}>
                            <p>{product?.name}</p>
                            <h2>${product?.price}</h2>
                            {isAdded ? <button className={classes["link-btn"]} onClick={(e) => e.stopPropagation()}>
                                <Link to={"/shopping-cart"} className={classes["link"]} onClick={(e) => e.stopPropagation()}>In
                                    cart</Link></button> : <button onClick={(e) => handleAddToCart(e,product)}
                                                                   className={classes["buy-btn"]}>Buy Now
                            </button>}
                        </div>
                    </div>
            </div>
        </>
    )
}
