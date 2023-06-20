import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Streaming from './pages/Streaming'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/' element={<Streaming/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App