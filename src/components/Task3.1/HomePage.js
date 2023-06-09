import React, { useEffect, useState } from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((response)=> response.json())
        .then((data)=> {
            setData(data)
        })


    }, [])

    console.log(data)
  return (
    <div style={{position:'relative', left:'20%', top:'-830px', backgroundColor:'rgb(63,139,204)', height:'100vh', }}>
        <Products data={data?.products || []}/>
        
    </div>
  )
}

export default HomePage