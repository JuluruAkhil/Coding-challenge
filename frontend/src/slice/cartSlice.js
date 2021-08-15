import { createSlice } from '@reduxjs/toolkit'
import { AddCart, UpdateCart, RemoveCart, Checkout } from '../service'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      { id: 5, name: 'p5', description: 'prod5', price: 10.0, quantity: 7 },
    ],
    loading: false,
  },
  extraReducers: {
    [AddCart.fulfilled]: (state, action) => {
      state.cart.push({
        ...action.payload.product,
        quantity: action.payload.quantity,
      })
    },
    [AddCart.rejected]: (state, action) => {},
    [UpdateCart.fulfilled]: (state, action) => {
      state.cart[action.payload.id][0] = state.action.payload.qty
    },
    [UpdateCart.rejected]: (state, action) => {},
    [RemoveCart.fulfilled]: (state, action) => {
      delete state.cart[action.payload.id]
    },
    [RemoveCart.rejected]: (state, action) => {},
    [Checkout.fulfilled]: (state, action) => {
      state.cart = {}
    },
    [Checkout.rejected]: (state, action) => {},
  },
})

export default cartSlice.reducer
