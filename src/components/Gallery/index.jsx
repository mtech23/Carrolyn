import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { shareIcon } from "../../../public/images";

export const Gallery = (props) => {
  return (
    <div className={props.containerClass}>
      {/* {props.topImage && (
        <div className={props.firstClass}>
          <img src={props.topImage} alt="Gallery Images" />
        </div>
      )} */}
      <div className="gallery_head">
        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          {props.title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          {props.description}
        </p>
      </div>
      <div className="gallery_bottom">
        <div className={props.galleryClass}>
          {props.GalleryData &&
            props.GalleryData.map((image, index) => {
              return (
                <div className="grid__item" key={index}>
                  <img src={`/images/${image}`} alt="Gallery Images" />
                </div>
              );
            })}
        </div>
        {props.btnTxt && (
          <div className="body_btns">
            <Link to={props.link} className="btn_with_icon">
              <span>{props.btnTxt}</span>
              <span className="body_icon">
                <img src={shareIcon} alt="" />
              </span>
            </Link>
          </div>
        )}
      </div>
      {/* {props.img && (
        <div className="dog_img_2">
          <img src={props.img} alt="Gallery Images" />
        </div>
      )} */}
    </div>
  );
};
