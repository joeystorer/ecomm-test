import React, { Component } from "react";
import Product from "./product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 123,
        name: "mobile phone",
        price: 199.99,
        quantity: 47,
      },

      {
        id: 234,
        name: "television",
        price: 499.99,
        quantity: 32,
      },

      {
        id: 345,
        name: "blender",
        price: 39.99,
        quantity: 120,
      },

      {
        id: 456,
        name: "radio",
        price: 49.99,
        quantity: 157,
      },
    ],
  };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((prod) => {
            return <Product key={prod.id} id={prod.id} />;
          })}
        </div>
      </div>
    );
  }
}
