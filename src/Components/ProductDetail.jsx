import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const singleProduct = useLoaderData()
    const {id, title} = singleProduct;
  return (
    <>
      <h1>{id}</h1>
      <h1>{title}</h1>
    </>
  )
}

export default ProductDetail
