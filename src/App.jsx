import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPages from "./pages/LandingPages.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import Admin from "./pages/Admin.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ListProduct from "./pages/ListProduct.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPages />} />
      <Route path='/product/:id' element={<DetailProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/list-products' element={<ListProduct />} />
    </Routes>
  );
}

export default App;
