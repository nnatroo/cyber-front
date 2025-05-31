import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer, { rehydrate } from './wishlistSlice';

export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
    },
});
const loadWishlistFromStorage = () => {
    try {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            const parsedWishlist = JSON.parse(savedWishlist);
            store.dispatch(rehydrate(parsedWishlist));
        }
    } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
    }
};
store.subscribe(() => {
    const state = store.getState();
    try {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist.wishlistItems));
    } catch (error) {
        console.error('Error saving wishlist to localStorage:', error);
    }
});


loadWishlistFromStorage();