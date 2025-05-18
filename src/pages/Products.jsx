import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import classes from "../modules/ProductPage.module.scss";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import chunk from 'lodash.chunk'
import {ProductCard} from "../components/ProductCard.jsx";
import arrowRight from "../assets/rightarrow.png";
import arrowLeft from "../assets/leftarrow.png";

export const Products = () => {
    const { category } = useParams();
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const PRODUCT_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(1)
    const [sortType, setSortType] = useState("relevant");


    useEffect(() => {
        axios.get(`http://localhost:5000/products/${category}`)
            .then((response) => {
                const data = response.data;
                if (sortType === 'highest') {
                    data.sort((a, b) => b.price - a.price);
                } else if (sortType === 'lowest') {
                    data.sort((a, b) => a.price - b.price);
                }
                const paginated = chunk(data, PRODUCT_PER_PAGE);
                setPaginatedProducts(paginated);
                setCurrentPage(1);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category, sortType]);
    const changePage = (number) => {
        setCurrentPage(number)
        window.scrollTo(0, 0);
    }
    const handleSortChange = (e) => {
        setSortType(e.target.value);
    };
    return (
        <>
            <Header/>
            <div className={classes['main-div']}>
                <div className={classes['main-container']}>
                    <select onChange={handleSortChange} className={classes['sort-dropdown']}>
                        <option value="relevant">By relevant</option>
                        <option value="highest">Highest Price</option>
                        <option value="lowest">Lowest Price</option>
                    </select>
                    <div className={classes['product-wrapper']}>
                        {(paginatedProducts[currentPage - 1] || []).map((item, index) => (
                            <ProductCard item={item} key={index}/>
                        ))}
                    </div>
                    <div className={classes['pagination-container']}>
                        <button className={classes['arrow-button']}><img src={arrowLeft} alt="Previous"/></button>
                        {paginatedProducts.map((_, index) => (
                            <button key={index} onClick={() => changePage(index + 1)}
                                    className={classes['page-button']}>
                                {index + 1}
                            </button>
                        ))}

                        <button className={classes['arrow-button']}><img src={arrowRight} alt="Next"/></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};