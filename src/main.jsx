import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Peoducts from './Components/Peoducts.jsx'
import Product from './Components/Product.jsx'
import ProductDetail from './Components/ProductDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Peoducts />,
        loader: () => fetch('https://fakestoreapi.com/products')
      },
      {
        path: '/product/:productId',
        element: <ProductDetail />,
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.productId}`)
        
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
