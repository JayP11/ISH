import React from "react";
import "./HomeVideo.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const HomeVideo = ({ getHomeData }) => {
//   console.log("getHomeData", getHomeData);
  return (
    <div className="home-video-sec">
      <div className="home-video-heading-sec container">
        <p className="home-video-heading">
          {getHomeData
            ? getHomeData.appointment_head
            : "True meditation is letting go of manipulating our experience"}
          {/* <span className="home-video--heading-bold">True meditation</span> is
          letting go of <br /> manipulating our experience */}
        </p>
      </div>
      <div className="home-hero-con">
        <div className="home-video-form-flex">
          <div className="home-video-part1">
            <img
              src={
                getHomeData
                  ? getHomeData.appointment_bg_img_path
                  : images.green_face_cream_img
              }
              className="home-video-face-img"
              alt=""
            />{" "}
            {/* <img
              alt=""
              src={images.green_face_cream_img}
              className="home-video-face-img"
            /> */}
          </div>
          <div className="home-video-part2">
            <p className="home-video-form-heading">
              {getHomeData
                ? getHomeData.appointment_title
                : "BOOK YOUR APPOINTMENT"}
            </p>
            <p className="home-video-form-txt">
              {getHomeData
                ? getHomeData.appointment_description
                : " Experience the difference of a personalized and attentive skincare journey at Ish Essence Studio. Schedule your appointment today and let me help you achieve the healthy, radiant skin you deserve. I look forward to welcoming you into a world of relaxation, rejuvenation, and skincare expertise."}
            </p>
            <div>
              {/* <input type="text" className="home-video-inp" placeholder="Your name" />
                            <input type="text" className="home-video-inp" placeholder="Your email address" /> */}
              <Link
                to="http://Ishitaghelani.glossgenius.com"
                className="home-video-form-btn"
                target="_blank">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
