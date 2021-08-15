import { createSlice } from '@reduxjs/toolkit'
import { AddCart, UpdateCart, RemoveCart, Checkout } from '../service'

export const postSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: { 1: [1, 25] },
    loading: false,
  },
  extraReducers: {
    [AddCart.fulfilled]: (state, action) => {
      state.cart[action.payload.id] = [1, action.payload.price]
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

export default postSlice.reducer
