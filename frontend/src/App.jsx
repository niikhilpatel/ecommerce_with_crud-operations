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
import axios from "axios";

function App() {
  const [responseId, setResponseId] = React.useState("");
  const [responseMessage, setResponseMessage] = React.useState("");

  const loadScript = (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolvePath(true);
    }
    script.onerror = () => {
      resolve(false);
    }

    document.body.appendChild(script);
  };

  const createRazorPayOrder = (amount) => {
    let data = JSON.stringify({
      amount: amount * 100,
      currency : "INR"
    })

    let config = {
      method: "post",
      maxBodyLength:Infinity,
      url: "http://localhost:5000/orders",
      headers: {
        'Content-Type': 'application/json'
      },
      data:data
    }

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data))
      handleRazorPay(response.data.amount)
      
    })
    .catch((error) => {
      console.log("error at", error)
    })
  }

  const handleRazorPayScreen = async(amount) => {
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("Some error at razorpay screen loading")
      return;
    }

    const options = {
      key: 'rzp_test_Ld*VJIKgd9spxQ',
      amount : amount,
      currency : 'INR',
      name: 'LaceUp HUB',
      description : "Payment to LaceUp HUB",
      Image: "./assets/logo.png",
      handler: function(response) {
        setResponseId(response.razorpay_payment_id)
      },
      prefill: {
        name: "LackUp HUB",
        email: "nikhildevcode@gmail.com"
      },
      theme: {
        color: "#F4C430"
      }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()

  }

  const paymentFetch = (e) => {
    e.preventDefault();

    const paymentId = e.target.paymentId.value;

    axios.get(`http://localhost:5000/payment/${paymentId}`)
    .then((response)=> {
      console.log(response.data);
      setResponseState(response.data)

    })
    .catch((error) => {
      console.log("error occures", error)
    })
  }


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
