import { Outlet } from 'react-router-dom'

export const App = () => {

  return (
    <main className='container mx-auto'>
      <Outlet />
    </main>
  )
}

export default App
