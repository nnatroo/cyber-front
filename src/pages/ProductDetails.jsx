import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {RelatedProducts} from "../components/RelatedProducts.jsx";
import classes from "../modules/ProductDetails.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import delivery from '../assets/delivery.png'
import guaranteed from "../assets/guaranteed.png"
import stock from "../assets/stock.png"
import {useNavigate} from "react-router";
import {addToCart} from "../redux/cartSlice.js";
import {useDispatch} from "react-redux";


export const ProductDetails = () => {
    const { name } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);


    useEffect(() => {
        const decodedName = decodeURIComponent(name);
        axios.get(`http://localhost:5000/products/item/${decodedName}`)
            .then(function (response) {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            })
    }, [name]);

    useEffect(() => {
        if (product) {
            setSelectedImage(`http://localhost:5000${product["picture"]}`);
        }
    }, [product]);



    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const returnHomeHandler = () => {
        navigate(`/`)

    }
    const handleAddToCart = (e,product) => {
        dispatch(addToCart(product));
        e.stopPropagation();
        e.preventDefault();
        navigate(`/shopping-cart`)
    };




    return (
        <>
            <Header/>
            <div className={classes["product-detail-container"]}>
                <div className={classes["product-details-title-wrapper"]}>
                    <h3 className={classes["home-h3"]} onClick={returnHomeHandler}>Home</h3>
                    <h3> &gt; </h3>
                    <h3 className={classes["bold-title"]}>{product?.name}</h3>
                </div>
                <div className={classes["product-description-wrapper"]}>
                    <div className={classes["small-images"]}>
                        <img src={`http://localhost:5000${product["small-front-img"]}`} alt="Front"
                             onClick={() => setSelectedImage(`http://localhost:5000${product["picture"]}`)}/>
                        <img src={`http://localhost:5000${product["small-back-img"]}`} alt="Back"
                             onClick={() => setSelectedImage(`http://localhost:5000${product["back-img"]}`)}/>
                        <img src={`http://localhost:5000${product["small-side-img"]}`} alt="Side"
                             onClick={() => setSelectedImage(`http://localhost:5000${product["side-img"]}`)}/>
                        <img src={`http://localhost:5000${product["small-top-img"]}`} alt="Top"
                             onClick={() => setSelectedImage(`http://localhost:5000${product["top-img"]}`)}/>
                    </div>
                    <div className={classes["img-wrapper"]}>
                        <img className={classes['big-img']} alt="product img"
                             src={selectedImage}/>
                    </div>
                    <div className={classes["product-details-wrapper"]}>
                        <div className={classes["product-details-txt"]}>
                            <h1>{product?.name}</h1>
                            <h2>${product?.price}</h2>
                        </div>
                        <div className={classes["button-container"]}>
                            <button className={classes["add-to-wishlist"]}>Add to Wishlist</button>
                            <button onClick={(e) => handleAddToCart(e,product)} className={classes["add-to-cart"]}>Add to Cart</button>
                        </div>
                        <div className={classes["buying-details-container"]}>
                            <div className={classes["buying-detail"]}>
                                <img className={classes["details-img"]} src={delivery} alt=""/>
                                <div className={classes["details-text"]}>
                                    <p className={classes["details-p"]}>Free Delivery</p>
                                    <span>1–2 day</span>
                                </div>
                            </div>
                            <div className={classes["buying-detail"]}>
                                <img className={classes["details-img"]} src={stock} alt=""/>
                                <div className={classes["details-text"]}>
                                    <p className={classes["details-p"]}>In Stock</p>
                                    <span>today</span>
                                </div>
                            </div>
                            <div className={classes["buying-detail"]}>
                                <img className={classes["details-img"]} src={guaranteed} alt=""/>
                                <div className={classes["details-text"]}>
                                    <p className={classes["details-p"]}>Guaranteed</p>
                                    <span>1 year</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
            <Footer/>
        </>
    );
};

