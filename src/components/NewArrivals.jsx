import axios from "axios";
import {useEffect, useState} from "react";
import classes from "../modules/NewArrivals.module.css";
export const NewArrivals = () => {
    const [productData, setProductData] = useState([])

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
            <div>
                {productData.map((product, index) => (
                    <div key={index} className={classes["new-arrival-item"]}>
                        <figure className={classes["new-arrival-image"]}>
                            <img src={product.image} alt=""/>
                        </figure>
                        <div className={classes["new-arrival-info"]}>
                            <p>{product.name}</p>
                            <h3>${product.price}</h3>
                        </div>

                        <button className={classes["buy-btn"]}>Buy Now</button>

                    </div>
                ))}
            </div>
        </>
    )
}