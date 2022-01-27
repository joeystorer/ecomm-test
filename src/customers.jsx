import React, { Component } from "react";

export default class Customers extends Component {
  state = {
    pageTitle: "Customers",
    custNumber: 5,
    customers: [
      {
        name: "John",
        city: "Columbus",
        phone: "408-1234",
        address: { street: "elm" },
        picture: "https://picsum.photos/id/222/50",
      },

      {
        name: "Bill",
        city: "Dayton",
        phone: null,
        address: { street: "oak" },
        picture: "https://picsum.photos/id/223/50",
      },

      {
        name: "Jane",
        city: "Cleveland",
        phone: "408-8899",
        address: { street: "maple" },
        picture: "https://picsum.photos/id/225/50",
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.custNumber}
          </span>
          <button className="btn btn-info" onClick={this.refreshCustomers}>
            Refresh
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Pic</th>
                <th>Name</th>
                <th>City</th>
                <th>Number</th>
                <th>Street</th>
              </tr>
            </thead>
            <tbody>{this.populateCustData()}</tbody>
          </table>
        </h4>
      </div>
    );
  }

  refreshCustomers = () => {
    this.setState({
      custNumber: 7,
    });
  };

  //   check if they have a phone
  checkPhone = (phone) => {
    return phone ? phone : <div className="text-danger">Unavailable</div>;
  };

  //   conditional css class if customer has a valid phone
  highlightNames = (cust) => {
    if (cust.phone) {
      return "green-style";
    } else {
      return "red-style";
    }
  };

  //   dynamically populating data by mapping customers object in state
  populateCustData = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.phone}>
          <td>
            <img src={cust.picture} alt="customer" />
            <button
              className="btn btn-sm btn-secondary m-2"
              onClick={() => {
                this.newPicture(cust, index);
              }}
            >
              New Picture
            </button>
          </td>
          <td className={this.highlightNames(cust)}>{cust.name}</td>
          <td>{cust.city}</td>
          <td>{this.checkPhone(cust.phone)}</td>
          <td>{cust.address.street}</td>
        </tr>
      );
    });
  };

  //   randomly generate a new customer image
  newPicture = (cust, index) => {
    let custArray = this.state.customers;
    custArray[index].picture = `https://picsum.photos/id/${Math.floor(
      100 + Math.random() * 900
    )}/50`;
    this.setState({ customers: custArray });
  };
}
