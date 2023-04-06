import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Errorpage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/error" element={<Error />} />
        
      </Routes>
      
    </>
  );
};

export default App;
