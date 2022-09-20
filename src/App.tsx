import React from 'react';
import logo from './logo.svg';
import './css/Navbar.scss';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Navbar from "./Home/Navbar";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
