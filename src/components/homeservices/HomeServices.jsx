import React from "react";
import images from "../../constants/images";
import "./HomeServices.css";
import { useState } from "react";
 
// let service = {
//   service_first_desc:
//     "Each facial treatment is customized to meet your specific needs. I assess your skin type, concerns, and goals to create a personalized skincare  regimen that may include deep cleansing, exfoliation, extractions (if necessary), masks, serums, and moisturizers. The aim is to improve your skin's health, texture, and overall appearance.",
//   service_second_desc:
//     "In addition to facial treatments, I provide relaxing facial massages that help stimulate blood circulation, relieve tension, and promote a healthy glow. These massages can be incorporated into your facial session or booked as a standalone service.",
//   service_third_desc:
//     "If you're unsure about which facial treatment is right for you or need guidance on establishing an effective skincare routine, I offer personalized skincare consultations.Together, we'll discuss your concerns, evaluate your current skincare practices, and develop a tailored plan to achieve your desired skincare goals.",
// };
const HomeServices = ({ getHomeData }) => {
  const [readMore, setReadMore] = useState(false);
  const [getarray, setarray] = useState(getHomeData?.child3);
  const [testireadmore, settestireadmore] = useState(0);

  return (
    <div className="home-services-sec">
      <div className="home-services-flex comtainer">
        <div className="home-services-heading">
          {/* <div className="main-nav-logo">
                        <Link to="/">
                            <img src={images.logo_2} className="nav-logo nav-logoo" alt="logo" />
                        </Link>
                    </div> */}
          {/* <img
            src={images.leaf_head_img}
            className="home-services-heading-img"
          /> */}
          <p className="home-services-head-txt">
            {getHomeData ? getHomeData.title : "ENJOY SOOTHING EXPERIENCE"}
          </p>
          <p className="home-services-head-big-txt">
            {getHomeData ? getHomeData.subtitle : "Welcome to my Skin Studio"}
          </p>
          <p className="home-services-head-txt2">
            {getHomeData
              ? getHomeData.description_main
              : "At Ish Essence, I believe that healthy and beautiful skin starts with personalized care. As a single-owned studio, I am dedicated to providing exceptional skincare services tailored to your unique needs and preferences. With experience in the industry and a passion for helping clients achieve their skincare goals, I am committed to delivering outstanding results in a warm and inviting atmosphere."}
          </p>
        </div>

        <div className="home-services-box-flex container">
          {getarray && getarray.length > 0
            ? getarray.map((item, index) => {
                return (
                  <>
                    <div className="home-services-box">
                      <div className="home-services-box-inner">
                        <img
                          src={
                            getHomeData
                              ? item.image_three_path
                              : images.home_service_icon3
                          }
                          className="home-services-icon"
                          alt=""
                        />

                        <p className="home-services-box-heading">
                          {item.title_two}
                        </p>
                        <p className="home-service-box-txt">
                          {item.description_three === "" ||
                          item.description_three == null ||
                          item.description_three === undefined ? null : (
                            <>
                              {readMore && index === testireadmore
                                ? item.description_three
                                : `${item.description_three.substring(
                                    0,
                                    100
                                  )}...`}
                              {item.description_three.length > 100 ? (
                                <button
                                  className="btn-readmore"
                                  style={{
                                    background: "none",
                                    color: "#000",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0px",
                                    fontWeight: "600",
                                  }}
                                  onClick={() => {
                                    settestireadmore(index);
                                    setReadMore(!readMore);
                                  }}>
                                  {readMore && index === testireadmore
                                    ? "Show less"
                                    : "  Read more"}
                                </button>
                              ) : null}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    {/* <div className="home-services-box">
                      <div className="home-services-box-inner">
                        <img
                          alt=""
                          src={images.home_service_icon3}
                          className="home-services-icon"
                        />
                        <p className="home-services-box-heading">
                          Facial Massage
                        </p>
                        <p className="home-service-box-txt">
                          {service.service_second_desc === "" ||
                          service.service_second_desc == null ||
                          service.service_third_desc === undefined ? null : (
                            <>
                              {readMore2
                                ? service.service_second_desc
                                : `${service.service_second_desc.substring(
                                    0,
                                    100
                                  )}...`}

                              <button
                                className="btn-readmore"
                                style={{
                                  background: "none",
                                  color: "#000",
                                  border: "none",
                                  cursor: "pointer",
                                  // marginTop: "10px",
                                  padding: "0px",
                                  fontWeight: "600",
                                }}
                                onClick={() => setReadMore2(!readMore2)}>
                                {readMore2 ? "Show less" : "  Read more"}
                              </button>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="home-services-box">
                      <div className="home-services-box-inner">
                        <img
                          alt=""
                          src={images.home_service_icon3}
                          className="home-services-icon"
                        />
                        <p className="home-services-box-heading">
                          Skincare Consultations
                        </p>
                        <p className="home-service-box-txt">
                          {service.service_third_desc === "" ||
                          service.service_third_desc == null ||
                          service.service_third_desc === undefined ? null : (
                            <>
                              {readMore3
                                ? service.service_third_desc
                                : `${service.service_third_desc.substring(
                                    0,
                                    100
                                  )}...`}

                              <button
                                className="btn-readmore"
                                style={{
                                  background: "none",
                                  color: "#000",
                                  border: "none",
                                  cursor: "pointer",
                                  // marginTop: "10px",
                                  padding: "0px",
                                  fontWeight: "600",
                                }}
                                onClick={() => setReadMore3(!readMore3)}>
                                {readMore3 ? "Show less" : "  Read more"}
                              </button>
                            </>
                          )}
                        </p>
                      </div>
                    </div> */}

                    {/* <div className="home-services-box">
                        <div className="home-services-box-inner">
                            <img src={images.home_service_icon4} className="home-services-icon" />
                            <p className="home-services-box-heading">SKIN THERAPY</p>
                            <p className="home-service-box-txt">Lorem ipsum is simply dummy text the printing typesetting</p>
                        </div>
                    </div> */}
                  </>
                );
              })
            : null}
        </div>

        {/* );
          })} */}
      </div>
    </div>
  );
};

export default HomeServices;
