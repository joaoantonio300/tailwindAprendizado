import './App.css'
import Cadastrar from './pages/Cadastrar';
import Consulta from './pages/Consulta';
import Home from './pages/Home';
import Lista from './pages/Lista';
import Info from './pages/Info';
import Location from './pages/Location';
import Login from './pages/Login';

import { AuthProvider } from "./context/AuthContext";

import { onAuthStateChanged } from 'firebase/auth';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//hooks 
import { useAuthentication } from './hooks/useAuthentication';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  },[])

  return (
    <>
   <AuthProvider value={{user}}>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lista" element={<Lista/>}/>
          <Route path="/consulta" element={<Consulta/>}/>
          <Route path="/cadastrar" element={<Cadastrar/>}/>
          <Route path="/localizacao" element={<Location/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/cadastrar" element={user ? <Cadastrar/> : <Navigate to="/login"/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
   </AuthProvider>
    </>
  )
}

export default App
