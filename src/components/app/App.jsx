import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Search from '../search/Search'
import Result from '../result/Result'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Search' element={<Search></Search>}></Route>
      <Route path='/Results' element={<Result></Result>}></Route>
    </Routes>
    </>
  )
}

export default App
