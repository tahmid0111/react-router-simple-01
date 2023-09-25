import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ActiveLink from './Components/ActiveLink'


function App() {

  return (
    <>
      <div className='container mx-auto text-center py-20'>
        <h1 className='text-5xl text-red-600'>This is Home Page</h1>
        <nav className='py-10'>
          <ActiveLink to='/'>Home</ActiveLink>
          <ActiveLink to='/about'>About</ActiveLink>
          <ActiveLink to='/products'>Products</ActiveLink>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default App
