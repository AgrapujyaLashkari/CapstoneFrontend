import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  token: localStorage.getItem('token') || null,
  errorDispatch: null,
  loading: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      state.loading = false
      state.errorDispatch = null
    },
    signInFailure: (state, action) => {
      state.errorDispatch = action.payload
      state.loading = false
    },
    signoutStart: (state) => {
      state.loading = true
    },
    signoutSuccess: (state) => {
      state.currentUser = null
      state.token = null
      localStorage.removeItem('token')
      state.loading = false
      state.errorDispatch = null
    },
    signoutFailure: (state, action) => {
      state.errorDispatch = action.payload
      state.loading = false
    },
  },
})

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  signoutFailure,
  signoutStart,
  signoutSuccess,
} = userSlice.actions

export default userSlice.reducer
