import classes from '../modules/Product.module.scss'
import arrow from '../assets/arrow.svg'
import checkboxIcon from '../assets/checkbox-icon.svg'
import arrowDown from '../assets/arrow-down.svg'
import like from '../assets/like.svg'
import arrowLeft from '../assets/left-arrow.svg'
import arrowRight from '../assets/right-arrow.svg'
import { Link } from 'react-router'
import { useState, useEffect } from "react"
import axios from 'axios'
import chunk from 'lodash.chunk'

const Product = () => {
    const [smartphones, setSmartphones] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        axios.get('http://localhost:5000/products/smartphones')
            .then(function (response) {
                setSmartphones(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const likeButtonHandler = (item) => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || []
        likedItems.push(item)
        localStorage.setItem('likedItems', JSON.stringify(likedItems))
    }

    const pageHandler = (number) => {
        setCurrentPage(number)
    }

    const chunkedSmartphones = chunk(smartphones, Math.ceil(smartphones.length / 3))

    return (
        <div className={classes['main-div']}>
            <nav className={classes['breadcrumb']}>
                <Link to={"/"}>Home</Link>
                <img src={arrow} alt={"Arrow icon"} />
                <Link to={"/"}>Catalog</Link>
                <img src={arrow} alt={"Arrow icon"} />
                <Link to={"/product"} className={classes['active']}>Smartphones</Link>
            </nav>
            <div className={classes['main-container']}>
                <div className={classes['filter-wrapper']}>
                    <figure className={classes['brand-holder']}>
                        <h1>Brand</h1>
                    </figure>
                    <figure className={classes['option-holder']}>
                        <img src={checkboxIcon} alt={"Checkbox icon"} />
                        <h1>Apple</h1>
                    </figure>
                </div>
                <div className={classes['product-wrapper']}>
                    <figure className={classes['top-part']}>
                        <div className={classes['header-container']}>
                            <h1>Selected Products: <span>{smartphones.length}</span></h1>
                        </div>
                        <div className={classes['dropdown-container']}>
                            <h1>By rating</h1>
                            <img src={arrowDown} alt={"Arrow down icon"} />
                        </div>
                    </figure>
                    <div className={classes['item-container']}>
                        {chunkedSmartphones[currentPage - 1]?.map((item, index) => (
                            <div key={index} className={classes['item']}>
                                <button onClick={() => likeButtonHandler(item)} className={classes['like-button']}>
                                    <img className={classes['like-img']} src={like} alt="Like icon" />
                                </button>
                                <img src={`http://localhost:5000/${item.picture}`} alt={"Phone image"} />
                                <h1>{item.name}</h1>
                                <p>{item.finalPrice}</p>
                                <button className={classes['buy-button']}><span>Buy now</span></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes['pagination-container']}>
                <button className={classes['arrow-button']}><img src={arrowLeft} alt="Previous" /></button>
                <button onClick={() => pageHandler(1)} className={currentPage === 1 ? classes['active-button'] : classes['page-button']}>1</button>
                <button onClick={() => pageHandler(2)} className={currentPage === 2 ? classes['active-button'] : classes['page-button']}>2</button>
                <button onClick={() => pageHandler(3)} className={currentPage === 3 ? classes['active-button'] : classes['page-button']}>3</button>
                <button className={classes['arrow-button']}><img src={arrowRight} alt="Next" /></button>
            </div>
        </div>
    )
}

export default Product
