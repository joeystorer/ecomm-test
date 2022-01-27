import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://www.google.com">
              Ecomm Test
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
// export at the end instead of up top
export default NavBar;