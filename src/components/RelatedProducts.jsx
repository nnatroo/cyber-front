import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "./Product.jsx";
import classes from "../modules/DiscountSection.module.scss";

export const RelatedProducts = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/products/related`)
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
                <h2 className={classes["discount-title"]}>Related Products</h2>
                <div className={classes["products-container"]}>
                    {productData.map((product, index) => (
                        <Product product={product} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}