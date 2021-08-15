import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import userReducer from './slice/userSlice'
import emojisReducer from './slice/emojisSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    emojis: emojisReducer,
  },
})
