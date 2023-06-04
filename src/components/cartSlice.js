import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name:'cart',
    initialState:{
         items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload)
        },
        removeToCart:(state)=>{
            state.items.remove()
        }

    }
})

export const{addToCart,removeToCart} = cartSlice.actions
export default cartSlice.reducer