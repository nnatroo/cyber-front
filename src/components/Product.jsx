import classes from "../modules/Product.module.scss"
import favoriteIcon from "../assets/favorites-icon.png";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice.js";

export const Product = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <>
            <div className={classes["product"]}>
                <img src={favoriteIcon} alt="product-img" className={classes["fav-icon"]}/>
                <div className={classes["flex-center"]}>
                    <img src={`http://localhost:5000${product?.image}`} alt="product"
                         className={classes["products-image"]}/>
                    <div className={classes['about-product']}>
                        <p>{product?.name}</p>
                        <h2>${product?.price}</h2>
                        <button  onClick={() => handleAddToCart(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}