import classes from '../modules/Product.module.scss'
import arrow from '../assets/arrow.svg'
import checkboxIcon from '../assets/checkbox-icon.svg'
import arrowDown from '../assets/arrow-down.svg'
import {Link} from 'react-router'

const Product = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Product