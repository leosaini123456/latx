import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
        <Navbar />
       <Home />
    </>
  );
}
export default App;
