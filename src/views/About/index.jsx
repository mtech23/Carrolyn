import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import authorimg from "/images/author-img.png";
import { About } from "../../components/About";
import { ReviewsBox } from "../../components/Reviews";
import { Contact } from "../../components/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { aboutAthor, cartIcon } from "../../../public/images";
import InnerHero from "../../components/InnerHero";
import BannerImage from "/images/hero-bg.png";

const AboutData = [
  "As a passionate reader and author, I understand the importance of catering to specific interests and providing personalized experiences through literature. That is why I am delighted to present to you my latest creation—an exceptional addition to the world of personalized dog books for adults.",

  "Within the realm of fiction books for dog lovers, this particular offering stands out, capturing the hearts and imaginations of readers seeking a truly engaging narrative. Combining the love for dogs with captivating storytelling, this book serves as a personalized dog story that celebrates the remarkable bond between humans and their furry friends.",

  "TWhile its appeal extends beyond age boundaries, this book has also received recognition as one of the best children's books about dogs. Its delightful and educational content makes it a wonderful resource for young readers, instilling important values of love, compassion, and animal welfare.",

  "Furthermore, rest assured that this book goes beyond the ordinary. It merges the familiarity of cherished pets and their unique personalities with elements of mystery and intrigue, creating a captivating blend that will keep readers entertained. Laughter, suspense, and heartfelt moments are woven throughout the storyline, making it a truly immersive experience.",

  "Drawing from my own experiences of volunteering at a rescue organization and traveling to China, I have crafted a literary work that speaks directly to the hearts of animal lovers worldwide. In addition to providing an engaging reading experience, this book sheds light on the global need for animal rescue and emphasizes the transformative power of love and attention.",

  "I invite you to embark on this remarkable literary journey—of dog story books that transcends boundaries, captivates readers of all ages, and leaves an indelible mark on the hearts of dog lovers everywhere.",
];

