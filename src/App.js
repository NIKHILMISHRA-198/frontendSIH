// importing from packages
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importing pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import CreateProduct from "./Pages/Admin/createProduct";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/createproduct" element={<CreateProduct />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
