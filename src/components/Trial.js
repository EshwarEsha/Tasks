import React, {useState, useEffect} from 'react'

const Trial = () => {

   const [data, setData] = useState([])
   const [title, setTitle] = useState([])
   useEffect(()=>{

    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then((data)=> {
     setData(data)
    })
   


    console.log(data.productsData)

   const db = data
   console.log(Array.isArray(db))

   const titleData = []

   for(let i=0; i<db.length; i++){
        titleData.push(db.title)
   }

   setTitle(titleData)
   console.log(title)
   
    }, [])

   
                
   
  return (
    <div>

    </div>
  )
}

export default Trial