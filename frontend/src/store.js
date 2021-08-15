import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import userSlice from './slice/userSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
})
