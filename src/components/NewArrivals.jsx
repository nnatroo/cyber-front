import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../modules/NewArrivals.module.css";
import redHeart from "../assets/redHeart.svg";
import heart from "../assets/heart.svg";

export const NewArrivals = () => {
    const [productData, setProductData] = useState([]);
    const [favourite, setFavourite] = useState(false);
    const [favouriteData, setFavouriteData] = useState([]);
    const favouriteHandler = () => {
        setFavourite(!favourite)
    }
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

    return (
        <>
            <div className={classes["product-container"]}>
                <div className={classes["product-card"]}>
                    {productData.map((product, index) => (
                        <div key={index} className={classes["new-arrival-item"]}>
                            <div className={classes["arrivals-heart"]}>
                                <button className={classes["heart-btn"]} onClick={() => {
                                    favouriteHandler
                                }}>{favourite ?
                                    <img src={redHeart} alt="redheart"/> : <img src={heart} alt="heart"/>}</button>
                            </div>
                            <figure className={classes["new-arrival-image"]}>
                                <img src={`http://localhost:5000/${product.image}`} alt={product.category}/>
                            </figure>
                            <div className={classes["new-arrival-info"]}>
                                <p>{product.name}</p>
                                <h3>${product.price}</h3>
                            </div>

                            <button className={classes["buy-btn"]}>Buy Now</button>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};
