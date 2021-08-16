import { createSlice } from '@reduxjs/toolkit'
import { LoginUser } from '../service'

function getUserFromLocalStorage() {
  if (localStorage.getItem('user') !== null) {
    return JSON.parse(localStorage.getItem('user'))
  }

  return {
    id: null,
    name: null,
    balance: 100,
  }
}

export const userSlice = createSlice({
  name: 'login',
  initialState: getUserFromLocalStorage(),
  reducers: {
    logout: (state) => {
      state.id = null
      state.name = null
      state.balance = 0
      localStorage.removeItem('user')
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.id = action.payload.id
      state.name = action.payload.name
      state.balance = action.payload.balance
      localStorage.setItem('user', JSON.stringify({ ...state }))
    },
    [LoginUser.rejected]: (state, action) => {},
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
