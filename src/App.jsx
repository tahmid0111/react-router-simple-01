import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <h1>This is Home Page</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Outlet />
    </>
  )
}

export default App
