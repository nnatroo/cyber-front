import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router";
import classes from "../modules/ProductPage.module.scss";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import favoriteIcon from "../assets/favorites-icon.png";
import {addToCart} from "../redux/cartSlice.js";
import {useDispatch} from "react-redux";
export const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [isAdded, setIsAdded] = useState(false);

    // const handleAddToCart = (product) => {
    //     dispatch(addToCart(product));
    //     setIsAdded(true);
    // };
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${category}`)
            .then((response) => {
                const data = response.data;
                setProducts(data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
                setProducts([]);
            });
    }, [category]);
    return (
        <>
            <Header/>
            <div className={classes["products-container"]}>
                <div className={classes["product"]}>
                    {products.length > 0 ? (
                            products.map((product, index) => (
                                <div key={index} className={classes["product-card"]}>
                                    <img src={favoriteIcon} alt="product-img" className={classes["fav-icon"]}/>
                                    <div className={classes["flex-center"]}>
                                        <img src={`http://localhost:5000${product.image}`} alt={product.name}
                                             className={classes["product-image"]}/>
                                    </div>
                                    <div className={classes['about-product']}>
                                        <p>{product.name}</p>
                                        <h2>${product.price}</h2>
                                        <button className={classes["buy-btn"]}>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <p>No products found for {category}.</p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};