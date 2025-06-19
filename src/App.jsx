import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage"; // Add Category Page
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Payment from "./pages/PaymentPage"; // 🔥 Add this at the top

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} /> {/* ✅ Added */}
        <Route path="/product/:category/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} /> {/* ✅ Add this */}

        
      </Routes>
    </>
  );
};




export default App;
