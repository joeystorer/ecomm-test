import React, { Component } from "react";
import Product from "./product";
export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div className="container-fluid">
        <h2 className="p-1 text-uppercase">Shopping Cart</h2>
        <div className="row">
          {/* making each products info available in props */}
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                increase={this.increaseQty}
                decrease={this.decreaseQty}
              >
                {/* to render child in child component */}
                <button className="btn btn-dark">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //   attempt at getting product via hosted JSON api but can't get around the cors error
  // componentDidMount() {
  //   let promise = fetch(
  //     "https://cors-anywhere.herokuapp.com/https://jsonbase.com/demo_bucket/joeysecommtestdata"
  //   );
  //   promise.then((res) => {
  //       let newPromise = res.json();
  //       newPromise.then((products)=>{
  //         this.setState({products:products})
  //       })
  //   });
  // }

  componentDidUpdate() {}

  componentWillUnmount() {}

  increaseQty = (product) => {
    //   updating dom qty value
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product);
    newProducts[index].quantity++;
    this.setState({ products: newProducts });
  };

  decreaseQty = (product) => {
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product);
    newProducts[index].quantity--;
    this.setState({ products: newProducts });
  };
}
