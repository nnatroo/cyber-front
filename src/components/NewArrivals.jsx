import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../modules/NewArrivals.module.scss";
import heart from "../assets/heart.svg";
import redHeart from "../assets/redHeart.svg";

export const NewArrivals = () => {
    const [productData, setProductData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:5000/products/newArrival`)
            .then(function (response) {
                setProductData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
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

    const isFavorite = (productId) => {
        return favorites.some((item) => item.id === productId);
    };
    const toggleDropdown = () => setDropdownOpen((prev) => !prev);
    return (
        <>
            <div className={classes["product-container"]}>
                <div className={classes["category-nav"]}>
                    <h2 className={classes["new-arrival-heading"]}>New Arrival</h2>
                    <h2>Bestseller</h2>
                    <h2>Featured products</h2>
                </div>
                <div className={classes["nav-mobile"]}>
                    <button onClick={toggleDropdown}>New Arrival</button>
                    {isDropdownOpen && (
                        <ul className={classes["dropdown"]}>
                            <li>Bestseller</li>
                            <li>Featured Products</li>
                        </ul>
                    )}
                </div>
                <div className={classes["product-card"]}>
                    {productData.map((product) => (
                        <div key={product._id || product.id} className={classes["new-arrival-item"]}>
                            <div className={classes["arrivals-heart"]}>
                                <button className={classes["heart-btn"]} onClick={() => toggleFavorite(product)}>
                                    <img src={isFavorite(product.id) ? redHeart : heart} alt="heart"/>
                                </button>
                            </div>
                            <figure className={classes["new-arrival-image"]}>
                                <img src={`http://localhost:5000/${product.image}`}
                                     alt={product.name || product.category}/>
                            </figure>
                            <div className={classes["new-arrival-info"]}>
                                <p>{product.name}</p>
                                <h3>${product.price}</h3>
                            </div>
                            <button className={classes["buy-btn"]}>Buy Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
