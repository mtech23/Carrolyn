import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/contact-dog.png";
import LayoutTheme from "../Layout";
import { BookBox } from "../../components/BookBox";
import BannerImage from "/images/hero-bg.png";
// import Book1 from "/images/book-1.png";
// import Book2 from "/images/book-2.png";

const bookDataArray = [
  {
    id: 8,
    head: "Christmas On Holiday Island",
    desc: 'Are you yearning for a holiday story that transcends time and blends the enchantment of the season with tales of enduring family bonds? Are you ready for a magical journey? Introducing the mesmerizing world of "Christmas on Holiday Island," where a historic rocky mountain town sets the stage for an unforgettable journey.',
    img: "book-card-img-9",
    trailer: "ChristmasOnHolidayIsland",
    link: "dp/B0CTL1Y4C9",
    paperback: "10.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail",
    slug: "christmas-on-holiday-island",
  },
  {
    id: 1,
    head: "Spot On!",
    desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
    img: "book-card-img-1-revised",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B096X6HH4B/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1",
    paperback: "8.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail",
    slug: "spot-on-mystery-at-the-dog-rescue",
  },
  {
    id: 2,
    head: "Spot On!",
    desc: "In this second book in the Spot On series, join Lynn and her rescue dogs for another adventure. Animals go through some terrible things in order to survive on their own, which is why Lynn’s rescues are so beloved. This time, they go to Mexico, where a mystery causes chaos at the dog rescue. A scandal evolves. Meanwhile, Lynn is on vacation. Their investigation takes them to New York City’s Chinatown where they must stand...",
    img: "book-card-img-2",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B096TSVMX7/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2",
    paperback: "11.99",
    hardcover: "28.95",
    ebook: "3.99",
    categoryLink: "book-detail",
    slug: "spot-on-chaos-at-the-dog-rescue",
  },
  {
    id: 3,
    head: "Canine Babies",
    desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try. As Lynn and Maryanne carry out their own investigations, the case becomes increasingly personal. Long-submerged secrets surface as Lynn teams up with the cops to solve the puzzle before a cunning killer claims another victim...",
    img: "book-card-img-3",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B096YJ5FZ4/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4",
    paperback: "10.50",
    hardcover: "",
    ebook: "9.99",
    categoryLink: "book-detail",
    slug: "spot-on-canine-babies-at-the-dog-rescue",
  },
  {
    id: 4,
    head: "Spot-on: Canines on a Cruise",
    desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
    img: "book-card-img-4",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B098W57CG1/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i3",
    paperback: "9.50",
    hardcover: "",
    ebook: "5.55",
    categoryLink: "book-detail",
    slug: "spot-on-canines-on-a-cruise-spots-legacy",
  },
  {
    id: 5,
    head: "SPOT- ON: NEW BEGINNINGS",
    desc: "This book is the end of my SPOT ON SERIES.",
    img: "book-card-img-5",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B09H3N787N/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i5",
    paperback: "11.99",
    hardcover: "",
    ebook: "0.00",
    categoryLink: "book-detail",
    slug: "spot-on-new-beginnings",
  },
  {
    id: 6,
    head: "MOVING ON: : TO NEW HEIGHTS & NEW ADVENTURES (New beginning.)",
    desc: "Inspired by actual events, a woman and her friends explore new adventures, ups, and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly re...",
    img: "book-card-img-7",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B0B77TFDJV/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0",
    paperback: "9.99",
    hardcover: "",
    ebook: "",
    categoryLink: "book-detail",
    slug: "moving-on-to-new-heights-and-new-adventures",
  },
  {
    id: 7,
    head: "NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?",
    desc: "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, est...",
    img: "book-card-img-8",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B0B4BRLLFD/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i1",
    paperback: "7.99",
    hardcover: "",
    ebook: "4.99",
    categoryLink: "book-detail",
    slug: "new-beginnings-do-you-believe-in-ghosts",
  },
];

