import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import GlobalStyle from './theme';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Bootcamps from './pages/Bootcamps';
import Header from './components/Header';

function App() {
  return (
    <div >
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/bootCamps" element={<Bootcamps/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
