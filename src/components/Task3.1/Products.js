import React from 'react'
import { Link } from 'react-router-dom'



const Products = (props) => {
    const productsData = props.data
    console.log("productData", productsData)
  
    // const id = []
    const brand = []
    const title = []
    const price = []

    for(let i=0; i<productsData.length; i++){
        // id.push(productsData[i].id)

        brand.push(productsData[i].brand)
        title.push(productsData[i].title)
        price.push(productsData[i].price)
    }
    


   
    
  return (
    <div style={{display:'flex', gap:'20px', marginLeft:'10px'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <h3>Brand</h3>
            {brand.map((item, index)=>(
                <p key={index} style={{ backgroundColor:'rgb(227,233,247)',}}>{item}</p>
            ))}
         </div> 

         <div>
           <h3>Title</h3>
           {title.map((item, index)=>(
                <p key={index} style={{ backgroundColor:'rgb(227,233,247)'}}>{item}</p>
            ))}
         </div>

         <div>
            <h3>Price</h3>
            {price.map((item)=>(
                <p style={{ backgroundColor:'rgb(227,233,247)', display:'flex',  backgroundColor:'red'}}>{item}</p>
            ))}
         </div>
         <Link to='1'>SingleProduct</Link>
         
        

    </div>
    
  )
}

export default Products