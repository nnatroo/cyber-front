import classes from "../modules/ProductCard.module.scss";
import like from "../assets/like.svg";

export const ProductCard = ({item}) => {
    return (
        <>
            <div className={classes['item']}>
                <button className={classes['like-button']}>
                    <img className={classes['like-img']} src={like} alt="Like icon"/>
                </button>
                <img src={`http://localhost:5000/${item.picture}`} alt={"Phone image"}/>
                <h1>{item.name}</h1>
                <p>{item.finalPrice}</p>
                <button className={classes['buy-button']}>Buy now</button>
            </div>
        </>
    )
}
