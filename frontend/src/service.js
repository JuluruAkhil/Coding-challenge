import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'http://localhost:5050'

export const AddCart = createAsyncThunk(
  'cart/AddCart',
  async (emojiData) =>
    await await (
      await axios.post(`${BASE_URL}/cart`, emojiData)
    ).data
)

export const UpdateCart = createAsyncThunk(
  'cart/UpdateCart',
  async (emojiData) =>
    await await (
      await axios.put(`${BASE_URL}/cart`, emojiData)
    ).data
)

export const RemoveCart = createAsyncThunk(
  'cart/RemoveCart',
  async (emojiData) =>
    await await (
      await axios.delete(`${BASE_URL}/cart`, emojiData)
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
      await axios.post(`${BASE_URL}/login`, user)
    ).data
)
