import React from "react";
import "./HomeBlog.css";
import images from "../../constants/images";
const HomeBlog = () => {
  return (
    <div className="home-blog-sec">
      <div className="home-blog-heading-part">
        <p className="home-blog-heading">LATEST BLOGS</p>
        {/* <p className="home-blog-sub-heading">Interesting stories
                </p> */}
      </div>
      <div className="home-blog-flex container">
        <div className="home-blog-part">
          <div className="home-blog-imgbox">
            <img
              src={images.footer_up_card_bg1}
              className="footer-up-card-bg"
            />
            <div className="home-blog-bg-color"></div>
          </div>
          <div className="home-blog-card-main">
            <p className="home-blog-card-heading">LIFESTYLE</p>
            <p className="home-blog-card-txt">
              How to build branded <br /> photography studios
            </p>
            <p className="home-blog-card-date">18 MAY 2020</p>
          </div>
        </div>
        <div className="home-blog-part">
          <div className="home-blog-imgbox">
            <img
              src={images.footer_up_card_bg2}
              className="footer-up-card-bg"
            />
            <div className="home-blog-bg-color"></div>
          </div>
          <div className="home-blog-card-main">
            <p className="home-blog-card-heading">FASHION</p>
            <p className="home-blog-card-txt">
              Many things difficult to <br /> design prove easy
            </p>
            <p className="home-blog-card-date">30 APRIL 2020</p>
          </div>
        </div>
        <div className="home-blog-part">
          <div className="home-blog-imgbox">
            <img
              src={images.footer_up_card_bg3}
              className="footer-up-card-bg"
            />
            <div className="home-blog-bg-color"></div>
          </div>
          <div className="home-blog-card-main">
            <p className="home-blog-card-heading">CREATIVE</p>
            <p className="home-blog-txt">
              The proper study of the <br /> science of design
            </p>
            <p className="home-blog-card-date">23 MARCH 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
