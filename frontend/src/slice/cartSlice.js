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
    cart: [
      {
        id: 1,
        product: {
          id: 2,
          name: 'Cool Cool Cool',
          description:
            'Just like Jake Peralta\nyou are a cool cool cool\ncoool geek and there is no doubt\nno doubt no doubt about it. Let everyone know\nthat you are a cool geek',
          price: 5.0,
          image:
            'https://cdn3.vectorstock.com/i/thumb-large/42/77/cool-geek-logo-template-vector-2104277.jpg',
        },
        customer: {
          id: 2,
          name: 'Akhil',
          balance: 1000.0,
        },
        quantity: 1,
        subtotal: 5.0,
      },
    ],
    loading: false,
  },
  extraReducers: {
    [GetCart.fulfilled]: (state, action) => {
      state.cart = action.payload
    },
    [GetCart.rejected]: (state, action) => {},
    [AddCart.fulfilled]: (state, action) => {},
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
      state.cart = {}
    },
    [Checkout.rejected]: (state, action) => {},
  },
})

export default cartSlice.reducer
