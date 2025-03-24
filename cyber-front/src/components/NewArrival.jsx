import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../modules/NewArrival.module.scss"
import airpods from "../assets/Airpods.png"
import camera from "../assets/Camera.png"
import appleWatch from "../assets/Apple-watch.png"
import galaxyBuds from "../assets/Galaxy-buds.png"
import galaxyFold from "../assets/Galaxy-fold.png"
import galaxyWatch from "../assets/Galaxy-watch.png"
import ipad from "../assets/Ipad.png"
import iphone from "../assets/Iphone-14.png"
import favoriteIcon from "../assets/favorites-icon.png"
import favoritedIcon from "../assets/favorited-icon.png"



const NewArrival = () => {

    const [productData, setProductData] = useState([])
    const [like, setLike] = useState([false])


    useEffect(() => {
        axios.get(`http://localhost:5000/products/newArrival`)
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
                <div className={classes["text-side"]}>
                    <h3 className={classes["action"]}>New Arrival</h3>
                    <h3>Bestseller</h3>
                    <h3>Featured Products</h3>
                </div>

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

export default NewArrival;