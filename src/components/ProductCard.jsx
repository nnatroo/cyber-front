import classes from "../modules/ProductCard.module.scss";
import {useState} from "react";
import like from "../assets/favorites-icon.svg";
import likeRed from "../assets/liked.png";

export const ProductCard = ({item}) => {
    const [isLiked, setIsLiked] = useState(false);

    const likeButtonHandler = () => {
        setIsLiked(!isLiked);
        localStorage.setItem('likedProducts', localStorage.getItem('likedProducts') + item.id + '')
    }

    return (
        <>
            <div className={classes['item']}>
                <button onClick={likeButtonHandler} className={classes['like-button']}>
                    {isLiked ? <img className={classes['active-like-img']} src={likeRed} alt="Active like icon"/> :
                        <img className={classes['like-img']} src={like} alt="Like icon"/>}
                </button>
                <img src={`http://localhost:5000/${item.picture}`} alt={item.name}/>
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                <button className={classes['buy-button']}>Buy now</button>
            </div>
        </>
    )
}