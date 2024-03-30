import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Navbar from "./components/layots/navbar/Navbar";
import Footer from "./components/layots/footer/Footer";
import NotPage from "./components/pages/notpage/NotPage";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
