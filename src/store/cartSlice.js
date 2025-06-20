import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            state.cartItems.push({...item, quantity: 1});
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
                }
            }
        },

    },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
