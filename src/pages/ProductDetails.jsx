import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {useNavigate} from "react-router";
import {RelatedProducts} from "../components/RelatedProducts.jsx";
import classes from "../modules/ProductDetails.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";


export const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/newArrival`)
            .then(function (response) {
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
            <Header/>
            <div className={classes["product-detail-container"]}>
                <div className={classes["product-details-title-wrapper"]}>
                    <h3>Home</h3>
                    <h3> &gt; </h3>
                    <h3>{product?.name}</h3>
                </div>
                <div className={classes["product-details-description-wrapper"]}>
                    <div className={classes["small-img"]}>
                        <img src="" alt=""/>
                    </div>
                    <div className={classes["fullSize-img"]}>
                        <img src={`http://localhost:5000${product?.image}`}/>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
            <Footer/>
        </>
    );
};

