import React, { useState } from 'react';
import {Product} from './Product.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import Header from "./Header.jsx";


const SearchResults = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Header onSearchChange={(value) => setSearch(value)} />
            <div className="products-wrapper">
                {filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default SearchResults;
