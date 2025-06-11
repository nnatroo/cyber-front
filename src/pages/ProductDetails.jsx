import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {RelatedProducts} from "../components/RelatedProducts.jsx";
import classes from "../modules/ProductDetails.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import delivery from '../assets/delivery.svg'
import guaranteed from "../assets/guaranteed.svg"
import stock from "../assets/stock.svg"
import {useNavigate} from "react-router";
import {addToCart} from "../store/cartSlice.js";
import {useDispatch} from "react-redux";


export const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();



    useEffect(() => {
        axios.get(`http://localhost:5000/products/item/id/${id}`)
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

    const handleAddToWishlist = (e,product) => {
        dispatch(addToCart(product));
        e.stopPropagation();
        e.preventDefault();
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
                    <h3 className={classes["home-h3"]} onClick={returnHomeHandler}>Home</h3>
                    <h3> &gt; </h3>
                    <h3 className={classes["bold-title"]}>{product?.name}</h3>
                </div>
                <div className={classes["product-description-wrapper"]}>
                    <div className={classes["small-images"]}>
                        {(() => {
                            const uniqueImages = Array.from(
                                new Set([product.imageUrl, ...(product.images || [])])
                            ).slice(0, 4);

                            return uniqueImages.map((img, index) => (
                                <img
                                    key={index}
                                    className={classes["scaled-img"]}
                                    src={img}
                                    alt={`product-img-${index}`}
                                    onClick={smallImgClickHandler}
                                />
                            ));
                        })()}
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
            </span>)}</h2>
                            </div>
                        </div>
                        <div className={classes["button-container"]}>
                            <button onClick={handleAddToWishlist} className={classes["add-to-wishlist"]}>Add to Wishlist</button>
                            <button onClick={(e) => handleAddToCart(e, product)} className={classes["add-to-cart"]}>Add
                                to Cart
                            </button>
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
                                    <span>{product.warranty} days</span>
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

