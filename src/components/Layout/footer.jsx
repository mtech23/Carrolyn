import React from "react";
import { Link } from "react-router-dom";
import visa from "/images/visa.png";
import masterunion from "/images/masterunion.png";
import paypal from "/images/paypal.png";
import visa2 from "/images/visa2.png";
import masterunion2 from "/images/masterunion2.png";
import footedog from "/images/footer-dog.png";
import {
  carolynLogo,
  facebookIcon,
  instaIcon,
  shareIcon,
  twitterIcon,
} from "../../../public/images";

export const Footer = () => {
  const footerdata = [
    {
      icon: "footer-email",
      head: "EMAIL US AT",
      desc: "carolynn1949@gmail.com",
    },
  ];

  // const footerdataarr = footerdata.map(cvalue => <>

  //   <div className='footer_data'>
  //     <div className='footer_data_top'>
  //       <img src={`/images/${cvalue.icon}.png`} alt='Email Icon' />
  //     </div>
  //     <div className='footer_data_bottom'>
  //       <p>{cvalue.head}</p>
  //       <p>{cvalue.desc}</p>
  //     </div>
  //   </div>

  // </>)

  return (
    // <div className="Footer">
    //   <div className='footer_dog_img'>
    //     <img src={footedog} alt='Footer Section Image'/>
    //   </div>
    //   <div className='footer_top'>

    //     {footerdataarr}
    //   </div>
    //   <div className='footer_bottom'>
    //     <p>Carolynntucciarone © Copyrights  2024 All Rights Reserved</p>
    //     {/* <div className='footer_payments'>
    //       <img src={visa} alt='Visa'/>
    //       <img src={masterunion} alt='masterunion'/>
    //       <img src={paypal} alt='paypal' />
    //       <img src={masterunion2} alt='masterunion2' />
    //       <img src={visa2} alt='visa2'/>
    //     </div> */}
    //   </div>
    // </div>
    <section className="footer_sec">
      <div className="container">
        <div className="row">
          <div className="news_letter_sec">
            <div className="row">
              <div className="col-lg-4">
                <div className="news_letter_title">
                  <h3>NewsLetter</h3>
                  <h2>Latest Updates</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="news_letter_input">
                  <input
                    type="email"
                    className="input_feild"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="body_btns">
                  <a href="javascript:;" className="btn_with_icon">
                    <span>Submit Now</span>
                    <span className="body_icon">
                      <img src={shareIcon} alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__first">
            <div className="row footer__first-row">
              <div className="col-lg-4">
                <div className="footer__about">
                  <div className="footer__logo">
                    <a href="javascript:;">
                      <img src={carolynLogo} />
                    </a>
                  </div>
                  <div className="footer__about-body">
                    <p>
                      As an avid reader and writer, I recognize the significance
                      of modifying literature to individual interests and
                      delivering bespoke experiences.
                    </p>
                  </div>
                  <div className="social_icons">
                    <a
                      href="https://www.facebook.com/AuthorCarolynnTucciarone/"
                      className="social_icon"
                    >
                      <img src={facebookIcon} />
                    </a>
                    <a
                      href="https://twitter.com/i/flow/login?redirect_after_login=%2FCarolynnAuthor"
                      className="social_icon"
                    >
                      <img src={twitterIcon} />
                    </a>
                    <a
                      href="https://www.instagram.com/authorcarolynntucciarone/"
                      className="social_icon"
                    >
                      <img src={instaIcon} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer__quick-links">
                  <h3 class="foooter__subhead">Quick Links</h3>
                  <ul className="footer__links">
                    <li className="footer__link">
                      <Link to="/beta">Home</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/about-us">About The Author</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/buynow">Books</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/reviews">Reviews</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/trailers">Trailers</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/contact-us">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer__quick-links">
                  <h3 class="foooter__subhead">Quick Links</h3>
                  <ul className="footer__links footer_email_link">
                    <li className="footer__link">
                      <span>Email Address</span>
                      <Link to="mailto:carolynn1949@gmail.com">
                        carolynn1949@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer__quick-links">
                  <h3 class="foooter__subhead">Contact Us</h3>
                  <div className="footer_form">
                    <form>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="mb-3">
                        <textarea
                          cols="3"
                          rows="2"
                          placeholder="Message"
                          class="input_field"
                        ></textarea>
                      </div>
                      <div className="body_btns">
                        <a href="javascript:;" className="btn_with_icon">
                          <span>SENT Now</span>
                          <span className="body_icon">
                            <img src={shareIcon} alt="" />
                          </span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="footer__copyright">
            <p>Carolynntucciarone © Copyrights 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};
