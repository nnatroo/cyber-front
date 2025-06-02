import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import classes from '../modules/Wishlist.module.scss';
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('wishlist');
        if (stored) {
            setWishlist(JSON.parse(stored));
        }
    }, []);
    const deleteFromWishlist = (productId) => {
        const index = wishlist.findIndex(product => product.id === productId);
        if (index !== -1) {
            const updatedWishlist = [
                ...wishlist.slice(0, index),
                ...wishlist.slice(index + 1)
            ];
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        }
    }
    return (
        <>
            <Header/>
            <div className={classes.container}>
                <h1 className={classes.title}>Wishlist</h1>
                {wishlist.length === 0 ? (
                    <p className={classes.empty}>Your wishlist is empty.</p>
                ) : (
                    <div className={classes.products}>
                        {wishlist.map(product => (
                            <div key={product.id} className={classes.productRow}>
                                <Link to={`/products/${product.category}/${product.id}`} className={classes.productLink}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={classes.productImage}
                                       
                                        
                                    />
                                    <div className={classes.productName}>{product.name}</div>
                                </Link>
                                <button onClick={() => deleteFromWishlist(product.id)}>
                                    Delete
                                </button>
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