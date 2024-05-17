import React, { useState } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { ReviewsBox } from "../../components/Reviews";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";

const videoLink = [
  "ChristmasOnHolidayIsland",
  "MovingOnWelcometoaNewYearofMysteryAndChaos!",
  "MovingOnGettingOutOfTheBox",
  "MovingOnToNewHeightsAndNewAdventures",
  "Carolynn-Tucciarone-Books",
  "MysterAtTheDogResscue",
  "SpotOnCanineBabies-Trailer",
  "SpotOnMysteryAtTheDogRescue-Trailer",
];

export const Trailer = () => {
  // Sample data array containing review data

  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Riveting Rollercoaster: A Thrilling Best Dog Books for Kids Reviews
        </title>
        <meta
          name="description"
          content="Captivating from start to finish! A masterful blend of suspense and emotions that are best dog books for kids. A must-read for all."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SubHeader name="Trailers" img={BannerImage} subHeading="our blogs" />

      <div className="Feedbacks trailorAlign">
        {videoLink.map((videoLinkData, index) => (
          <ReviewsBox videoContent={videoLinkData} />
        ))}
      </div>
    </LayoutTheme>
  );
};
