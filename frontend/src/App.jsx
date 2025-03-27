import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import Sign from "./components/Sign"; // Sign-in page
import ShopPage from "./pages/ShopPage"; // Import ShopPage
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} /> {/* New Shop Page */}
          <Route path="/buy/:id" element={<BuyPage />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart Page */}
          <Route path="/sign-in" element={<Sign />} /> {/* Sign-in Page */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
