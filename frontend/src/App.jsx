import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import Sign from "./components/Sign"; // Import Sign-in page
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy/:id" element={<BuyPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/sign-in" element={<Sign />} /> {/* Add Sign-in Route */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
