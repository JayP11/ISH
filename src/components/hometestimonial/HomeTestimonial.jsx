import React from "react";
import { useState } from "react";
import "./HomeTestimonial.css";
import images from "../../constants/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let review = {
  yashvi:
    "I am delighted to share my review for talented Ishita who provided me with an extraordinary facial experience. From start to finish, her exceptional skills and dedication to her craft were evident, making it an unforgettable and rejuvenating session. Her warm and friendly demeanor made me feel instantly comfortable, and she took the time to listen attentively to my skincare concerns and goals. During the facial, her expertise and attention to detail were remarkable. She carefully examined my skin, analyzing its needs and determining the most suitable products and techniques to use. Her extensive knowledge of skincare was evident as she explained each step of the process and the benefits behind the products she applied. ",
  shivani:
    "Ish is truly amazing and so professional! From the beginning to end she cares about you and takes care of you. She and her team were beyond prepared for you making your day stress free. Ish gets to know what you want, creates mood inspirations and then will move forward ensuring you get the results you want. I got so many compliments on my makeup the day of my engagement party. She is truly the best and I would definitely recommend her for any facial or makeup needs!! ",
};
const HomeTestimonial = ({ getHomeData }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [seeMore, setSeeMore] = useState(false);
  const [seeMore2, setSeeMore2] = useState(false);

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
            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    alt=""
                    src={images.Nisha_Karia}
                    className="home-testi-img"
                    style={{ width: "180px", height: "180px" }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    The facial service was exceptional, leaving my skin feeling
                    rejuvenated and glowing. Ishita was very professional,
                    attentive, and created a relaxing atmosphere. Highly
                    recommended!
                  </p>
                  <p className="home-testi-auth">Nisha karia</p>
                  {/* <p className="home-testi-auth-desg">Sales manager</p> */}
                </div>
              </div>
            </div>

            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    src={images.Sheetal}
                    alt=""
                    className="home-testi-img"
                    style={{
                      width: "180px",
                      height: "180px",
                    }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    I loved the fact that Ishita customised the treatment /
                    facial that was right for my skin, it did wonders! Thank
                    you, Ishita, am your regular now :)
                  </p>
                  <p className="home-testi-auth">Sheetal Derashri</p>
                  {/* <p className="home-testi-auth-desg">Microsoft Design</p> */}
                </div>
              </div>
            </div>

            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img alt="" src={images.Ashita_Karia} className="home-testi-img" />
                </div>
                <div>
                  <p className="home-testi-txt">
                    Ishi is amazing..she helped me with my skin care and made my
                    skin flawless and glowing.
                  </p>
                  <p className="home-testi-auth">Ashita dhabalia</p>
                  {/* <p className="home-testi-auth-desg">Creative director</p> */}
                </div>
              </div>
            </div>

            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img alt=""
                    src={images.Yashvi_Buch}
                    className="home-testi-img"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    {review.yashvi === "" ||
                    review.yashvi == null ||
                    review.yashvi === undefined ? null : (
                      <>
                        {seeMore
                          ? review.yashvi
                          : `${review.yashvi.substring(0, 170)}...`}

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
                          onClick={() => setSeeMore(!seeMore)}>
                          {seeMore ? "Show less" : "  Read more"}
                        </button>
                      </>
                    )}
                  </p>
                  <p className="home-testi-auth">Yashvi Buch</p>
                  {/* <p className="home-testi-auth-desg">Creative director</p> */}
                </div>
              </div>
            </div>

            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img alt=""
                    src={images.Shivani_Patel}
                    className="home-testi-img"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    {review.shivani === "" ||
                    review.shivani == null ||
                    review.shivani === undefined ? null : (
                      <>
                        {seeMore2
                          ? review.shivani
                          : `${review.shivani.substring(0, 170)}...`}

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
                          onClick={() => setSeeMore2(!seeMore2)}>
                          {seeMore2 ? "Show less" : "  Read more"}
                        </button>
                      </>
                    )}
                  </p>
                  <p className="home-testi-auth">Shivani Patel</p>
                  {/* <p className="home-testi-auth-desg">Creative director</p> */}
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
