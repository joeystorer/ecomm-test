import React, { Component } from "react";
import Navbar from "./nav";
import Customers from "./customers";
import ShoppingCart from "./shoppingCart";
import Login from "./login";
import Landing from "./landing";
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    );
  }
}
