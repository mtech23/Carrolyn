import React from "react";
import { cartIcon, christmasHolyday } from "../../../public/images";

const Christmas = () => {
  return (
    <section className="christmas_sec">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="christmas_sec_content">
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
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  Christmas On Holiday Island
                </h2>
              </div>
              <div
                className="sec_p white-color"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <p>
                  Follow reporter Ava on a festive journey to Holiday Island, a
                  historic Rocky Mountain town. Tasked with writing about Mrs.
                  Creek's great grandparents, Ava discovers a magical Christmas
                  Globe rumored to grant wishes. Amidst 200-year-old buildings
                  adorned with lights, she uncovers an old family book revealing
                  the Creek family's resilience in the early 1900s.
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
          <div className="col-md-6">
            <div
              className="christmas_sec_img"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <img src={christmasHolyday} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Christmas;
