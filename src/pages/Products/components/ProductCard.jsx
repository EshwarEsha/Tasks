import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Product.css'

// {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     ]
// }

const ProductCard = (props) => {
  const { data } = props
  const navigate = useNavigate()

  return (
    <div
      className='card_root'
      onClick={() => {
        // navigate to single product page
        navigate(`/products/${data.id}`)
      }}
    >
      <div className='details_container'>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className='details_container_footer'>
          <h3>{data.rating}</h3>
          <h3>{data.price}</h3>
        </div>
      </div>
      <div className='image_container'>
        <img style={{ maxWidth: '100%' }} src={data.thumbnail} />
      </div>
    </div>
  )
}

export default ProductCard
