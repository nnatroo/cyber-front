import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../modules/NewArrivals.module.scss";
import heart from "../assets/heart.svg";

export const NewArrivals = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/newArrival`)
            .then(function (response) {
                setProductData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className={classes["category-section"]}>
                <h2 className={classes["new-arrival-heading"]}>New Arrival</h2>
                <h2>Bestseller</h2>
                <h2>Featured products</h2>
            </div>
            <div className={classes["product-container"]}>
                <div className={classes["product-card"]}>
                    {productData.map((product) => (
                        <div key={product._id || product.id} className={classes["new-arrival-item"]}>
                            <div className={classes["arrivals-heart"]}>
                                <img src={heart} alt="heart icon" />
                            </div>
                            <figure className={classes["new-arrival-image"]}>
                                <img src={`http://localhost:5000/${product.image}`}
                                     alt={product.name || product.category}/>
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
