import classes from "../modules/ProductPage.module.scss"
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

export const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/newArrival`)
            .then(function (response) {
                // Find the specific product from the list using the id
                const foundProduct = response.data.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className={classes["product-container"]}>
                <div className={classes["image-side"]}>
                    <div className={classes["small-imgs"]}>
                        {product.images?.map((image, index) => (
                            <img key={index} src={image} alt={`Product view ${index + 1}`} />
                        ))}
                    </div>

                    <div className={classes["fullSize-img"]}>
                        <img src={`http://localhost:5000${product?.image}`} />
                    </div>
                </div>

                <div className={classes["about-side"]}>
                    <h1>{product.name}</h1>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}