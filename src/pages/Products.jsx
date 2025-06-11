import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import classes from "../modules/Products.module.scss";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import chunk from 'lodash.chunk'
import arrowRight from "../assets/rightarrow.png";
import arrowLeft from "../assets/leftarrow.png";
import {Product} from "../components/Product.jsx";
import arrowDown from "../assets/arrow-down.svg";

export const Products = () => {
    const {category} = useParams();
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const PRODUCT_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(1)
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("By relevant");
    const [sortType, setSortType] = useState("relevant");
    const options = ["By relevant", "Highest Price", "Lowest Price"];
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${category}`)
            .then((response) => {
                const data = response.data;
                setLoading(false);
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
    const handleSelect = (option) => {
        setSelected(option);
        const sort = option.toLowerCase().includes("highest")
            ? "highest"
            : option.toLowerCase().includes("lowest")
                ? "lowest"
                : "relevant";
        setSortType(sort);
        setOpen(false);
    };
    const renderPagination = () => {
        const pages = [];
        const totalPages = paginatedProducts.length;

        const addButton = (page) => {
            pages.push(
                <button key={page} onClick={() => changePage(page)} className={`${classes['page-button']} ${currentPage === page ? classes['active-page'] : ''}`}>{page}</button>
            );
        };

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) addButton(i);
        } else {
            addButton(1);
            if (currentPage > 4) {
                pages.push(<span key="start-ellipsis" className={classes['ellipsis']}>...</span>);
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) addButton(i);

            if (currentPage < totalPages - 3) {
                pages.push(<span key="end-ellipsis" className={classes['ellipsis']}>...</span>);
            }

            addButton(totalPages);
        }

        return pages;
    };
    return (
        <>
            <Header/>
            {Loading ? (<div className={classes['main-div']}>
                    <div className={classes['main-container']}>
                            <h2 className={classes["loading"]}>Loading ...</h2>
                    </div>
                </div>)
                : (
                    <div className={classes['main-div']}>
                        <div className={classes['main-container']}>
                            <div className={classes['filter-container']}>
                                <div className={classes['sort-container']} onClick={() => setOpen(!open)}>
                                    <div className={classes['sort-btn-wrapper']}>
                                        <button onClick={() => setOpen(!open)} className={classes['sort-button']}>
                                            {selected}
                                        </button>
                                        <img src={arrowDown} alt={"arrow"}/>
                                    </div>
                                    {open && (
                                        <div className={classes['options-container']}>
                                            {options.map((option, index) => (
                                                <button key={index} onClick={() => handleSelect(option)}
                                                        className={classes['option-button']}>{option}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={classes['product-wrapper']}>
                                {(paginatedProducts[currentPage - 1] || []).map((product, index) => (
                                    <Product product={product} key={index}/>
                                ))}
                            </div>
                            <div className={classes['pagination-container']}>
                                <button className={classes['arrow-button']} onClick={() => {
                                    if (currentPage > 1) changePage(currentPage - 1);
                                }}>
                                    <img src={arrowLeft} alt="Previous"/>
                                </button>

                                {renderPagination()}

                                <button className={classes['arrow-button']} onClick={() => {
                                    if (currentPage < paginatedProducts.length) changePage(currentPage + 1);
                                }}>
                                    <img src={arrowRight} alt="Next"/>
                                </button>
                            </div>
                        </div>
                    </div>)}
            <Footer/>
        </>
    );
};
