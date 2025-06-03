import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import shippingReducer from "./shippingSlice.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        shipping: shippingReducer
    },
});