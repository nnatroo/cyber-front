import {Product} from "./Product.jsx";
import classes from "../modules/NewArrivalSection.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";

export const NewArrivalSection = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/products/newArrival`)
            .then(function (response) {
                setProductData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className={classes["new-arrival_container"]}>
                <div className={classes["text-side"]}>
                    <h3>New Arrival</h3>
                </div>
                <div className={classes["products-container"]}>
                    {productData.map((product, index) => (
                        <Product product={product} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}
