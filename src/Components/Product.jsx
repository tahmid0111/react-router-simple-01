import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const {id, title, price, description} = props.product
  return (
    <>
      <h3>{id}</h3>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <Link to={`/product/${id}`}>show details</Link>
    </>
  )
}

export default Product
