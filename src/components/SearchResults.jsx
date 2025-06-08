import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./Product.jsx";
import classes from '../modules/SearchResults.module.scss'


export const SearchResults = ({ searchTerm, category = 'all' }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (!searchTerm) {
            setProducts([]);
            return;
        }
        axios.get(`http://localhost:5000/products/${category}`)
            .then(res => {
                let prods = [];
                if (category === 'all') {
                    prods = res.data;
                } else {
                    prods = res.data || [];
                }
                const filtered = prods.filter(p =>
                    p.name.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setProducts(filtered);
            })
            .catch(err => {
                console.error(err);
                setProducts([]);
            });
    }, [searchTerm, category]);

    if (!searchTerm) return null;

    return (
        <div>
            <h4>Search Results for: "{searchTerm}"</h4>
            <div className={classes['product-wrapper']}>
                {products.length > 0 ? (
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products match your search.</p>
                )}
            </div>
        </div>
    );
};
