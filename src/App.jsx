import './App.css'
import Cadastrar from './pages/Cadastrar';
import Consulta from './pages/Consulta';
import Home from './pages/Home';
import Lista from './pages/Lista';
import Info from './pages/Info';
import Location from './pages/Location';
import Login from './pages/Login';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lista" element={<Lista/>}/>
          <Route path="/consulta" element={<Consulta/>}/>
          <Route path="/cadastrar" element={<Cadastrar/>}/>
          <Route path="/localizacao" element={<Location/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
