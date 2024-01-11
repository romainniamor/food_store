import { useState } from "react";
import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/error/errorPage";
import OrderPage from "./components/pages/order/orderPage";

function App() {
  //state

  //comportements

  //render
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:userName" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