const feebackdata = [
  {
    desc: "As a lifelong dog lover and avid reader, I can confidently say that the books on this website have captured my heart. The author's deep understanding of the canine world is evident in every page, and their storytelling skills are exceptional. These books have taken me on incredible journeys filled with adventure, laughter, and tears. I highly recommend them to all fellow dog enthusiasts!",
    name: "Sarah Peterson",
  },
  {
    desc: "I stumbled upon this author's dog books while searching for a gift for my daughter, who adores dogs. Little did I know that I would become just as engrossed in the stories as she is! The author's ability to portray the unique personalities of different dog breeds is truly remarkable. The books are not only entertaining but also educational, teaching valuable life lessons through the eyes of our furry friends. We can't wait for the next installment!",
    name: "Michael Johnson",
  },
  {
    desc: "Being a dog trainer, I've read my fair share of books on dogs, but none have left such a lasting impression as the ones on this website. The author's authentic portrayal of the bond between humans and dogs resonated deeply with me. Their books are a delightful blend of heartwarming moments and thought-provoking insights into the canine psyche. I've recommended these books to my clients, and they've all come back thanking me for the recommendation!",
    name: "Emily Collins",
  },
  {
    desc: "As a parent, I'm always on the lookout for books that my kids will enjoy and learn from. These dog books have become a staple in our household. The author's captivating storytelling has kept my children hooked from start to finish. Not only have these books sparked their imagination, but they've also taught them valuable lessons about responsibility, empathy, and the importance of treating animals with love and kindness. We can't get enough of these wonderful stories!",
    name: "Harry Styles",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const canonialLink = window.location.href;

export const AboutPage = () => {
  useEffect(() => {
    const canonialLink = window.location.href;
  }, []);
  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me - The world of Personalized Dog Books for Adults</title>
        <meta
          name="description"
          content="I am delighted to present to you my latest creation—an exceptional addition to the world of personalized dog books for adults."
        />
        <meta name="keywords" content="personalized dog books for adults" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* <SubHeader name="About Me" img={dogBanner} /> */}
      <SubHeader
        name="About The Author"
        img={BannerImage}
        subHeading="about me"
      />

      {/* <About title="About Author" description={AboutData} img={authorimg} /> */}

      {/* <section className="about_sec">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="about_sec_img">
                <img src={aboutAthor} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_sec_content ">
                <div className="sec_title">
                  <h3 className="sec_title_h3 pink-color">About The Author</h3>
                  <h2 className="sec_title_h2 black-color">About The Author</h2>
                </div>
                <div className="sec_p black-color">
                  <p className="black-color">
                    As an avid reader and writer, I recognize the significance
                    of modifying literature to individual interests and
                    delivering bespoke experiences. I am pleased to introduce my
                    latest creation, an extraordinary addition to the era of
                    customized dog books for adults.
                  </p>
                  <p className="black-color">
                    In the landscape of fiction personalized for dog
                    enthusiasts, this offering distinguishes itself, capturing
                    the hearts and minds of readers in search of a true story.
                    Fusing adoration for canines with enthralling storytelling,
                    this book serves as a personalized story celebrating the
                    deep connection between humans and their four-legged
                    companions.
                  </p>
                  <p className="black-color">
                    While its allure spans across generations, this book has
                    also earned acclaim as one of the finest children's books
                    centered on dogs. Its delightful and enlightening content
                    renders it a valuable tool for young readers, imparting
                    crucial values of affection, empathy, and animal welfare.
                  </p>
                  <p className="black-color">
                    Moreover, rest assured, this book transcends the ordinary.
                    It melds the familiarity of beloved pets and their distinct
                    personalities with elements of mystery and fascination,
                    weaving a spellbinding fusion guaranteed to fascinate
                    readers. Moments of laughter, suspense, and genuine emotion
                    are intricately woven into the fabric of the story, ensuring
                    an unforgettable reading experience.
                  </p>
                  <p className="black-color">
                    Drawing from my own experiences volunteering at an animal
                    rescue organization and traveling to distant lands, I have
                    made a literary masterpiece that resonates deeply with
                    animal lovers worldwide. Beyond offering entertainment, this
                    book shines a light on the global imperative for animal
                    rescue, underscoring the transformative influence of love
                    and care.
                  </p>
                  <p className="black-color">
                    I extend to you an invitation to get on this extraordinary
                    literary voyage, a journey of dog stories that transcends
                    boundaries, enchants readers of all ages, and leaves an
                    enduring impression on the hearts of dog aficionados across
                    the globe.
                  </p>
                </div>
                <div className="body_btns">
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
      </section> */}
      <About
        title="About Author"
        description={AboutData}
        btnTxt="Read More"
        link="/about-us"
        img={authorimg}
      />

      <section className="subscribe_sec">
        <div className="container">
          <div className="row">
            <div className="subscribe_content">
              <div className="subscribe_borders">
                <h2>Subscribe For Special Price Latest News</h2>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Email Address Here..."
                    aria-describedby="button-addon2"
                  />
                  <button class="btn" type="button" id="button-addon2">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* review section  */}

      <div className="Feedback modified_feedback">
        {/* <div class="Feedback_img_1">
          <img src="/images/feedback-dog.png" alt="FeedBack image" />
        </div> */}
        {/* <div class="feedback_top">
          <h3>About The Authore</h3>
          <h2>What Our Client’s Say</h2>
          <p>
            Discover what our readers are saying about our captivating dog
            books. Dive into heartfelt testimonials that showcase the
            transformative power of our stories, bringing joy and enlightenment
            to dog lovers worldwide
          </p>
        </div> */}

        <div class="centered_title_with_subhead">
          <h3>About The Authore</h3>
          <h2>What Our Client’s Say</h2>
          {/* <p>
            Discover what our readers are saying about our captivating dog
            books. Dive into heartfelt testimonials that showcase the
            transformative power of our stories, bringing joy and enlightenment
            to dog lovers worldwide
          </p> */}
        </div>

        <Swiper
          navigation={true}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
        >
          {feebackdata &&
            feebackdata.map((ReviewData, index) => {
              console.log(ReviewData);
              return (
                <SwiperSlide>
                  <ReviewsBox
                    key={index}
                    title={ReviewData.name}
                    description={ReviewData.desc}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* <div className="viewMore">
          <Link to="/reviews" className="btn">
            Read More
          </Link>
        </div> */}
      </div>

      {/* <div className="ContactPage">
        <Contact />
      </div> */}
    </LayoutTheme>
  );
};
