import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import classes from "../modules/Products.module.scss";
import {useState, useEffect} from "react";
import {Link} from "react-router";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
    const stored=localStorage.getItem('wishlist');
    if(stored){
        setWishlist(JSON.parse(stored));
    }
    }, []);
    return (
        <>
            <Header/>
            <div className={classes.container}>
                <h1 className={classes.title}>Wishlist</h1>
                {wishlist.length === 0 ? (
                    <p className={classes.empty}>Empty</p>
                ) : (
                    <div className={classes.products}>
                        {wishlist.map(product => (
                            <div key={product.id} className={classes.productCard}>
                                <Link to={`/products/${product.category}/${product.id}`}>
                                    <img src={product.image} alt={{product.category} className={classes.productImage}}></img>
                                    <div className={classes.productName}>{product.name}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>

        </>
    )
};

export default Wishlist
