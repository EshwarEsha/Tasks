import React, {useState, useEffect} from "react";

import Individual_Products from "./Individual_Products";
import { hover } from "@testing-library/user-event/dist/hover";


const Task3 = () => {

    const [data, setData] = useState()


useEffect(()=>{

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{
        setData(data)
    })
    .catch((err)=>{
        console.log("error", err)
    })

   }, [])

    const product = data
    console.log("products",product)


  return (
    <div style={{backgroundColor:'rgb(227,233,247)', width:'100%'}}>
        <center><h2 style={{backgroundColor:'burlywood'}}>PRODUCTS</h2></center>

      <div style={{display:'flex',}}>
        <nav style={{ backgroundColor: "rgb(17,17,29)", width: "150px" , marginTop:'-20px', color:'white', display:'flex', flexDirection:'column', gap:'5px'}}>
          <span style={{marginLeft:'35px', marginTop:'5px', hover:{backgroundColor:'green'}}}>Products</span>
          <span style={{marginLeft:'35px'}}>Cart</span>
        </nav>

       <div>
          <Individual_Products data={product?.products || []}/>
       </div>
      </div>

    </div>
  );
};

export default Task3;
