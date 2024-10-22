import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/cart/cartslice'
import getReducer from '../redux/getdetails/getslice'

export const reduxstore=configureStore({
    reducer:{
        cartData:cartReducer,
        getdata:getReducer,
    }
})