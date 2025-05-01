import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../modules/Discounts.module.css";
export const Discount = () => {
    const [productData, setProductData] = useState([])

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
                            <figure className={classes["discounts-image"]}>
                                <img src={product.image} alt="image"/>
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