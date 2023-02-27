import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../componenets/GlobalStyles/Global.style';
import Navbar from '../componenets/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Detail from '../pages/Detail/Detail';
import Covid from '../pages/Covid/Covid';
import Rules from '../pages/Rules/Rules';
import About from '../pages/About/About';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Detail/>}/>
        <Route path="covid" element={<Covid/>}/>
        <Route path="rules" element={<Rules/>}/>
        <Route path="about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter