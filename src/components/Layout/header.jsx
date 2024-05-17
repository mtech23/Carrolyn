import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "/images/hamburger.png";
import logo from "/images/logo.png";
import { cartIcon, searchIcon, carolynLogo } from "../../../public/images";
import menuIcon from "/images/menu-icon.png";

export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    // <div className="Navbar">
    //   <div className="navbar_left">
    //     <Link to="/">
    //       {" "}
    //       <button className="logo_text">
    //         <img src={logo} alt="Logo" />
    //       </button>
    //     </Link>
    //   </div>
    //   <div className="navbar_toggle">
    //     <button
    //       onClick={() => {
    //         setIsNavExpanded(!isNavExpanded);
    //       }}
    //     >
    //       <img src={hamburger} alt="Menu" />{" "}
    //     </button>
    //     {isNavExpanded ? (
    //       <div
    //         className="navbar_after_toggle"
    //         onClick={() => {
    //           setIsNavExpanded(false);
    //         }}
    //       >
    //         <div className="navbar_after_toggle_sticky">
    //           <Link to="/">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               Home
    //             </h6>
    //           </Link>
    //           <Link to="/about-us">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               About Me
    //             </h6>
    //           </Link>
    //           <Link to="/buynow">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               Books
    //             </h6>
    //           </Link>
    //           <Link to="/gallery">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               Gallery
    //             </h6>
    //           </Link>
    //           <Link to="/reviews">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               Reviews
    //             </h6>
    //           </Link>
    //           <Link to="/blogs">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               Blogs
    //             </h6>
    //           </Link>
    //           <Link to="/trailer">
    //             <h6
    //               onClick={() => {
    //                 setIsNavExpanded(false);
    //               }}
    //             >
    //               Trailers
    //             </h6>
    //           </Link>
    //         </div>
    //       </div>
    //     ) : (
    //       ""
    //     )}
    //   </div>
    //   <div className="navbar_mid">
    //     <Link to="/">
    //       <p>Home</p>
    //     </Link>
    //     <Link to="/about-us">
    //       <p>About Me</p>
    //     </Link>
    //     <Link to="/buynow">
    //       <p>Books</p>
    //     </Link>
    //     <Link to="/gallery">
    //       <p>Gallery</p>
    //     </Link>
    //     <Link to="/reviews">
    //       <p>Reviews</p>
    //     </Link>
    //     <Link to="/blogs">
    //       <p>Blogs</p>
    //     </Link>
    //     <Link to="/trailers">
    //       <p>Trailers</p>
    //     </Link>
    //   </div>
    //   <div className="navbar_right">
    //     <Link to="/contact-us">
    //       {" "}
    //       <button className="btn">Contact Us</button>
    //     </Link>
    //   </div>
    // </div>
    <section className="carolyn_navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid p-0 align-items-start">
          <Link class="navbar-brand carolyn_navbar-logo" to="/">
            <img src={carolynLogo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <img src={menuIcon} alt="" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto custom_navbar">
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("/beta") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("about-us") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/about-us"
                >
                  About me
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("buynow") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/buynow"
                >
                  books
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("gallery") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("reviews") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/reviews"
                >
                  reviews
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("blogs") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/blogs"
                >
                  blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("trailers") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/trailers"
                >
                  trailer
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname.includes("contact-us") ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="navbar_search_icon" aria-current="page" to="/">
                  <img src={searchIcon} alt="" />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="navbar_cart_icon" aria-current="page" to="/">
                  <span className="cart_item_counter">1</span>
                  <img src={cartIcon} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
