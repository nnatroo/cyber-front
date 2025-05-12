import classes from '../modules/Product.module.scss'
import checkboxIcon from '../assets/checkbox-icon.svg'
import arrowDown from '../assets/arrow-down.svg'
import arrowLeft from '../assets/left-arrow.svg'
import arrowRight from '../assets/right-arrow.svg'
import {useEffect, useState} from "react"
import axios from 'axios'
import chunk from 'lodash.chunk'
import Header from "../components/Header.jsx";
import {ProductCard} from "../components/ProductCard.jsx";

const Products = () => {
    const PRODUCT_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1)
    const [chunkedProducts, setChunkedProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products/smartphones')
            .then(function (response) {
                const smartphones = response.data;
                setChunkedProducts(chunk(smartphones, PRODUCT_PER_PAGE))
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const changePage = (number) => {
        setCurrentPage(number)
    }

    return (
        <>
            <Header/>
            <div className={classes['main-div']}>
                <div className={classes['main-container']}>
                    <div className={classes['filter-wrapper']}>
                        <figure className={classes['brand-holder']}>
                            <h1>Brand</h1>
                        </figure>
                        <figure className={classes['option-holder']}>
                            <img src={checkboxIcon} alt={"Checkbox icon"}/>
                            <h1>Apple</h1>
                        </figure>
                    </div>
                    <div className={classes['product-wrapper']}>
                        <figure className={classes['top-part']}>
                            <div className={classes['header-container']}>
                                <h1>Selected Products: <span>{chunkedProducts.length}</span></h1>
                            </div>
                            <div className={classes['dropdown-container']}>
                                <h1>By rating</h1>
                                <img src={arrowDown} alt={"Arrow down icon"}/>
                            </div>
                        </figure>
                        <div className={classes['item-container']}>
                            {chunkedProducts[currentPage - 1]?.map((item, index) => (
                                <ProductCard item={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes['pagination-container']}>
                    <button className={classes['arrow-button']}><img src={arrowLeft} alt="Previous"/></button>
                    {chunkedProducts.map((item, index) => (
                        <button key={index} onClick={() => changePage(index + 1)}
                                className={classes['page-button']}>{index + 1}</button>
                    ))}
                    <button className={classes['arrow-button']}><img src={arrowRight} alt="Next"/></button>
                </div>
            </div>
        </>
    )
}

export default Products
