import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
    shippingDetails: {
        shippingType: 'free',
        deliveryDate: '',
        price: 0
    },
});

const shippingSlice = createSlice({
    name: 'shipping',
    initialState,
    reducers: {
        setShippingDetails: (state, action) => {
            state.shippingDetails = action.payload;
        }
    }
});

export const { setShippingDetails } = shippingSlice.actions;
export default shippingSlice.reducer;
