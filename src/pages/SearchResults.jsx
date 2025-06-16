import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router";
import axios from "axios";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Product} from "../components/Product.jsx";
import classes from "../modules/SearchResults.module.scss";


const SearchResults = () => {
    const CATEGORY = "all";

    const {searchTerm} = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${CATEGORY}`)
            .then(res => {
                const items = res.data || [];
                const filtered = items.filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setProducts(filtered);
            })
            .catch(err => {
                console.error(err);
            });
    }, [searchTerm]);

    return (
        <>
            <Header/>
            {searchTerm && (
                <div>
                    <h4>Search Results for: "{searchTerm}"</h4>
                    <div className={classes['product-wrapper']}>
                        {products.map((product) => (
                            <Product key={product.id || product.name} product={product}/>
                        ))}
                    </div>

                    {products.length === 0 && (
                        <p className={classes['not-fount-text']}>No products match your search.</p>
                    )}
                </div>
            )}
            <Footer/>
        </>
    );
};

export default SearchResults;
