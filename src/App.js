/* import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import ProductsManagement from "./ProductsManagement";
import OrdersManagement from "./OrdersManagement";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

 */
import { useState } from "react";
import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Lin,
} from "react-router-dom";
import "./App.css";
import ProductsManagement from "./ProductsManagement";
import OrdersManagement from "./OrdersManagement";
import Header from "./Header";
import Sidebar from "./Sidebar";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
