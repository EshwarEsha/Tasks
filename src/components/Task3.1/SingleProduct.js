import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'
import HomePage from './HomePage'


const SingleProduct = () => {

    const [data, setData] = useState([])
    const [img, setImage] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products/1")
        .then((response)=> response.json())
        .then((data)=> {
            setData(data)
        })
        
const images = data.images || []

        
for(let i=0; i<images.length; i++){
     img.push(images[i])
}

    }, [])

    console.log("SingleProducts", data)
    console.log(img)
  return (
    <div style={{position:'relative', left:'20%', top:'-830px', backgroundColor:'rgb(63,139,204)', height:'100vh', }}>

      <div style={{marginLeft:'20px'}}>
        <p>title: {data.title}</p>
        <p>id: {data.id}</p>
        <p>brand: {data.brand}</p>
        <p>category: {data.category}</p>
        <p>description: {data.description}</p>
        <p>discountPercentage: {data.discountPercentage}</p>
        <p>price: {data.price}</p>
        <p>rating: {data.rating}</p>
        <p>stock: {data.stock}</p>
        <p>thumbnail: {data.thumbnail}</p>

        <div style={{display:'flex', flexDirection:'column'}}>
           <p>images: </p>
               {img.map((item, index)=>(
                 <p key={index} style={{display:'flex', flexDirection:'column'}}>{item}</p>
                ))}
        </div>

        {/* <div>
           <HomePage/>
        </div> */}

        <h3>Remaining Products</h3>
        
        </div>
    </div>

    
  )
}

export default SingleProduct