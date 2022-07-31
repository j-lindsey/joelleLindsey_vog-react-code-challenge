import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Universities from "./pages/Universities";
import PostalLookup from "./pages/PostalLookup";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/universities" element={<Universities />}></Route>
        <Route path="/postal" element={<PostalLookup />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <ToastContainer />
      <Loader />
    </div>
  );
}

export default App;
