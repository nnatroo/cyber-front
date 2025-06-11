import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import Header from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Product } from "../components/Product.jsx";
import classes from "../modules/SearchResults.module.scss";

const SearchResultPage = () => {
    const [params] = useSearchParams();
    const searchTerm = params.get("query") || "";
    const category = "all";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!searchTerm) {
            setProducts([]);
            return;
        }

        axios.get(`http://localhost:5000/products/${category}`)
            .then(res => {
                const items = res.data || [];
                const filtered = items.filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setProducts(filtered);
            })
            .catch(err => {
                console.error(err);
                setProducts([]);
            });
    }, [searchTerm, category]);

    return (
        <>
            <Header />
            {searchTerm && (
                <div>
                    <h4>Search Results for: "{searchTerm}"</h4>
                    <div className={classes['product-wrapper']}>
                        {products.length > 0 ? (
                            products.map(product => (
                                <Product key={product.id || product.name} product={product} />
                            ))
                        ) : (
                            <p>No products match your search.</p>
                        )}
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default SearchResultPage;
