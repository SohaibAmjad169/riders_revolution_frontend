import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null, // Holds user details
  isLoggedIn: false, // Tracks login status
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
