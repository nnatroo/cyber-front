import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "./Product.jsx";
import classes from "../modules/DiscountSection.module.scss";

export const DiscountSection = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/products/discounts`)
            .then(function (response) {
                setProductData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className={classes["discount_container"]}>
                <h2 className={classes["discount-title"]}>Discounts up to -50%</h2>
                <div className={classes["products-container"]}>
                    {productData.map((product, index) => (
                        <Product product={product} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}