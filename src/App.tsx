import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.scss";
import Home from "./features/dashboard/components/Home/Home.tsx";
import Products from "./features/dashboard/components/Products/Products.tsx";
import Product from "./features/dashboard/components/Products/Product.tsx";
import FormProduct from "./features/dashboard/components/Products/FormProduct.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/create/:id" element={<FormProduct />}></Route>
          <Route path="/update/:id" element={<FormProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
