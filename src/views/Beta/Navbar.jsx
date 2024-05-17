import React from "react";
import { carolynLogo, cartIcon, searchIcon } from "../../../public/images";

const Navbar = () => {
  return (
    <section className="carolyn_navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid p-0 align-items-start">
          <a class="navbar-brand carolyn_navbar-logo" href="#">
            <img src={carolynLogo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto custom_navbar">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  About me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  books
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  trailer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="javascript:;">
                  about me
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="navbar_search_icon"
                  aria-current="page"
                  href="javascript:;"
                >
                  <img src={searchIcon} alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="navbar_cart_icon"
                  aria-current="page"
                  href="javascript:;"
                >
                  <span className="cart_item_counter">1</span>
                  <img src={cartIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
