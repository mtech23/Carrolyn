import React from "react";
import quote9 from "/images/quote1.png";
import quote6 from "/images/qoute6.png";
import { Player } from "video-react";
import pinkQuote from "/images/pink-quote.png";
import testimonialImg from "/images/testimonial-img.png";

export const ReviewsBox = (props) => {
  return (
    // <div className="feedback_bottom">
    //   <div className="border_white">
    //     {props.videoContent ? (
    //       <div className="feedback_card">
    //         <video
    //           src={`./videos/${props.videoContent}.mp4`}
    //           width="100%"
    //           height="100%"
    //           controls
    //           // autoPlay
    //           loop
    //           muted
    //         ></video>
    //       </div>
    //     ) : (
    //       <div className="reviewContainer">
    //         <div className="qoute_top">
    //           <img src={pinkQuote} alt="Qutation Mark" />
    //         </div>
    //         <div className="testimonal_img">
    //           <img src={testimonialImg} alt="" />
    //         </div>
    //         <div className="feedback_card">
    //           {/* <span style={{ color: "white", fontSize: "30px" }}>
    //             &#9734;&#9734;&#9734;&#9734;&#9734;
    //           </span> */}
    //           <h5>{props.title}</h5>
    //           <p>{props.description}</p>
    //         </div>
    //         {/* <div className="qoute_bottom">
    //           <img src={quote6} alt="Qutation Mark" />
    //         </div> */}
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="feedback_bottom">
      {/* <div className="border_white">
        
      </div> */}
      {props.videoContent ? (
        <div className="feedback_card ">
          <video
            src={`./videos/${props.videoContent}.mp4`}
            width="100%"
            height="100%"
            controls
            // autoPlay
            loop
            muted
          ></video>
        </div>
      ) : (
        <div className="reviewContainer">
          <div className="qoute_top">
            <img src={pinkQuote} alt="Qutation Mark" />
          </div>
          <div className="testimonal_img">
            <img src={testimonialImg} alt="" />
          </div>
          <div className="feedback_card">
            {/* <span style={{ color: "white", fontSize: "30px" }}>
                &#9734;&#9734;&#9734;&#9734;&#9734;
              </span> */}
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </div>
          {/* <div className="qoute_bottom">
              <img src={quote6} alt="Qutation Mark" />
            </div> */}
        </div>
      )}
    </div>
  );
};
