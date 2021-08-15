import { createSlice } from '@reduxjs/toolkit'
import { LoginUser } from '../service'

export const postSlice = createSlice({
  name: 'login',
  initialState: {
    userId: null,
    password: null,
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.userId = action.payload.userId
      state.password = action.payload.password
    },
    [LoginUser.rejected]: (state, action) => {
      state.userId = null
      state.password = null
    },
  },
})

export default postSlice.reducer
