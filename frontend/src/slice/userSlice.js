import { createSlice } from '@reduxjs/toolkit'
import { LoginUser } from '../service'

function getUserFromLocalStorage() {
  if (localStorage.getItem('user') !== null) {
    return JSON.parse(localStorage.getItem('user'))
  }

  return {
    id: null,
    name: null,
    email: null,
    balance: 0,
    score: 0,
  }
}

export const userSlice = createSlice({
  name: 'login',
  initialState: getUserFromLocalStorage(),
  reducers: {
    logout: (state) => {
      state.id = null
      state.name = null
      state.email = null
      state.balance = 0
      state.score = 0
      localStorage.removeItem('user')
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.balance = action.payload.balance
      state.email = action.payload.email
      state.score = action.payload.score
      if (state !== {}) {
        localStorage.setItem('user', JSON.stringify({ ...state }))
      }
    },
    [LoginUser.rejected]: (state, action) => {},
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
