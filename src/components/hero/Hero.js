import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import images from "../../constants/images";
import "./Hero.css";

const Hero = ({ getHomeData }) => {
   return (
    <>
      {/* <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={images.hero_banner1} className="hero-img-slider" />
          <div className="hero-img-inner-main">
            <div className="hero-img-inner-sub">
              <img
                src={images.hero_banner_txt_img2}
                className="hero-banner-txt-img"
              />
              <p className="hero-banner-sub-txt">SOMETHING FOR MIND AND SOUL</p>
              <button className="hero-btn">EXPLORE MORE</button>
            </div>
          </div>
        </div>
        <div>
          <img src={images.hero_banner2} />
          <div className="hero-img-inner-main">
            <div className="hero-img-inner-sub">
              <img
                src={images.hero_banner_txt_img3}
                className="hero-banner-txt-img"
              />
              <p className="hero-banner-sub-txt">SOMETHING FOR MIND AND SOUL</p>
              <button className="hero-btn">EXPLORE MORE</button>
            </div>
          </div>{" "}
        </div>
        <div>
          <img src={images.hero_banner3} />
          <div className="hero-img-inner-main">
            <div className="hero-img-inner-sub">
              <img
                src={images.hero_banner_txt_img1}
                className="hero-banner-txt-img"
              />
              <p className="hero-banner-sub-txt">SOMETHING FOR MIND AND SOUL</p>
              <button className="hero-btn">EXPLORE MORE</button>
            </div>
          </div>{" "}
        </div>
      </Carousel> */}
      <div className="hero-logobox">
        <img
          src={getHomeData ? getHomeData.banner_path : images.logo_2}
          className="hero-logo"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
