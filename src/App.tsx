import { Outlet } from 'react-router-dom'
import { setCredentials } from './store/slices/auth'
import { useAppDispatch } from './hooks';
import { Auth } from './types';

export const App = () => {

  const dispatch = useAppDispatch()

  const loadAuthState = () => {
    const storedAuthState = localStorage.getItem('authState');
    if (storedAuthState) {
      const parsedAuthState = JSON.parse(storedAuthState) as Auth
      dispatch(setCredentials(parsedAuthState))
    }
  };

  loadAuthState();

  return (
    <main className='container mx-auto'>
      <Outlet />
    </main>
  )
}

export default App
