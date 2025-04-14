import classes from '../modules/Product.module.scss'
import arrow from '../assets/arrow.svg'
import checkboxIcon from '../assets/checkbox-icon.svg'
import arrowDown from '../assets/arrow-down.svg'
import like from '../assets/like.svg'
import arrowLeft from '../assets/left-arrow.svg'
import arrowRight from '../assets/right-arrow.svg'
import {Link} from 'react-router'
import {useState, useEffect} from "react";
import axios from 'axios'

const Product = () => {
    const [smartphones, setSmartphones] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products/smartphones')
            .then(function (response) {
                setSmartphones(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const likeButtonHandler = (item) => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        likedItems.push(item);
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }

    return (
        <div className={classes['main-div']}>
            <nav className={classes['breadcrumb']}>
                <Link to={"/"}>Home</Link>
                <img src={arrow} alt={"Arrow icon"}/>
                <Link to={"/"}>Catalog</Link>
                <img src={arrow} alt={"Arrow icon"}/>
                <Link to={"/product"} className={classes['active']}>Smartphones</Link>
            </nav>
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
                            <h1>Selected Products: <span>85</span></h1>
                        </div>
                        <div className={classes['dropdown-container']}>
                            <h1>By rating</h1>
                            <img src={arrowDown} alt={"Arrow down icon"}/>
                        </div>
                    </figure>
                    <div className={classes['item-container']}>
                        {smartphones.map((item, index) => (
                            <div key={index} className={classes['item']}>
                                <button onClick={() => likeButtonHandler(item)} className={classes['like-button']}><img className={classes['like-img']}
                                                                                src={like}/>
                                </button>
                                <img src={`http://localhost:5000/${item.picture}`} alt={"Phone image"}/>
                                <h1>{item.name}</h1>
                                <p>{item.finalPrice}</p>
                                <button className={classes['buy-button']}><span>Buy now</span></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes['pagination-container']}>
                <button className={classes['arrow-button']}><img src={arrowLeft}/></button>
                <button className={classes['active-button']}>1</button>
                <button className={classes['page-button']}>2</button>
                <button className={classes['page-button']}>3</button>
                <button className={classes['arrow-button']}><img src={arrowRight}/></button>
            </div>
        </div>
    )
}

export default Product