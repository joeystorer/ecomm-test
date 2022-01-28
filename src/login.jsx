import React, { Component } from "react";

export default class Login extends Component {
  // demonstrating a login form using SetState for two way binding

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <div className="col=lg=9">
        <h3 className="m-1 p-2 border-bottom">Login</h3>
        <div className="form-group form-row m-1">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({
                email: event.target.value,
              });
            }}
          />
        </div>
        <div className="form-group form-row m-1">
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({
                password: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <button className="btn btn-secondary m-1" onClick={this.clickedLogin}>
            Login
          </button>
          {this.state.message}
        </div>
      </div>
    );
  }
  clickedLogin = () => {
    if (
      this.state.email === "joeystorer@gmail.com" &&
      this.state.password === "password123"
    ) {
      this.setState({
        message: <span className="text-success">You have logged in!</span>,
      });
    } else {
      this.setState({
        message: <span className="text-danger">Invalid login!</span>,
      });
    }
  };
}
