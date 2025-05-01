import axios from "axios";
import {useState} from "react";
import classes from "../modules/NewArrivals.module.css";
export const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    axios.get('/http://localhost:5000/products/newArrival')
        .then(function (response) {
            setProducts(response.data);
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    return (
        <>
            <div>

            </div>
        </>

    );
}