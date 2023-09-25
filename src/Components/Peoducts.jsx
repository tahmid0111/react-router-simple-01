import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from './Product';

const Peoducts = () => {
    const products = useLoaderData();
  return (
    <>
      <h1 className='text-center text-2xl mb-10'>This is product page</h1>
      <div className='grid grid-cols-3'>
        {
          products.map((product) => {
            return <Product key={product.id} product={product} />
          })
        }
      </div>
    </>
  )
}

export default Peoducts
