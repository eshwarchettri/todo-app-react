import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./todo/AuthenticationService.js";
import { withRouter } from "react-router";

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
      <header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div>
            <a
              href="https://github.com/eshwarchettri/todo-app-react"
              target="/"
              className="navbar-brand"
            >
              Eshwar'sTodoApp
            </a>
          </div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {isUserLoggedIn && (
                <li className="nav-item active">
                  <Link className="nav-link" to="/welcome/eshwar">
                    Home
                  </Link>
                </li>
              )}
              {isUserLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && (
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {isUserLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={AuthenticationService.logout}
                  >
                    Logout
                  </Link>
                </li>
              )}
              </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
