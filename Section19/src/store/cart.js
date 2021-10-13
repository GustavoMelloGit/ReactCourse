import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
    title: '',
    quantity: 1,
    total: 0,
    price: 0
}
const initialState = { cartOpen: false, items: [defaultValue] }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart(state) {
            state.cartOpen = !state.cartOpen
        },
        addToCart(state, action) {
            state.items.push(action.payload)
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;