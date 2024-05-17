import React from "react";
import { movingBook, cartIcon } from "../../../public/images";

const AdvantureBook = () => {
  return (
    <section className="advantureBook">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div
              className="advantureBook_img"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <img src={movingBook} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="advantureBook_content">
              <div className="sec_title">
                <h3
                  className="sec_title_h3 pink-color"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  Our Book
                </h3>
                <h2
                  className="sec_title_h2 white-color"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  MOVING ON: THE NEW HEIGHTS & NEW ADVENTURES
                </h2>
              </div>
              <div
                className="sec_p white-color"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <p>
                  Inspired by actual events, a woman and her friends explore new
                  adventures, ups , and downs on a road trip. She has never
                  traveled alone, so she decides to travel with her close
                  friend. She deeply felt and flawlessly recounted the journey
                  of exploration—of the world outside and the soul within—that
                  takes her to new heights and New adventures. However, living a
                  life of purpose isn't always as simple as it appears. In
                  truth, it was, at times, tedious, draining, and even
                  desperate. However, she achieved the confidence and experience
                  for which she had yearned.
                </p>
              </div>
              <div
                className="choose_preference"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <h4>choose your preference</h4>
              </div>
              <div
                className="body_btns"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <a href="javascript:;" className="btn_with_icon">
                  <span>EBOOK</span>
                  <span className="body_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
                <a href="javascript:;" className="btn_with_icon">
                  <span>PAPERBACK</span>
                  <span className="body_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantureBook;
