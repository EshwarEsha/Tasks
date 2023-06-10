import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//component
import ProductCard from './components/ProductCard'

const SingleProduct = () => {
  let { id: productId } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [productId])

  return (
    <div>
      {error && <>{error}</>}
      {isLoading && <>Fetching product with id {productId}</>}
      {!isLoading && data && <ProductCard data={data} />}
    </div>
  )
}

export default SingleProduct
