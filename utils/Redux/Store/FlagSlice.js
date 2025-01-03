import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const FlagSlice = createSlice({
  name: 'Flag',
  initialState,
  reducers: {
    ToggleFlag: (state) => !state,
  },
})

export const { ToggleFlag } = FlagSlice.actions
export default FlagSlice.reducer
