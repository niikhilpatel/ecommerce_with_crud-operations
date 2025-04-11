import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import Sign from "./components/Sign"; // Sign-in page
import ShopPage from "./pages/ShopPage"; // Import ShopPage
import Wishlist from "./components/Home/Wishlist"; // Import Wishlist page
import { CartProvider } from "./context/CartContext";
import AdminDashboard from "./pages/AdminDashboard";
import HimPage from "./pages/HimPage";
import HerPage from "./pages/HerPage";
import Kids from "./pages/kids";
import Running from "./components/Gearup/Running";
import Training from "./components/Gearup/Training";
import Football from "./components/Gearup/football";
import Basketball from "./components/Gearup/Basketball";
import Studio from "./components/Gearup/Studio";
import Auth from "./pages/Auth";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/himpage" element={<HimPage />} />
          <Route path="/herpage" element={<HerPage />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/running" element={<Running />} />
          <Route path="/training" element={<Training />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/buy/:id" element={<BuyPage />} />
          <Route path="/cart" element={<Cart />} />
                              {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/wishlist" element={<Wishlist />} /> {/* Wishlist Page */}
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
