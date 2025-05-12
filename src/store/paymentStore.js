import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from "./paymentSlice.js";

export const paymentStore = configureStore({
    reducer: {
        payment:paymentReducer
    }
});


