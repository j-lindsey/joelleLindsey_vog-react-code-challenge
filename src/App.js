import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Universities from "./pages/Universities";
import PostalLookup from "./pages/PostalLookup";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/universities" element={<Universities />}></Route>
            <Route path="/postal" element={<PostalLookup />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
