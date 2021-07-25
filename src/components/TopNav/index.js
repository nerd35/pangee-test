import React from "react";
import "./topnav.css";
import LogoImg from "../../assets/images/logo.png";

const TopNav = ({ toggle }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-light">
      <div className="px-5 container-fluid">
        <span className="navbar-brand" href="#">
          <img src={LogoImg} alt="logo" className="logo" />
        </span>
        <button
          className="navbar-toggler left"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="px-5 mb-2 me-auto navbar-nav mb-lg-0">
            <li className="mr-5 nav-item">
              <span className="mr-5 nav-link" aria-current="page" href="#">
                Shop
              </span>
            </li>
            <li className="nav-item">
              <span className="ml-3 nav-link" href="#">
                Learn
              </span>
            </li>
          </ul>
          <ul className="px-5 mb-2 ml-auto navbar-nav mb-lg-0">
            <li className="nav-item">
              <span className="nav-link " aria-current="page" href="#">
                Account
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={toggle}>
                <span className=" cart-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>
                <span className="cart-count">4</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
