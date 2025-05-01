import axios from "axios";
import {useState} from "react";
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
            <div className="container">

            </div>
        </>

    );
}