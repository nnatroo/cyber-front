import classes from "../modules/ProductCard.module.scss";
import {useState} from "react";
import like from "../assets/favorites-icon.svg";
import likeRed from "../assets/liked.png";
import {Link} from "react-router";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice.js";

export const ProductCard = ({item}) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const likeButtonHandler = () => {
        setIsLiked(!isLiked);
        localStorage.setItem('likedProducts', localStorage.getItem('likedProducts') + item.id + '')
    }
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setIsAdded(true);
    };
    return (
        <>
            <div className={classes['item']}>
                <button onClick={likeButtonHandler} className={classes['like-button']}>
                    {isLiked ? <img className={classes['active-like-img']} src={likeRed} alt="Active like icon"/> :
                        <img className={classes['like-img']} src={like} alt="Like icon"/>}
                </button>
                <img src={`http://localhost:5000/images/${item.picture}`} alt={item.name}/>
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                {isAdded ? (
                    <button className={classes["link-btn"]}>
                        <Link to={"/shopping-cart"} className={classes["link"]}>In cart</Link>
                    </button>
                ) : (
                    <button onClick={() => handleAddToCart(item)} className={classes["buy-btn"]}>
                        Buy Now
                    </button>
                )}
            </div>
        </>
    )
}