import React from "react";
import {
  cartIcon,
  bookIocon,
  scrollIcon,
  facebookIcon,
  instaIcon,
  twitterIcon,
  linkedinIcon,
} from "../../../public/images";

const Hero = () => {
  return (
    <section className="hero_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero_content">
              <h3
                className="well_come"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                Welcome to Carolynntucciarone
              </h3>
              <h1
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                Discover The Secrets Of Holiday Island With Ava!
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                Get on a festive adventure with reporter Ava in "Christmas On
                Holiday Island"! Join her as she explores the historic Rocky
                Mountain town, finding its secrets and traditions. Follow Ava's
                journey as she stumbles upon a magical Christmas Globe and gets
                into the fascinating history of the Creek family.
              </p>
              <div
                className="hero_btns"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-easing="ease-in"
              >
                <a href="javascript:;" className="btn_with_icon perchase_btn">
                  <span>purchase now</span>
                  <span className="hero_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
                <a href="javascript:;" className="btn_with_icon about_book_btn">
                  <span>About Book</span>
                  <span className="hero_icon">
                    <img src={bookIocon} alt="" />
                  </span>
                </a>
              </div>
              <div className="scroll_down_wrapper">
                <button className="scroll_down_btn">
                  <span className="scroll_icon">
                    <img src={scrollIcon} alt="" />
                  </span>
                  <span className="scroll_text">Scroll Down</span>
                </button>
              </div>
              <div className="hero_social_icons">
                <span className="hero_social_text">FOLLOW US:</span>
                <a href="javascript:;" className="hero_social_icon">
                  <img src={facebookIcon} />
                </a>
                <a href="javascript:;" className="hero_social_icon">
                  <img src={twitterIcon} />
                </a>
                <a href="javascript:;" className="hero_social_icon">
                  <img src={instaIcon} />
                </a>
                <a href="javascript:;" className="hero_social_icon">
                  <img src={linkedinIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
