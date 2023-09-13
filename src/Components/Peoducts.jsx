import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from './Product';

const Peoducts = () => {
    const products = useLoaderData();
  return (
    <>
      <h1>This is product page</h1>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }
    </>
  )
}

export default Peoducts
