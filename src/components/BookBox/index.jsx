import React from "react";
import visa from "/images/visa.png";
import masterunion from "/images/masterunion.png";
import paypal from "/images/paypal.png";
import visa2 from "/images/visa2.png";
import masterunion2 from "/images/masterunion2.png";
import { Link } from "react-router-dom";

export const BookBox = (props) => {
  return (
    <div className="book_bottom">
      {props.BookData &&
        props.BookData.map((BookListing, index) => {
          console.log(index);
          return (
            <section
              className={
                index % 2 == 0 ? "section_without_bg" : "section_with_bg"
              }
            >
              <div className="container">
                <div
                  className={index % 2 == 0 ? "row flex-row-reverse" : "row "}
                  key={index}
                >
                  <div className="col-md-5">
                    <div
                      className={
                        index % 2 == 0 ? "without_bg_img" : "with_bg_img"
                      }
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in"
                    >
                      <img
                        src={`/images/${BookListing.img}.png`}
                        alt={BookListing.head}
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div
                      className={
                        index % 2 == 0
                          ? "without_bg_content"
                          : "with_bg_content"
                      }
                    >
                      <div
                        className="inner_sec_title"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in"
                      >
                        <h3
                          className="inner_sec_title-h3"
                          data-aos="fade-left"
                          data-aos-duration="2000"
                          data-aos-easing="ease-in"
                        >
                          Our Book
                        </h3>
                        <h3 className="inner_sec_title-h2">
                          {BookListing.head}
                        </h3>
                      </div>
                      <div
                        className={
                          index % 2 == 0
                            ? "without_bg_content_body aos-init aos-animate"
                            : "with_bg_content_body aos-init aos-animate"
                        }
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in"
                      >
                        <p>{BookListing.desc}</p>
                        {BookListing?.secondDesc && (
                          <p>{BookListing?.secondDesc}</p>
                        )}

                        {BookListing?.thirdDesc && (
                          <p>{BookListing?.thirdDesc}</p>
                        )}
                      </div>
                      <div
                        class="body_btns"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in"
                      >
                        <Link
                          to={`https://www.amazon.com/gp/product/${BookListing.link}`}
                          class="btn_with_icon"
                        >
                          <span>Ebook</span>
                          <span class="body_icon">
                            <img src="/public/images/cart-icon.png" alt="" />
                          </span>
                        </Link>
                        <Link
                          to={`https://www.amazon.com/gp/product/${BookListing.link}`}
                          class="btn_with_icon"
                        >
                          <span>paperback</span>
                          <span class="body_icon">
                            <img src="/public/images/cart-icon.png" alt="" />
                          </span>
                        </Link>

                        {BookListing.slug && (
                          <Link
                            className="btn_with_icon"
                            to={`/${BookListing.categoryLink}/${BookListing.slug}`}
                          >
                            <span>View</span>
                            <span class="body_icon">
                              <img src="/public/images/cart-icon.png" alt="" />
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};
