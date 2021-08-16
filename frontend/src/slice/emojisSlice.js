import { createSlice } from '@reduxjs/toolkit'
import { GetEmojis } from '../service'

export const emojisSlice = createSlice({
  name: 'emojis',
  initialState: {
    emojis: [
      {
        id: 1,
        name: 'p1',
        description: 'prod1',
        price: 10.0,
      },
      {
        id: 2,
        name: 'p2',
        description: 'prod2',
        price: 10.0,
      },
      {
        id: 3,
        name: 'p3',
        description: 'prod3',
        price: 10.0,
      },
      {
        id: 4,
        name: 'p4',
        description: 'prod4',
        price: 10.0,
      },
      {
        id: 5,
        name: 'p5',
        description: 'prod5',
        price: 10.0,
      },
      {
        id: 6,
        name: 'p6',
        description: 'prod6',
        price: 10.0,
      },
      {
        id: 7,
        name: 'p7',
        description: 'prod7',
        price: 10.0,
      },
      {
        id: 8,
        name: 'p8',
        description: 'prod8',
        price: 10.0,
      },
      {
        id: 9,
        name: 'p9',
        description: 'prod9',
        price: 10.0,
      },
      {
        id: 10,
        name: 'p10',
        description: 'prod10',
        price: 10.0,
      },
    ],
    loading: true,
  },
  extraReducers: {
    [GetEmojis.fulfilled]: (state, action) => {
      state.emojis = action.payload
      state.loading = false
    },
    [GetEmojis.rejected]: (state, action) => {},
  },
})

export default emojisSlice.reducer
