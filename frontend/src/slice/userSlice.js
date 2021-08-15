import { createSlice } from '@reduxjs/toolkit'
import { LoginUser } from '../service'

export const userSlice = createSlice({
  name: 'login',
  initialState: {
    id: null,
    name: null,
    balance: 100,
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.balance = action.payload.balance
    },
    [LoginUser.rejected]: (state, action) => {},
  },
})

export default userSlice.reducer
