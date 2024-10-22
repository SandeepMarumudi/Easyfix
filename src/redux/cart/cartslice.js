import { createSlice } from "@reduxjs/toolkit";





export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            return {...state,cart:[...state.cart,action.payload]}
        },
        removeAllfromCart:(state)=>{
             return {...state,cart:[]}
        },
        removeSinglefromCart:(state,action)=>{
            const targetId=action.payload
            const filteredId=state.cart.filter(each=>each.id!==targetId)
            return{ ...state,cart:filteredId}
        }
    }
})
export default cartSlice.reducer
export const {addToCart,removeSinglefromCart, removeAllfromCart}=cartSlice.actions