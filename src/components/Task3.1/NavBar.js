import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import Screen from './Screen'
import background from './background.jpg'

import './Style.css'


const NavBar = () => {
  return (
    <div style={{display:'flex', width:'100%'}}>
      <nav style={{backgroundColor:'rgb(132,175,33)', width:'20%', height:'100vh' }}>
          <ul style={{color:'white', fontSize:'20px', marginLeft:'50px'}}>
             <Link to="products"><li>PRODUCTS</li></Link>
             <li>CART</li>
             
          </ul>
      </nav>
        
      {/* <div className='background'>
        <h1>Welcome to product page</h1>
        <h2>Explore Products</h2>
      </div> */}
      
    
    </div>
  )
}

export default NavBar