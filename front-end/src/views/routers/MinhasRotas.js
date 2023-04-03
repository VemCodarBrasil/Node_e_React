import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preco from '../Preco';
import About from '../About';
import Login from '../login/Login';

const MinhasRotas = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<h1>Olá mundo</h1>}/>
            <Route path='/preco' element={<Preco/>}/>
            <Route path='/sobre' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default MinhasRotas