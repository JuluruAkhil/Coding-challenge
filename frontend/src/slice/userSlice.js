import { createSlice } from '@reduxjs/toolkit'
import { LoginUser } from '../service'

export const userSlice = createSlice({
  name: 'login',
  initialState: {
    id: 2,
    name: 'Akhil',
    balance: 1000,
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
