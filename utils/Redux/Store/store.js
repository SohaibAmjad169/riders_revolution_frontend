import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import { FlagSlice } from './FlagSlice'
import { authSlice } from './LoginSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer
    Flag: FlagSlice.reducer,
    Auth: authSlice.reducer,
  },
})

export default store
