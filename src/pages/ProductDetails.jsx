import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {RelatedProducts} from "../components/RelatedProducts.jsx";
import classes from "../modules/ProductDetails.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router";
import delivery from '../assets/delivery.svg'
import guaranteed from "../assets/guaranteed.svg"
import stock from "../assets/stock.svg"
import {useNavigate} from "react-router";
import {addToCart} from "../store/cartSlice.js";
import {useDispatch} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

export const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/item/${id}`)
            .then(function (response) {
                setProduct(response.data);
                setSelectedImage(response.data.imageUrl);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return <div className={classes["loading-container"]}>
            <CircularProgress size={100}/>
        </div>;
    }

    const handleAddToCart = (e, product) => {
        dispatch(addToCart(product));
        navigate(`/shopping-cart`)
    };

    const handleAddToWishlist = (e, product) => {
        dispatch(addToCart(product));
        navigate(`/wishlist`)
    };

    const smallImgClickHandler = (e) => {
        const clickedImgSrc = e.target.src;
        setSelectedImage(clickedImgSrc);
    };

    return (
        <>
            <Header/>
            <div className={classes["product-detail-container"]}>
                <div className={classes["product-details-title-wrapper"]}>
                    <Link to={"/"} className={classes["home-h3"]}>Home</Link>
                    <h3 className={classes["h3-arrow"]}> &gt; </h3>
                    <h3 className={classes["bold-title"]}>{product?.name}</h3>
                </div>
                <div className={classes["product-description-wrapper"]}>
                    <div className={classes["small-images"]}>
                        {product.images.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                className={classes["scaled-img"]}
                                src={img}
                                alt={`product-img-${index}`}
                                onClick={smallImgClickHandler}
                            />
                        ))
                        }
                    </div>

                    <div className={classes["img-wrapper"]}>
                        <img className={classes['big-img']} alt="product img"
                             src={selectedImage}/>
                    </div>
                    <div className={classes["product-details-wrapper"]}>
                        <div className={classes["product-details-txt"]}>
                            <h1>{product?.name}</h1>
                            <div className={classes["price-row"]}>
                                <h2> ${product?.price}
                                    {product?.previousPrice && product.previousPrice > product.price && (
                                        <span className={classes["previous-price"]}>
                                          ${product.previousPrice}
                                        </span>)}
                                </h2>
                            </div>
                        </div>
                        <div className={classes["button-container"]}>
                            <button onClick={handleAddToWishlist} className={classes["add-to-wishlist"]}>Add to
                                Wishlist
                            </button>
                            <button onClick={(e) => handleAddToCart(e, product)} className={classes["add-to-cart"]}>Add
                                to Cart
                            </button>
                        </div>
                        <div className={classes["buying-details-container"]}>
                            <div className={classes["buying-detail"]}>
                                <img className={classes["details-img"]} src={delivery} alt=""/>
                                <div className={classes["details-text"]}>
                                    <p className={classes["details-p"]}>Free Delivery</p>
                                    <span className={classes['details-description']}>1-2 day</span>
                                </div>
                            </div>
                            <div className={classes["buying-detail"]}>
                                <img className={classes["details-img"]} src={stock} alt=""/>
                                <div className={classes["details-text"]}>
                                    <p className={classes["details-p"]}>In Stock</p>
                                    <span className={classes['details-description']}>Today</span>
                                </div>
                            </div>
                            {product.warranty !== 0 && <div className={classes["buying-detail"]}>
                                <img className={classes["details-img"]} src={guaranteed} alt=""/>
                                <div className={classes["details-text"]}>
                                    <p className={classes["details-p"]}>Guaranteed</p>
                                    <span className={classes['details-description']}>{product.warranty} days</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
            <Footer/>
        </>
    );
};

