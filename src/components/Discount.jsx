import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../modules/Discounts.module.css";
import redHeart from "../assets/redHeart.svg";
import heart from "../assets/heart.svg";
export const Discount = () => {
    const [productData, setProductData] = useState([])
    const [favourite, setFavourite] = useState(false);
    const [favouriteData, setFavouriteData] = useState([]);
    const favouriteHandler = () => {
        setFavourite(!favourite)
    }
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

    return (
        <>
            <div className={classes["discounts"]}>
                <div className={classes["discount-title"]}>
                    <h2>Discounts up to -50%</h2>
                </div>
                <div className={classes["discounts-product"]}>
                    {productData.map((product, index) => (
                        <div key={index} className={classes["discounts-item"]}>
                            <div className={classes["discounts-heart"]}>
                                <button className={classes["heart-btn"]} onClick={()=>{favouriteHandler}}>{favourite ?
                                    <img src={redHeart} alt="redheart"/>:<img src={heart} alt="heart"/>
                                }</button>
                            </div>
                            <figure className={classes["discounts-image"]}>
                                <img src={`http://localhost:5000/${product.image}`} alt={product.category}/>
                            </figure>
                            <div className={classes["discounts-info"]}>
                                <p>{product.name}</p>
                                <h3>${product.price}</h3>
                            </div>

                            <button className={classes["buy-btn"]}>Buy Now</button>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}