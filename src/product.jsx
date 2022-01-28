import React, { Component } from "react";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-1">
          <div className="card-body">
            {/* grabbing product info from props stored in state */}
            <div className="text-muted">ID {this.state.product.id}</div>
            <h5 className="border-top">{this.state.product.name}</h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer text-left">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.increase(this.state.product);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.props.decrease(this.state.product);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">
              {/* rendering child from prop */}
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}
}
