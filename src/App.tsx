import React, {useEffect, useState} from 'react';
import './css/ui/navbar.scss';
import "./App.css";
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter} from "react-router-dom";
import { Routes, Route, Navigate ,Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Home/Navbar";
import NotFound from "./components/Home/NotFound";
import {ToastContainer} from "react-toastify";
import SignUp from "./components/SignUp/Sign";

const NavLayout=()=>(
    <>
        <Navbar/>
        <Outlet />
    </>
)




function App() :JSX.Element{

    return (
    <div className="App">

      <BrowserRouter>
          <ToastContainer/>


          <Routes>
            <Route element={<NavLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="/not-found"/>}/>
            </Route>

            <Route path="/signUp" element={<SignUp/>}/>
        </Routes>


      </BrowserRouter>



    </div>
  );
}

export default App;
