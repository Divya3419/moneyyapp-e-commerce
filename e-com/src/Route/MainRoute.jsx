import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Cart from "../Pages/Cart";
import Product from "../Pages/Product";

const MainRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
