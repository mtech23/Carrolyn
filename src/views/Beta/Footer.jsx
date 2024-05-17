import React from "react";
import {
  carolynLogo,
  facebookIcon,
  instaIcon,
  shareIcon,
  twitterIcon,
} from "../../../public/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
                    <a href="javascript:;" className="social_icon">
                      <img src={facebookIcon} />
                    </a>
                    <a href="javascript:;" className="social_icon">
                      <img src={twitterIcon} />
                    </a>
                    <a href="javascript:;" className="social_icon">
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
                      <Link to="/beta">About The Author</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/beta">Books</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/beta">Gallery</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/beta">Reviews</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/beta">Trailers</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/beta">Blogs</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="/beta">Contact us</Link>
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
                      <Link to="/beta">carolynn1949@gmail.com</Link>
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

export default Footer;
