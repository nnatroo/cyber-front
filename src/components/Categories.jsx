import classes from '../modules/Categories.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const handleCategoryClick = (img) => {
        navigate(`/products/${img.category}`);
        window.scrollTo(0, 0);
    };
    return (
        <>
            <section className={classes["category-section"]}>
                <div className={classes["category-section-wrapper"]}>
                    <div className={classes["category-section-title"]}>
                        <h3>Browse By Category</h3>
                    </div>
                    <div className={classes["category-cards-wrapper"]}>
                        {categories.map((img, index) => (
                            <figure key={index} className={classes["category-card"]}  onClick={() => handleCategoryClick(img)}>
                                <img src={`http://localhost:5000/${img.ImageSrc}`} alt={img.category}
                                     className={classes["category-card-img"]}/>
                                <p className={classes["category-card-text"]}>{img.category}</p>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
