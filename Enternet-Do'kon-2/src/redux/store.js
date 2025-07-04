import { configureStore } from "@reduxjs/toolkit";
import cartSlider from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlider.reducer
    },
});


