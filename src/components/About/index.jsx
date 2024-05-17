import React from "react";
import { Link } from "react-router-dom";
import { cartIcon } from "../../../public/images";

export const About = (props) => {
  return (
    <>
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
                <img src={props.img} />
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
                    {props.title}
                  </h3>
                  <h2
                    className="sec_title_h2 black-color"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                  >
                    {props.title}
                  </h2>
                </div>
                <div
                  className="sec_p black-color"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  {props.description &&
                    props.description.map((content, index) => (
                      <p key={index} className="black-color">
                        {content}
                      </p>
                    ))}
                </div>
                <div
                  className="body_btns"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                >
                  <Link to={props.link} className="btn_with_icon">
                    <span>{props.btnTxt}</span>
                    <span className="body_icon">
                      <img src={cartIcon} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className={`About ${props.AboutClass}`}>
            <div className='about_left'>
                <h2>{props.title}</h2>
                {props.description && props.description.map((content, index) => (
                    <p key={index}>{content}</p>
                ))}

                {
                    props.btnTxt && <Link to={props.link} className='btn'> {props.btnTxt} </Link>
                }

            </div>
            <div className='about_right'>
                <img src={props.img} alt='About Image'/>
            </div>
        </div> */}
    </>
  );
};
