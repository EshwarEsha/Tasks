import { Routes, Route, Navigate } from 'react-router-dom'

//pages
import Products from './pages/Products/Products'
import SingleProduct from './pages/Products/SingleProduct'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <div>Navbar</div>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/products' replace={true} />}
        ></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
      </Routes>
    </div>
  )
}

export default App
