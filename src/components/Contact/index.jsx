import React, { useState } from "react";
import axios from "axios";
import facebook from "/images/facebook.png";
import twitter from "/images/TwT.png";
import instagram from "/images/Ig.png";
import linkedin from "/images/Ln.png";
import contactdog from "/images/contact-dog.png";
import TickTok from "/images/tiktok.png";

import {
  emailIcon,
  facebookIcon,
  twitterIcon,
  instaIcon,
  shareIcon,
} from "../../../public/images";

export const Contact = (props) => {
  const contactinfo = [
    {
      icon: "Email",
      head: "Email Address",
      desc: "carolynn1949@gmail.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Send form data to the PHP script using Axios (replace 'your_php_script.php' with your actual PHP script URL)
      await axios.post("submit-form.php", formData);
      alert("Form submitted successfully!");
      // Optionally, reset the form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    }
  };

  const contactinfoarr = contactinfo.map((cvalue) => (
    <>
      <div className="contact_detail">
        {props.showImage == true ? (
          <div className="contact_detail_left">
            <img src={`/images/${cvalue.icon}.png`} alt="dog image" />
          </div>
        ) : (
          ""
        )}
        <div className="contact_detail_right">
          <h4>{cvalue.head}</h4>
          <p>{cvalue.desc}</p>
        </div>
      </div>
    </>
  ));
  return (
    <>
      {/* <div className="Contact">
        <div className="contact_left">
          <h2>Contact Info</h2>
          <p>
            We would love to hear from you! Whether you have a question,
            feedback. Please don't hesitate to reach out. You can contact us
            through the form below or directly via email. We value your input
            and look forward to connecting with you!
          </p>
          {contactinfoarr}
          <div className="contact_social">
            <a
              href="https://www.facebook.com/AuthorCarolynnTucciarone/"
              target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FCarolynnAuthor"
              target="_blank"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.instagram.com/authorcarolynntucciarone/"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@authorcarolynntucciarone"
              target="_blank"
            >
              <img src={TickTok} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="contact_right">
          <div
            className={
              props.pagename === "contactpage" ? "displaynone" : "contact_dog"
            }
          >
            <img src={contactdog} alt="contant banner" />
          </div>
          <h2>CONTACT US</h2>
          <p>
            Feel free to drop us a line with any inquiries or collaboration
            opportunities. We're always excited to explore new ideas and
            possibilities. Your message is important to us, and we will make
            sure to respond as soon as possible. Thank you for visiting our
            website!
          </p>
          <div className="contact_form">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Enter Your Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Enter Your Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder="Type Your Message Here!"
                rows="10"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn">
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div> */}

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
                  Contact Info
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
                        <p>
                          <a href="mailto:carolynn1949@gmail.com">
                            carolynn1949@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="social_icons">
                      <span className="social_text">FOLLOW US:</span>
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
                      <form onSubmit={handleSubmit}>
                        <div className="form_input">
                          <input
                            className="input_field"
                            placeholder="Name *"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form_input">
                          <input
                            className="input_field"
                            placeholder="Email Address *"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form_input">
                          <input
                            className="input_field"
                            placeholder="Subject *"
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_input">
                          <textarea
                            placeholder="Your Message"
                            className="input_field"
                            cols="3"
                            rows="3"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="body_btns mt-4">
                          <button type="submit" className="btn_with_icon">
                            <span>Submit Now</span>
                            <span className="body_icon">
                              <img src={shareIcon} alt="" />
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
