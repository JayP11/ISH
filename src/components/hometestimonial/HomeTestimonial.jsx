import React from "react";
import { useState } from "react";
import "./HomeTestimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// let review = {
//   yashvi:
//     "I am delighted to share my review for talented Ishita who provided me with an extraordinary facial experience. From start to finish, her exceptional skills and dedication to her craft were evident, making it an unforgettable and rejuvenating session. Her warm and friendly demeanor made me feel instantly comfortable, and she took the time to listen attentively to my skincare concerns and goals. During the facial, her expertise and attention to detail were remarkable. She carefully examined my skin, analyzing its needs and determining the most suitable products and techniques to use. Her extensive knowledge of skincare was evident as she explained each step of the process and the benefits behind the products she applied. ",
//   shivani:
//     "Ish is truly amazing and so professional! From the beginning to end she cares about you and takes care of you. She and her team were beyond prepared for you making your day stress free. Ish gets to know what you want, creates mood inspirations and then will move forward ensuring you get the results you want. I got so many compliments on my makeup the day of my engagement party. She is truly the best and I would definitely recommend her for any facial or makeup needs!! ",
// };
const HomeTestimonial = ({ getHomeData }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [seeMore, setSeeMore] = useState(false);
  const [getarray, setarray] = useState(getHomeData?.child4);
  const [testireadmore, settestireadmore] = useState(0);

  return (
    <div className="home-testi-sec">
      <div className="home-testi-flex container">
        <div className="home-test-part1">
          <p className="home-testi-part1-heading">
            {getHomeData
              ? getHomeData.testimonial_head
              : "LOVED BY OUR CUSTOMERS"}
          </p>
          <p className="home-test-part1-txt">
            {getHomeData
              ? /* ? getHomeData.testimonial_title */
                "What our clients are saying about our luxury services"
              : "What our clients are saying about our luxury services"}
          </p>
        </div>
        <div className="home-test-part2">
          <Slider {...settings}>
            {getarray && getarray.length > 0
              ? getarray.map((item, index) => {
                  return (
                    <div>
                      <div className="home-testi-inner-flex">
                        <div className="home-testi-imgbox">
                          <div>
                            <img
                              src={item.testimonial_image_path}
                              className={`${
                                index == 0
                                  ? "test_img1"
                                  : index === 1
                                  ? "test_img1"
                                  : index === 2
                                  ? "home-testi-img"
                                  : index === 3
                                  ? "test_img4"
                                  : index === 4
                                  ? "test_img5"
                                  : "home-testi-img"
                              }`}
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <p className="home-testi-txt">
                            {/* {item.testimonial_description} */}
                            {item.testimonial_description === "" ||
                            item.testimonial_description == null ||
                            item.testimonial_description ===
                              undefined ? null : (
                              <>
                                {seeMore && index === testireadmore
                                  ? item.testimonial_description
                                  : `${item.testimonial_description.substring(
                                      0,
                                      170
                                    )}...`}
                                {item.testimonial_description.length > 170 ? (
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
                                      setSeeMore(!seeMore);
                                    }}>
                                    {seeMore && index === testireadmore
                                      ? "Show less"
                                      : "  Read more"}
                                  </button>
                                ) : null}
                              </>
                            )}
                          </p>
                          <p className="home-testi-auth">
                            {item.testimonial_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