const illustrationbooks = [
  {
    id: 11,
    head: "Moving On: Stepping Out Of The Box",
    desc: "After a surprising crime occurs at INN, Sage and April get caught up in a mysterious and perilous situation. As a police look into the incident, the intricate details of the case emerge, exposing a sinister plot.",
    img: "book-card-img-10",
    trailer: "ChristmasOnHolidayIsland",
    link: "dp/B0CTW8YQ5X",
    paperback: "11.99",
    hardcover: "30.69",
    ebook: "3.99",
    categoryLink: "book-detail-illustration",
    slug: "stepping-out-of-the-box",
  },
  {
    id: 1,
    head: "Spot On: Chaos At The Dog Rescue",
    desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try..",
    img: "illbook2",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BJ7VWV9W",
    paperback: "9.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-chaos-at-the-rescue",
  },
  {
    id: 2,
    head: "Spot On: Mystery At The Dog Rescue",
    desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
    img: "illbook1",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B0BJCBM7PW",
    paperback: "",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-mystery-at-the-dog-rescue",
  },
  {
    id: 3,
    head: "Spot On: Canine Babies At The Dog Rescue",
    desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pet...",
    img: "illbook3",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BJ7XVN69",
    paperback: "9.00",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-canine-babies-at-the-dog-rescue",
  },
  {
    id: 4,
    head: "SPOT ON: Canines on a Cruise",
    desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
    img: "illbook4",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BJ7X187V",
    paperback: "",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-canines-on-a-cruise",
  },
  {
    id: 5,
    head: "SPOT- ON: NEW BEGINNINGS",
    desc: "This book is the end of my SPOT ON SERIES.",
    img: "illbook5",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BFJV9NRY",
    paperback: "9.99",
    hardcover: "",
    ebook: "3.49",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-new-beginnings",
  },
  {
    id: 6,
    head: "NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?",
    desc: "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, est...",
    img: "illbook6",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BFGFT3GQ",
    paperback: "",
    hardcover: "",
    ebook: "3.49",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-moving-on-who-believes-in-ghosts",
  },
  {
    id: 7,
    head: "Moving On: To New Heights & And New Adventures",
    desc: "Inspired by actual events, a woman and her friends explore new adventures, ups, and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly recounted the...",
    img: "illbook7",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BFJMX9TC",
    paperback: "",
    hardcover: "",
    ebook: "3.49",
    categoryLink: "book-detail-illustration",
    slug: "spot-on-moving-on-to-new-heights-and-new-adventures",
  },
  {
    id: 8,
    head: "PETEY: THE BULL TERRIER",
    desc: "This book is different from my Spot-on series and my Moving On series. This book is about a bull terrier named Petey. he goes on And adventure with his pals from the gromming place and the Dog show...",
    img: "illbook8",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BLVPBT7W",
    paperback: "9.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: "book-detail-illustration",
    slug: "petey-the-bull-terrier",
  },
  {
    id: 9,
    head: "GETTING OUT OF THE BOX",
    desc: "Back to the rescue in Texas sage and April want to open an INN....",
    img: "illbook9",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BM3SC3P4",
    paperback: "14.50",
    hardcover: "",
    ebook: "",
    categoryLink: "book-detail-illustration",
    slug: "moving-on-getting-out-of-the-box",
  },
  {
    id: 10,
    head: "New Year of Mystery And Chaos!",
    desc: "Well readers, this is my tenth book. I love writing. As the year comes to an end. I hope we are all having a wonderful holiday season....",
    completedDescription: [
      "Well readers, this is my tenth book. I love writing. As the year comes to an end. I hope we are all having a wonderful holiday season.",
      "Marriage is a compromise. It seems that April and her husband couldn't compromise. He wouldn't take no and tracked her down.",
      "The mystery on the cruise also brings back another person that wasn't nice. Hope you can read it to find out who came back in their life!",
    ],
    img: "illbook10",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BM3SC3P4",
    paperback: "12.58",
    hardcover: "",
    ebook: "",
    categoryLink: "book-detail-illustration",
    slug: "moving-on-welcome-to-a-new-year-of-mystery-and-chaos",
  },
];

