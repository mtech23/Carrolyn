import React from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { Contact } from "../../components/Contact";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";
import {
  facebookIcon,
  twitterIcon,
  instaIcon,
  linkedinIcon,
  scrollIcon,
  emailIcon,
  shareIcon,
} from "../../../public/images";

export const ContactUs = () => {
  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Contact - Reach Out via Form or Email for a Valued Connection
        </title>
        <meta
          name="description"
          content="You can contact us through the form below. We value your input and looking forward to connect with you to book fiction books for dog lovers."
        />
        <meta name="keywords" content="fiction books for dog lovers" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* <SubHeader
        name="Contact Us"
        img={dogBanner}
      />

      <div className='ContactPage'>
        <Contact
          showImage="false"
        />
      </div> */}
      {/* <section className="inner_hero_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="inner_hero_content">
                <h3 className="inner_subHead">Get in touch with us</h3>
                <h1 className="inner_heading">Contact Us</h1>
                <div className="inner_hero_social_icons">
                  <span className="inner_hero_social_text">FOLLOW US:</span>
                  <a href="javascript:;" className="inner_hero_social_icon">
                    <img src={facebookIcon} />
                  </a>
                  <a href="javascript:;" className="inner_hero_social_icon">
                    <img src={twitterIcon} />
                  </a>
                  <a href="javascript:;" className="inner_hero_social_icon">
                    <img src={instaIcon} />
                  </a>
                  <a href="javascript:;" className="inner_hero_social_icon">
                    <img src={linkedinIcon} />
                  </a>
                </div>
                <div className="inner_scroll_down_wrapper">
                  <button className="inner_scroll_down_btn">
                    <span className="inner_scroll_icon">
                      <img src={scrollIcon} alt="" />
                    </span>
                    <span className="inner_scroll_text">Scroll Down</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <SubHeader
        name="Contact Us"
        img={BannerImage}
        subHeading="Get in touch with us"
      />

      <Contact />
      {/* <section className="contactUsSec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contactUs_title">
                <h3>Contact Us</h3>
                <h2>Get In Touch With Us</h2>
              </div>
            </div>
            <div className="contact_sec_wrapper">
              <div className="row">
                <div
                  className="col-lg-4 mb-0"
                  style={{ backgroundColor: "#000" }}
                >
                  <div className="contactUsSec_email">
                    <div className="textWith_icon">
                      <div className="textWith_icon_icon">
                        <img src={emailIcon} />
                      </div>
                      <div className="textWith_icon_text">
                        <h4>Email us on:</h4>
                        <p>carolynn1949@gmail.com</p>
                      </div>
                    </div>
                    <div className="social_icons">
                      <span className="social_text">FOLLOW US:</span>
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
                <div className="col-lg-8">
                  <div className="contactUs_form">
                    <h2 className="contactUs_subTitle">Drop your message</h2>
                    <div className="contact_form_wrapper">
                      <form>
                        <div className="form_input">
                          <input
                            type="text"
                            className="input_field"
                            placeholder="Name *"
                          />
                        </div>
                        <div className="form_input">
                          <input
                            type="email"
                            className="input_field"
                            placeholder="Email Address *"
                          />
                        </div>
                        <div className="form_input">
                          <input
                            type="text"
                            className="input_field"
                            placeholder="Phone Number *"
                          />
                        </div>
                        <div className="form_input">
                          <textarea
                            cols="3"
                            rows="2"
                            placeholder="Your Message"
                            className="input_field"
                          ></textarea>
                        </div>
                      </form>
                    </div>
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
            </div>
          </div>
        </div>
      </section> */}
    </LayoutTheme>
  );
};
