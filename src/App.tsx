import React, {useEffect} from 'react';
import logo from './logo.svg';
import './css/Navbar.scss';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Navbar from "./Home/Navbar";
import NotFound from "./Home/NotFound";


function App() {
    return (
    <div className="App">


      <BrowserRouter>
          <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="/not-found"/>}/>
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
