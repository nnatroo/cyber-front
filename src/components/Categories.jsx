import classes from '../modules/Categories.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:5000/categories')
            .then((response) => {
                setCategories(response.data.slice(0, 6));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleCategoryClick = (img) => {
        navigate(`/products/${img.categoryName}`);
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
                        {isLoading && <div className={classes["loading-wrapper"]}>...Loading</div>}
                        {categories.map((category, index) => (
                            <figure key={index} className={classes["category-card"]}  onClick={() => handleCategoryClick(img)}>
                                <p className={classes["category-card-text"]}>{category.name}</p>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
