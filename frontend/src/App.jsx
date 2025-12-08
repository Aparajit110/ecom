

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import SignUp from './Pages/SignUp.jsx'


function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </>
  )
  
}

export default App
