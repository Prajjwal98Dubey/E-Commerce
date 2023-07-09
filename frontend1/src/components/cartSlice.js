import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    cartQuantity: 0,
    cartAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1
            }
            else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.items.push(tempProduct)

                state.cartQuantity = state.cartQuantity + 1
            }

        },
        removeToCart: (state, action) => {
            const nextItems = state.items.filter((item) => (item.id !== action.payload.id))
            state.items = nextItems
            state.cartQuantity = state.cartQuantity - 1

        },
        decreasedCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1
            }
            else if (state.items[itemIndex].quantity === 1) {
                const nextItems = state.items.filter((item) => (item.id !== action.payload.id))
                state.items = nextItems

            }

        },
        getTotals: (state, action) => {
            let { total } = state.items.reduce(
                (cartTotal, item) => {
                    const { price, quantity } = item
                    const itemTotal = (price*81)* quantity
                    cartTotal.total += itemTotal
                    return cartTotal
                },
                {
                    total: 0
                })
                state.cartAmount=total
            
        },
        clearCart: (state) => {
            state.items = []
            state.cartQuantity = 0
        }

    }
})

export const { addToCart, removeToCart, addProductQuantity, clearCart, decreasedCart ,getTotals } = cartSlice.actions
export default cartSlice.reducer