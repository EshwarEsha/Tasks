import React, { useEffect, useState } from 'react'

//component
import ProductCard from './components/ProductCard'

const Products = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data.products)
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  console.log(data)
  return (
    <div
      style={{
        display: 'flex',
        overflow: 'auto',
        height: '100%',
      }}
    >
      {error && <>{error}</>}
      {isLoading && <>Fetching products...</>}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {!isLoading &&
          data &&
          data.length > 0 &&
          data.map((item) => <ProductCard data={item} />)}
      </div>
    </div>
  )
}

export default Products

// {!isLoading &&
//   data &&
//   data.length > 0 &&
//   data.map((item) => <ProductCard data={item} />)}

// {!isLoading &&
//   data &&
//   data.length > 0 && [
//     <ProductCard data={data[0]} />,
//     <ProductCard data={data[1]} />,
//     <ProductCard data={data[2]} />,
//   ]}
