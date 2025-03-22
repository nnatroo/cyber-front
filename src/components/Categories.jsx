import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../modules/Categories.module.css';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/categories')
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.categoriesContainer}>
            <h2 className={styles.categoryTitle}>Browse by category</h2>
            <div className={styles.categoryGrid}>
                {categories
                    .filter(category => category.ImageSrc)
                    .map((category, index) => (
                        <div key={index} className={styles.categoryItem}>
                            <img
                                src={category.ImageSrc}
                                alt={`Category ${category._id}`}
                                className={styles.categoryIcon}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
