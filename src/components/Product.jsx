import classes from "../modules/Product.module.scss"
import favoriteIcon from "../assets/favorites-icon.png";

export const Product = ({product}) => {
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
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}