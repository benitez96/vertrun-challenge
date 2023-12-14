import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
type AuthState = {
  client_id: string | undefined
  client_secret: string | undefined
  code: string | undefined
  grant_type: string | undefined
}

// Define the initial state using that type
const initialState: AuthState = {
  client_id:  undefined,
  client_secret:  undefined,
  code: undefined,
  grant_type: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState
    },
    login: (state, action: PayloadAction<AuthState>) => {
      state = action.payload
    }
  },
})

export const { logout, login } = authSlice.actions

export default authSlice.reducer


