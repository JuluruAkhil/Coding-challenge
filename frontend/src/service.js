import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'http://localhost:5050'

export const AddCart = createAsyncThunk(
  'cart/AddCart',
  async (emojiAddData) =>
    await await (
      await axios.post(`${BASE_URL}/dbkudos/cart/add`, emojiAddData)
    ).data
)

export const UpdateCart = createAsyncThunk(
  'cart/UpdateCart',
  async (emojiUpdateData) =>
    await await (
      await axios.put(
        `${BASE_URL}/dbkudos/cart/update/{customer_id}/{product_id}/{quantity}`,
        emojiUpdateData
      )
    ).data
)

export const RemoveCart = createAsyncThunk(
  'cart/RemoveCart',
  async (emojiDeleteData) =>
    await await (
      await axios.delete(
        `${BASE_URL}/dbkudos/cart/remove/{customer_id}/{product_id}`,
        emojiDeleteData
      )
    ).data
)

export const Checkout = createAsyncThunk(
  'cart/Checkout',
  async (CheckoutData) =>
    await await (
      await axios.post(`${BASE_URL}/checkout`, CheckoutData)
    ).data
)

export const LoginUser = createAsyncThunk(
  'login',
  async (user) =>
    await await await (
      await axios.get(`${BASE_URL}/dbkudos/customers/${user.id}`)
    ).data
)

export const GetEmojis = createAsyncThunk('emojis', async () => {
  await await await (
    await axios.post(`${BASE_URL}/dbkudos/products`)
  ).data
})
