import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </>
  )
}

export default App
