import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { stravaApi } from './services/stravaApi'
import { authSlice } from './slices/auth'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [stravaApi.reducerPath]: stravaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stravaApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

setupListeners(store.dispatch)

store.subscribe(() => {
  const authState = store.getState().auth;
  localStorage.setItem('authState', JSON.stringify(authState));
});
