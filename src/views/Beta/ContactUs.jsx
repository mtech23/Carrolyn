import React from "react";
import {
  emailIcon,
  facebookIcon,
  twitterIcon,
  instaIcon,
  shareIcon,
} from "../../../public/images";

const ContactUs = () => {
  return (
    <section className="contactUsSec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contactUs_title">
              <h3
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                Contact Us
              </h3>
              <h2
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                Get In Touch With Us
              </h2>
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
                  <h2
                    className="contactUs_subTitle"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                  >
                    Drop your message
                  </h2>
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
    </section>
  );
};

export default ContactUs;
