import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import userReducer from './slice/userSlice'
import emojisReducer from './slice/emojisSlice'
import ordersSlice from './slice/ordersSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    emojis: emojisReducer,
    orders: ordersSlice,
  },
})
