import Test2 from './components/Test2'
import Task2 from './components/Task2'
import Task3 from './components/Task3/Task3';
import Trial from './components/Trial';
import './components/Task3.1/Style.css'

import { Routes, Route, Outlet } from 'react-router-dom';

import Individual_Products from './components/Task3/Individual_Products';
import Detailed from './components/Task3/Detailed';
import HomePage from './components/Task3.1/HomePage';
import SingleProduct from './components/Task3.1/SingleProduct';
import NavBar from './components/Task3.1/NavBar';
import Screen from './components/Task3.1/Screen';
import Layout from './components/Task3.1/Layout';
import Remaining from './components/Task3.1/Remaining';

function App() {
  return (
    // <div className="App">
    //   {/* <Test2/> */}
    //   {/* <Task2></Task2> */}
    //   {/* <Task3/> */}
    //   {/* <Trial/> */}
    // </div>

    // <>
    //    <Routes>
    //       <Route path='/' element={<Task3></Task3>}></Route>
    //       <Route path='/' element={<Individual_Products/>}></Route>
    //       <Route path='/1' element={<Detailed></Detailed>}></Route>
    //    </Routes>
    // </>

    
    // <div>
    //   {/* <HomePage/> */}
    //   <SingleProduct/>
    //   {/* <Layout/> */}
    // </div>

    
    <div>
    <NavBar></NavBar>
    <Routes>
        <Route path="/" element={<Screen/>}></Route>
        <Route path="/products" element={<HomePage/>}></Route>
        <Route path="/products/1" element={<SingleProduct/>}></Route>
       
    </Routes>
    <Outlet/>
    </div>
    



    
  );
}

export default App;
