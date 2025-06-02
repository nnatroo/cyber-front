import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

export const Wishlist = () => {
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        const fetchWishlistProducts = async () => {
            const wishlistNames = JSON.parse(localStorage.getItem("wishlist")) || [];
            if (wishlistNames.length === 0) return;

            try {
                const response = await axios.get(`http://localhost:5000/products${category}`);
                const filteredProducts = response.data.filter(product =>
                    wishlistNames.includes(product.name)
                );
                setWishlistProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchWishlistProducts();
    }, []);
    const removeFromWishlist = (productName) => {
        const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const updatedWishlist = currentWishlist.filter(name => name !== productName);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlistProducts(prev => prev.filter(product => product.name !== productName));
    };

    return (
        <>
            <Header/>
            <div>
                <h2>My Wishlist ({wishlistProducts.length})</h2>
                {wishlistProducts.length === 0 ? (
                    <p>Your wishlist is empty</p>
                ) : (
                    wishlistProducts.map((product, index) => (
                        <div key={index}>
                            <img src={`http://localhost:5000${product.picture}`} alt={product.name} width="100"/>
                            <h3>{product.name}</h3>
                            <button onClick={() => removeFromWishlist(product.name)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <Footer/>
        </>
    );
};
