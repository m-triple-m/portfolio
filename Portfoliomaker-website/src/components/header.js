import "../stylesheets/header.css";
import React, { useState } from "react";
import Signup from "../components/signup";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { PortfolioContext } from "../portfolioContext";

const Header = (props) => {
  const [signupOpen, setSignupOpen] = useState(false);
  const currentUser = sessionStorage.getItem("user");
  const [portfolioList, setPortfolioList, loading, setLoading] =
    useContext(PortfolioContext);

  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.replace("/login");
  };

  const showLoggedIn = () => {
    if (currentUser) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/createport">
              CreatePort
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manage">
              Manage
            </Link>
          </li>

          <li className="nav-item">
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup" activeClassName="active">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PortFolio Maker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/listportfolio"
              >
                Browse Portfolios
              </NavLink>
            </li>
            {showLoggedIn()}
          </ul>
        </div>
      </div>
    </nav>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Portfoliomaker
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Portfolio
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Portfolio Templates</a></li>
                <li><a class="dropdown-item" href="#">Portfolio Example</a></li>
                <li><a class="dropdown-item" href="#">Portfolio Format</a></li>
                <li><a class="dropdown-item" href="#">How to Write In Portfolio</a></li>
                <li><a class="dropdown-item" href="#">Portfolio Help</a></li><a class="button button--red submenu__button" href="/portfolio-builder">Create a Portfolio now</a>
              </ul>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/listportfolio">
                Browse Portfolio
              </a>
            </li>

            {showLoggedIn()}

            <NavLink to="/signup" activeClassName="">
              Signup
            </NavLink>
            {signupOpen && <Signup setOpenSignup={setSignupOpen} />}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
