import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice= createSlice({
    name:'cart',
    initialState:{
         items:[],
         cartQuantity:0
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload)
            state.cartQuantity=state.cartQuantity+1
            
        },
        removeToCart:(state,action)=>{
          const nextItems =  state.items.filter((item)=>(item.id!==action.payload.id))
          state.items=nextItems
          state.cartQuantity=state.cartQuantity-1
            
        }

    }
})

export const{addToCart,removeToCart} = cartSlice.actions
export default cartSlice.reducer