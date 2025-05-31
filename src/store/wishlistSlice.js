import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistItems: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const exists = state.wishlistItems.some(item => item.name === action.payload.name);
            if (!exists) {
                state.wishlistItems.push(action.payload);
            }
        },
        removeFromWishlist(state, action) {
            state.wishlistItems = state.wishlistItems.filter(i => i.id !== action.payload);
        },
        clearWishlist(state) {
            state.wishlistItems = [];
        },

        rehydrate(state, action) {
            state.wishlistItems = action.payload || [];
        }
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, rehydrate } = wishlistSlice.actions;
export default wishlistSlice.reducer;