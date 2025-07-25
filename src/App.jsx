import './App.css'
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Home';
import Lista from './pages/Lista';

//router

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lista" element={<Lista/>}/>
          <Route path="/cadastrar" element={<Cadastrar/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
