import {useEffect, useState} from "react";
import axios from "axios";
import classes from "../modules/Discounts.module.css";
import redHeart from "../assets/redHeart.svg";
import heart from "../assets/heart.svg";
export const Discount = () => {
    const [productData, setProductData] = useState([])
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/discounts`)
            .then(function (response) {
                setProductData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        try {
            const favsFromStorage = localStorage.getItem("favorites");
            const parsed = JSON.parse(favsFromStorage);
            if (Array.isArray(parsed)) {
                setFavorites(parsed);
            } else {
                setFavorites([]);
            }
        } catch (err) {
            console.error("Failed to parse favorites from localStorage", err);
            setFavorites([]);
        }
    }, []);
    const toggleFavorite = (product) => {
        const isFav = favorites.some((item) => item.id === product.id);
        let updatedFavorites;

        if (isFav) {
            updatedFavorites = favorites.filter((item) => item.id !== product.id);
        } else {
            const cleanProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
            };
            updatedFavorites = [...favorites, cleanProduct];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    // Check if a product is a favorite
    const isFavorite = (productId) => {
        return favorites.some((item) => item.id === productId);
    };

    return (
        <>
            <div className={classes["discounts"]}>
                <div className={classes["discount-title"]}>
                    <h2>Discounts up to -50%</h2>
                </div>
                <div className={classes["discounts-product"]}>
                    {productData.map((product, index) => (
                        <div key={index} className={classes["discounts-item"]}>
                            <div className={classes["discounts-heart"]}>
                                <button className={classes["heart-btn"]} onClick={() => toggleFavorite(product)}>
                                    <img src={isFavorite(product.id) ? redHeart : heart} alt="heart"/>
                                </button>
                            </div>
                            <figure className={classes["discounts-image"]}>
                                <img src={`http://localhost:5000/${product.image}`} alt={product.category}/>
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