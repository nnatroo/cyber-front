import React, { useEffect, useState } from 'react';
import '../reset.scss';

import Categories from "../components/Categories.jsx";
import '../modules/Categories.module.css';

import axios from 'axios';

export default function Home() {
    const [setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, );

    return (
        <div>

            <Categories />

        </div>
    );
}
