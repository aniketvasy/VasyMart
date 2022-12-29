import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-Slice";
import uiSlice from "./ui-slice";

const store = configureStore({

    reducer : {
        cart : cartSlice.reducer,
        ui : uiSlice.reducer
    }
}
)

export default store