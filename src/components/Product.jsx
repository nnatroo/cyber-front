import classes from "../modules/Product.module.scss"
import favoriteIcon from "../assets/favorites-icon.png";
import {useNavigate} from "react-router";

export const Product = ({product}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    }

    return (
        <>
            <div className={classes["product"]} onClick={() => handleClick(product)}>
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