export const BuyNow = () => {
  const [firstBook, secondBook] = useState(false);



  console.log("firstBook" , firstBook)
  function showFirstBook() {
    secondBook(false);
  }

  function showSecondBook() {
    secondBook(true);
  }
  const storystatus = () =>{
    // alert("data")
    secondBook(true)
  }
  const illustrationstatus = () =>{
    // alert("data")
    secondBook(false)
  }
  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dog Tales: Heartwarming Stories and Insights for Dog Lovers
        </title>
        <meta
          name="description"
          content="The love for dogs in human is visible through the uncountable best dog story books or other dog-related topics to help dog lovers and keepers."
        />
        <meta name="keywords" content="Best dog story books" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* <SubHeader
        name="Books"
        img={dogBanner}
      /> */}
      <SubHeader 
      storystatus={storystatus}
      illustrationstatus={illustrationstatus}
      name="our books" 
      img={BannerImage} 
      subHeading="Books" 
      firstBook={firstBook}
      status={false}
      action />

      {/* <section class="section_without_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div className="without_bg_content">
                <div className="inner_sec_title">
                  <h3
                    className="inner_sec_title-h3"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                  >
                    Carolynn Tucclarone
                  </h3>
                  <h3
                    className="inner_sec_title-h2"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                  >
                    Christmas On Holiday Island
                  </h3>
                </div>
                <div
                  className="without_bg_content_body"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  <p>
                    Follow reporter Ava on a festive journey to Holiday Island,
                    a historic Rocky Mountain town. Tasked with writing about
                    Mrs. Creek's great grandparents, Ava discovers a magical
                    Christmas Globe rumored to grant wishes. Amidst 200-year-old
                    buildings adorned with lights, she uncovers an old family
                    book revealing the Creek family's resilience in the early
                    1900s. As the town gears up for the Festival of Christmas,
                    Ava's discoveries become a heartwarming exploration of
                    Holiday Island's past. Will the Miracle Christmas Wish bring
                    solace to Mrs. Creek, and can Ava bridge the gap between
                    past and present? Join Ava in this enchanting tale, where
                    the magic of the season intertwines with enduring family
                    bonds, revealing the miracles of Holiday Island.
                  </p>
                </div>
                <div
                  class="body_btns"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-easing="ease-in"
                >
                  <a href="javascript:;" class="btn_with_icon">
                    <span>Ebook</span>
                    <span class="body_icon">
                      <img src="/public/images/cart-icon.png" alt="" />
                    </span>
                  </a>
                  <a href="javascript:;" class="btn_with_icon">
                    <span>paperback</span>
                    <span class="body_icon">
                      <img src="/public/images/cart-icon.png" alt="" />
                    </span>
                  </a>
                  <a href="javascript:;" class="btn_with_icon">
                    <span>View</span>
                    <span class="body_icon">
                      <img src="/public/images/cart-icon.png" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div
                className="without_bg_img"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <img src={Book1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section_with_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div
                className="with_bg_img"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                <img src={Book2} alt="" />
              </div>
            </div>
            <div class="col-md-7">
              <div className="with_bg_content">
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
                    Moving On Stepping Out of The box
                  </h3>
                </div>
                <div
                  className="with_bg_content_body"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  <p>
                    After a surprising crime occurs at INN, Sage and April get
                    caught up in a mysterious and perilous situation. As a
                    police look into the incident, the intricate details of the
                    case emerge, exposing a sinister plot.
                  </p>
                  <p>
                    The story takes unexpected twists, involving the intriguing
                    Mr. Robinson and the mysterious Mrs. Small. In the midst of
                    the chaos, a chilling revelation makes everyone question the
                    true nature of event.
                  </p>
                </div>
                <div
                  class="body_btns"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  <a href="javascript:;" class="btn_with_icon">
                    <span>Ebook</span>
                    <span class="body_icon">
                      <img src="/public/images/cart-icon.png" alt="" />
                    </span>
                  </a>
                  <a href="javascript:;" class="btn_with_icon">
                    <span>paperback</span>
                    <span class="body_icon">
                      <img src="/public/images/cart-icon.png" alt="" />
                    </span>
                  </a>
                  <a href="javascript:;" class="btn_with_icon">
                    <span>View</span>
                    <span class="body_icon">
                      <img src="/public/images/cart-icon.png" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="BuyNowPageDefault">
        {/* <h2>Find The Greatest Books On Dogs Here</h2>
        <br />
        <p>
          The love for dogs in humans is visible through the uncountable dog
          storybooks or other dog-related topics to help dog lovers and keepers.
          From entertaining kids to both adults, there is a sea of famous dog
          books on training, dog types, or enthralling stories.
        </p>
        <p>
          I, Carolynn Tucciarone, have made use of my affection for dogs and
          travel experiences to create an incredible suspense story that you
          will love. With Spot On being one of the books about a dog, you will
          also find my other dog books here that will soon be launched.
        </p>
        <p>
          Kids or adults, both will enjoy this full of suspense story that is a
          bit different from the usually published dog training books.
        </p>
        <p>
          It is a treat for readers and dog lovers who will find the dog rescue
          story enthralling. I, myself, am into dogs and books for dogs. So
          writing this book offered me an opportunity to put my love and
          knowledge into words and entertain all of you.
        </p>
        <p>
          You will find the best dog books of all time here as my fur babies
          grow to motivate me to produce more classic dog books. So while you
          read my first book, my canine babies and I will be back with more!
        </p> */}
        {/* <div className="buynow_tabs_links">
          <button
            className={`btn ${firstBook == false ? "active" : ""}`}
            onClick={showFirstBook}
          >
            Illustration Books
          </button>
          <button
            className={`btn ${firstBook == false ? "" : "active"}`}
            onClick={showSecondBook}
          >
            Story Books
          </button>
        </div> */}
        <div className="book_bottoms">
          {firstBook == false ? (
            <BookBox BookData={illustrationbooks} />
          ) : (
            <BookBox BookData={bookDataArray} />
          )}
        </div>
      </div>
    </LayoutTheme>
  );
};
