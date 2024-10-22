// import { createSlice } from "@reduxjs/toolkit";





// export const favouriteSlice=createSlice({
//     name:"favourite",
//     initialState:{
//         favourite:[],
//     },
//     reducers:{
//         addToFavourite:(state,action)=>{
//             return {...state,favourite:action.payload}
//         },
//         removeAllFavourites:(state,action)=>{
//            return {...state,favourite:[...state.favourite,action.payload]}
//         },
//         removeSingleFavourite:(state,action)=>{
//             const targetId=action.payload
//             const filterData=state.favourite.filter(each=>each.id!==targetId)
//             return {...state,cart:filterData}
//         }
//     }


// })
// export default favouriteSlice.reducer
// export const {addToFavourite,removeSingleFavourite,removeAllFavourites}= favouriteSlice.actions