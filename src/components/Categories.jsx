    import classes from '../modules/Categories.module.scss'
    import {useEffect, useState} from "react";
    import axios from "axios";


    export const Categories = () => {
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
            <>
                <section className={classes["category-section"]}>
                    <div className={classes["category-section-wrapper"]}>
                        <div className={classes["category-section-title"]}>
                            <h3>Browse By Category</h3>
                        </div>
                        <div className={classes["category-cards-wrapper"]}>
                            {categories.map((img, index) => (
                                <div key={index} className={classes["category-card"]}>
                                    <img src={`http://localhost:5000/${img.ImageSrc}`} alt={img.category}
                                         className={classes["category-card-img"]}/>
                                    <p className={classes["category-card-text"]}>{img.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }