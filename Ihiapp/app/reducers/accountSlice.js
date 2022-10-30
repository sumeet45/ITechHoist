import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    loggedIn: false
  },
  reducers: {
    updateLogIn: (state, action) => {
      state.loggedIn = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateLogIn } = accountSlice.actions

export default accountSlice.reducer