import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import UseState from "./component/UseState";
import Cart from "./page/axios/Cart";
import Display1 from "./page/axios/Display1";
import Data from "./page/Data";
import Home from "./page/Home";
import Layout from "./page/Layout";
import Products from "./page/Products";
import Signinpage from "./page/Signinpage";
import Register from "./component/Register";
import EmailConfirmation from "./component/page/EmailConfirmation";
import ForgetPassword from "./component/page/ForgetPassword";
import ResetPassword from "./component/page/ResetPassword";
import Dashboard from "./admin/Dashboard";
import ShowCategory from "./admin/ShowCategory";
import AddCategory from "./admin/AddCategory";
import UpdateCategory from "./admin/UpdateCategory";
import AdminProduct from "./admin/AdminProduct";
import AddProduct from "./admin/AddProduct";

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/register" element={<Register />} />

          <Route path="/layout" element={<Layout />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/props" element={<Data />} />
          <Route path="/axios" element={<Display1 />} />
          <Route path="/product/:id" element={<Cart />} />
          <Route path="/verifyemail/:token" element={<EmailConfirmation />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/category" element={<ShowCategory />} />
          <Route path="/admin/addcategory" element={<AddCategory />} />
          <Route path="/admin/updatecategory/:token" element={<UpdateCategory />} />
          <Route path="/admin/product" element={<AdminProduct />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />









        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routess;
