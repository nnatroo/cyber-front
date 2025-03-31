import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../modules/Categories.module.css';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className={styles.categorySection}>
            <div className={styles.categorySectionWrapper}>
                <div className={styles.categorySectionTitle}>
                    <h3>Browse By Category</h3>
                </div>
                <div className={styles.categoryCardsWrapper}>
                    {categories.map((category, index) => (
                        <div className={styles.categoryCard} key={index}>
                            <img src={category.ImageSrc} alt={category.category} />
                            <p>{category.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
