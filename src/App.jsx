import { useState } from "react";

import "./App.css";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            {/* <Shop/> */}
            {/* <Products/> */}
            {/* <Login/> */}
            <Router>
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="/products/:id" element={<Products />} />
                    <Route path="Login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
