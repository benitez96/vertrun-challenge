import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Auth } from '../../types'


const initialState: Auth = {
  athlete: undefined,
  expires_at: undefined,
  expires_in: undefined,
  refresh_token: undefined,
  token_type: undefined,
  access_token: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState
    },
    setCredentials: (_, action: PayloadAction<Auth>) => action.payload
  },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer


