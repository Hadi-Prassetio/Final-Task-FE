import { Route, Routes, Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPages from "./pages/LandingPages.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import Admin from "./pages/Admin.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ListProduct from "./pages/ListProduct.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";
import { Usercontext } from "./context/userContext";
import { API, setAuthToken } from "./config/api";

function App() {
  const [state, dispatch] = useContext(Usercontext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect Auth
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.status === "admin") {
        navigate("/admin");
        // history.push("/complain-admin");
      } else if (state.user.status === "customer") {
        navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<LandingPages />} />
      <Route path='/product/:id' element={<DetailProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/list-products' element={<ListProduct />} />
      <Route path='/update-product/:id' element={<UpdateProduct />} />
    </Routes>
  );
}

export default App;
