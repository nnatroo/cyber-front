import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
    paymentDetails: {
        paymentType: '',
        deliveryDate: '',
    },
});
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setPaymentDetails: (state, action) => {
            state.paymentDetails = action.payload;
        }
    }
});

export const { setPaymentDetails } = paymentSlice.actions;
export default paymentSlice.reducer;
