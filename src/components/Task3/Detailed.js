import React,{useEffect, useState} from 'react'

const Detailed = () => {
         
    const [singleData, setSingleData] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products/1")
        .then((response)=>response.json())
        .then((data)=> {
            setSingleData(data)
        })
        .catch((err)=> {
            console.log("error", err)
        })


    }, [])
console.log("single", singleData)

  return (
    <div>
       <p>{singleData.id}</p> 
       <p>{singleData.title}</p>
       <p>{singleData.description}</p>
       <p>{singleData.price}</p>
       <p>{singleData.discountPercentage}</p>
       <p>{singleData.rating}</p>
    
    </div>
  )
}

export default Detailed