import classes from "../modules/Discounts.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import favoriteIcon from "../assets/favorites-icon.png";
import favoritedIcon from "../assets/favorited-icon.png";

const Discounts = () => {

    const [productData, setProductData] = useState([])
    const [like, setLike] = useState([false])


    useEffect(() => {
        axios.get(`http://localhost:5000/products/discounts`)
            .then(function (response) {
                setProductData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);

    const handleLikeProduct = (id) => {
        if (like.includes(id)) {
            setLike(like.filter(productId => productId !== id));
        } else {
            setLike(like.concat(id));
        }
    }

    return (
        <>
            <div className={classes["new-arrival_container"]}>

                <h2 className={classes["discount-title"]}>Discounts up to -50%</h2>


                <div className={classes["products-container"]}>
                    {productData.map((product, index) => (
                        <div key={index} className={classes["products"]}>
                            <img src={!like.includes(product.id) ? favoriteIcon : favoritedIcon} className={classes["fav-icon"]} onClick={() => handleLikeProduct(product.id)}/>
<br/><br/><br/>
                            <div className={classes["flex-center"]}>
                                <center>
                                    <img src={product?.image} alt="product" className={classes["products-image"]}/>
<br/><br/>
                                    <div className={classes['about-product']}>
                                        <p>{product?.name}</p>
                                        <h2>${product?.price}</h2>
                                        <button>Buy Now</button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Discounts;