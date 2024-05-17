import React from "react";
import { aboutAthor, cartIcon } from "../../../public/images";

const AboutSection = () => {
  return (
    <section className="about_sec">
      <div className="container-fluid p-0">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div
              className="about_sec_img"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <img src={aboutAthor} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about_sec_content ">
              <div className="sec_title">
                <h3
                  className="sec_title_h3 pink-color"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  About The Author
                </h3>
                <h2
                  className="sec_title_h2 black-color"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  About The Author
                </h2>
              </div>
              <div
                className="sec_p black-color"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <p className="black-color">
                  As an avid reader and writer, I recognize the significance of
                  modifying literature to individual interests and delivering
                  bespoke experiences. I am pleased to introduce my latest
                  creation, an extraordinary addition to the era of customized
                  dog books for adults.
                </p>
                <p className="black-color">
                  In the landscape of fiction personalized for dog enthusiasts,
                  this offering distinguishes itself, capturing the hearts and
                  minds of readers in search of a true story. Fusing adoration
                  for canines with enthralling storytelling, this book serves as
                  a personalized story celebrating the deep connection between
                  humans and their four-legged companions.
                </p>
                <p className="black-color">
                  While its allure spans across generations, this book has also
                  earned acclaim as one of the finest children's books centered
                  on dogs. Its delightful and enlightening content renders it a
                  valuable tool for young readers, imparting crucial values of
                  affection, empathy, and animal welfare.
                </p>
                <p className="black-color">
                  Moreover, rest assured, this book transcends the ordinary. It
                  melds the familiarity of beloved pets and their distinct
                  personalities with elements of mystery and fascination,
                  weaving a spellbinding fusion guaranteed to fascinate readers.
                  Moments of laughter, suspense, and genuine emotion are
                  intricately woven into the fabric of the story, ensuring an
                  unforgettable reading experience.
                </p>
                <p className="black-color">
                  Drawing from my own experiences volunteering at an animal
                  rescue organization and traveling to distant lands, I have
                  made a literary masterpiece that resonates deeply with animal
                  lovers worldwide. Beyond offering entertainment, this book
                  shines a light on the global imperative for animal rescue,
                  underscoring the transformative influence of love and care.
                </p>
                <p className="black-color">
                  I extend to you an invitation to get on this extraordinary
                  literary voyage, a journey of dog stories that transcends
                  boundaries, enchants readers of all ages, and leaves an
                  enduring impression on the hearts of dog aficionados across
                  the globe.
                </p>
              </div>
              <div
                className="body_btns"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <a href="javascript:;" className="btn_with_icon">
                  <span>Read More</span>
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

export default AboutSection;
