import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../feature/storeSlice"
export const store= configureStore({
    reducer:{
        auth:authSliceReducer
    }
})