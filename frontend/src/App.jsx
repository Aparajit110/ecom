

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/Login.jsx'
import Products from './Pages/Products.jsx'
import SearchPage from './Pages/SearchPage.jsx'
import Cart from './Pages/Cart.jsx'
import { useState } from 'react'



function App() {

  const [OpenCart, setOpenCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
 

  return (
    <>
    <NavBar openCart={()=>setOpenCart(true)}/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/phones' element={<Products/>}/>
      <Route path='/search' element={<SearchPage   cartItems={cartItems} setCartItems={setCartItems}/>}/>
        
    </Routes>
    {OpenCart && (<Cart closeCart={()=>setOpenCart(false)} cartItems={cartItems}/>)}
    <Footer/>
    </>
  )
  
}

export default App
