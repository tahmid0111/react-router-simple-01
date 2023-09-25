import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const {id, title, price, description} = props.product
  return (
    <>
      <div className="single_product p-10 mx-10 my-20 border border-red-900">
        <Link to={`/product/${id}`}>
          <h1 className='text-yellow-600 text-2xl pb-10'>{title}</h1>
        </Link>
        <h4 className='pb-5 text-justify'>{description}</h4>
        <h2>{price} $</h2>
        <Link to={`/product/${id}`} className='text-2xl'>show details</Link>
      </div>
    </>
  )
}

export default Product
