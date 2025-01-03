import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bikes: [], // List of items in the cart
  totalProducts: 0, // Total number of products
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { bike, quantity } = action.payload
      const existingBike = state.bikes.find((item) => item._id === bike._id)

      if (existingBike) {
        existingBike.quantity += quantity // Increase quantity if the bike already exists in the cart
      } else {
        state.bikes.push({ ...bike, quantity })
      }

      state.totalProducts = state.bikes.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },
    initializeCart: (state, action) => {
      const cartData = action.payload
      return cartData ? cartData : initialState
    },
  },
})

export const { addToCart, initializeCart } = cartSlice.actions
export default cartSlice.reducer
