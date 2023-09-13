import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ActiveLink from './Components/ActiveLink'


function App() {

  return (
    <>
      <h1>This is Home Page</h1>
      <ActiveLink to='/'>Home</ActiveLink>
      <ActiveLink to='/about'>About</ActiveLink>
      <ActiveLink to='/products'>Products</ActiveLink>
      <Outlet />
    </>
  )
}

export default App
