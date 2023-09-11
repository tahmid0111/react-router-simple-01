import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Peoducts = () => {
    const products = useLoaderData();
  return (
    <>
      <h1>This is product page</h1>
      <h1>{products.length}</h1>
    </>
  )
}

export default Peoducts
