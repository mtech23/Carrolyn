import React from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/contact-dog.png";
import { Gallery } from "../../components/Gallery";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";

const GalleryImages = [
  "gallery-1.png",
  "gallery-2.png",
  "gallery-3.png",
  "gallery-5.png",
  "gallery-4.png",
  "gallery-6.png",
  "gallery-1.png",
  "gallery-2.png",
  "gallery-3.png",
  "gallery-4.png",
  "gallery-5.png",
  "gallery-6.png",
];

export const GalleryPage = () => {
  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gallery - Explore the World of Dogs Through Stunning Visuals
        </title>
        <meta
          name="description"
          content="Welcome to our Gallery, where we showcase the captivating world of dogs through amazing dog stories book. Discover heartwarming moments."
        />
        <meta name="keywords" content="Amazing dog stories book" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SubHeader name="Gallery" img={BannerImage} subHeading="our gallery" />

      <Gallery
        containerClass="GalleryPage"
        innerContainer="Gallery_gallerypage"
        firstClass="dog_img_1"
        title="Our Gallery"
        description="Welcome to our Gallery, where we showcase the captivating world of dogs through stunning visuals. Discover heartwarming moments, playful antics, and the undeniable charm of our furry companions. Enjoy the adorable canines that grace our collection of fiction books about dogs for adults. "
        galleryClass="grid"
        GalleryData={GalleryImages}
      />
    </LayoutTheme>
  );
};
