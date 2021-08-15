import { createSlice } from '@reduxjs/toolkit'
import { AddCart, UpdateCart, RemoveCart, Checkout } from '../service'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    cart: { 1: [1, 25] },
    loading: false,
    error: null,
  },
  extraReducers: {
    [AddCart.fulfilled]: (state, action) => {
      state.cart[action.payload.id][0] = 1
    },
    [AddCart.rejected]: (state, action) => {},
    [UpdateCart.fulfilled]: (state, action) => {
      state.cart[action.payload.id][0] = state.action.payload.qty
    },
  },
})

export default postSlice.reducer
