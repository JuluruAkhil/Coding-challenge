import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'http://localhost:8081'

export const GetCart = createAsyncThunk(
  'cart/GetCart',
  async (id) =>
    await await (
      await axios.get(`${BASE_URL}/dbkudos/cart/${id}`)
    ).data
)

export const AddCart = createAsyncThunk(
  'cart/AddCart',
  async (emojiAddData) => {
    let data = await await (
      await axios.post(`${BASE_URL}/dbkudos/cart/add`, emojiAddData[0])
    ).data

    data = await await (
      await axios.get(`${BASE_URL}/dbkudos/cart/${emojiAddData[1]}`)
    ).data

    return data
  }
)

export const UpdateCart = createAsyncThunk(
  'cart/UpdateCart',
  async (emojiUpdateData) => {
    let data = await await (
      await axios.post(
        `${BASE_URL}/dbkudos/cart/update/${emojiUpdateData.customer_id}/${emojiUpdateData.product_id}/${emojiUpdateData.quantity}`
      )
    ).data

    data = await await (
      await axios.get(`${BASE_URL}/dbkudos/cart/${emojiUpdateData.customer_id}`)
    ).data

    return data
  }
)

export const RemoveItemFromCart = createAsyncThunk(
  'cart/RemoveItemFromCart',
  async (emojiRemoveItemData) => {
    let data = await await (
      await axios.post(
        `${BASE_URL}/dbkudos/cart/remove/${emojiRemoveItemData.customer_id}/${emojiRemoveItemData.product_id}`
      )
    ).data

    data = await await (
      await axios.get(
        `${BASE_URL}/dbkudos/cart/${emojiRemoveItemData.customer_id}`
      )
    ).data

    return data
  }
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
  async (id) =>
    await await (
      await axios.post(`${BASE_URL}/dbkudos/checkout/${id}`)
    ).data
)

export const LoginUser = createAsyncThunk(
  'login',
  async (user) =>
    await await await (
      await axios.get(`${BASE_URL}/dbkudos/login/${user.email}`)
    ).data
)

export const GetEmojis = createAsyncThunk(
  'emojis',

  async () => await await (await axios.get(`${BASE_URL}/dbkudos/products`)).data
)

export const GetOrders = createAsyncThunk('orders', async (userId) => {
  let order = await await (
    await axios.get(`${BASE_URL}/dbkudos/orders/${userId}`)
  ).data

  let emojis = await await (
    await axios.get(`${BASE_URL}/dbkudos/products`)
  ).data

  return [order, emojis]
})
