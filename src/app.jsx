import React, { Component } from "react";
import Navbar from "./nav";
import Customers from "./customers";
import ShoppingCart from "./shoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
