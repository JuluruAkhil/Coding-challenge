import { createSlice } from '@reduxjs/toolkit'
import {
  GetCart,
  AddCart,
  UpdateCart,
  RemoveCart,
  Checkout,
  RemoveItemFromCart,
} from '../service'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
  },
  extraReducers: {
    [GetCart.fulfilled]: (state, action) => {
      state.cart = action.payload
    },
    [GetCart.rejected]: (state, action) => {},
    [AddCart.fulfilled]: (state, action) => {
      state.cart = action.payload
    },
    [AddCart.rejected]: (state, action) => {},
    [UpdateCart.fulfilled]: (state, action) => {
      state.cart = action.payload
    },
    [UpdateCart.rejected]: (state, action) => {},
    [RemoveItemFromCart.fulfilled]: (state, action) => {
      state.cart = action.payload
    },
    [RemoveItemFromCart.rejected]: (state, action) => {},
    [RemoveCart.fulfilled]: (state, action) => {
      delete state.cart[action.payload.id]
    },
    [RemoveCart.rejected]: (state, action) => {},
    [Checkout.fulfilled]: (state, action) => {
      state.cart = []
    },
    [Checkout.rejected]: (state, action) => {},
  },
})

export default cartSlice.reducer
