import { Outlet, useNavigate } from 'react-router-dom'
import { setCredentials } from './store/slices/auth'
import { useAppDispatch } from './hooks';
import { Auth } from './types';
import { Layout } from './layouts/Layout';
import { NextUIProvider } from '@nextui-org/react';

export const App = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loadAuthState = () => {
    const storedAuthState = localStorage.getItem('authState');
    if (storedAuthState) {
      const parsedAuthState = JSON.parse(storedAuthState) as Auth
      dispatch(setCredentials(parsedAuthState))
    }
  };

  loadAuthState();

  return (
    <NextUIProvider navigate={navigate}>
      <Layout>
        <Outlet />
      </Layout>
    </NextUIProvider>
  )
}

export default App
