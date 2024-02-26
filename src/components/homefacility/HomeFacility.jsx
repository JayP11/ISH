import React, { useState } from "react";
import "./HomeFacility.css";
import images from "../../constants/images";

const HomeFacility = ({ getHomeData }) => {
  console.log("getHomeDatachild1", getHomeData.child1);

  const [getarray, setarray] = useState(getHomeData?.child1);
  return (
    <div className="home-fac-sec">
      <div className="home-fac-flex container">
        <div className="home-fac-part1">
          <img
            src={getHomeData.benifit_img_main_path}
            // src={images.leaf_side_img}
            alt=""
            className="home-fac-side-img"
          />
        </div>
        <div className="home-fac-part2">
          {getarray && getarray.length > 0
            ? getarray.map((item, index) => {
                return (
                  <div className="home-fac-part2-inner-flex">
                    <div className="home-fac-roun-imgbox">
                      <img
                        alt=""
                        src={item.image_path}
                        className="facility-small-img"
                      />
                    </div>
                    <div className="home-fac-list-flex">
                      <p className="home-fac-list-head">
                        Relax with face massage
                      </p>
                      <p className="home-fac-list-txt">
                        {item.description_clone}
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
          {/* <div className="home-fac-part2-inner-flex">
            <div className="home-fac-roun-imgbox">
              <img
                alt=""
                src={images.round_small_img_1}
                className="facility-small-img"
              />
            </div>
            <div className="home-fac-list-flex">
              <p className="home-fac-list-head">Relax with face massage</p>
              <p className="home-fac-list-txt">
                With extensive training and knowledge in the latest skincare
                techniques and advancements, I stay updated on industry trends
                to offer you the most effective and innovative treatments. I am
                dedicated to continuous learning and improvement to ensure that
                you receive the highest quality of care.
              </p>
            </div>
          </div>
          <div className="home-fac-part2-inner-flex">
            <div className="home-fac-roun-imgbox">
              <img
                src={images.round_small_img_2}
                className="facility-small-img"
              />
            </div>
            <div className="home-fac-list-flex">
              <p className="home-fac-list-head">Personalized Attention</p>
              <p className="home-fac-list-txt">
                As the sole proprietor of the studio, I take the time to
                understand your specific skincare concerns and goals. I believe
                in a holistic approach to skincare, considering factors such as
                lifestyle, diet, and stress levels to provide personalized
                recommendations and treatments that address your individual
                needs.
              </p>
            </div>
          </div>
          <div className="home-fac-part2-inner-flex">
            <div className="home-fac-roun-imgbox">
              <img
                src={images.round_small_img_3}
                className="facility-small-img"
              />
            </div>

            <div className="home-fac-list-flex">
              <p className="home-fac-list-head">
                Relaxing and Tranquil Environment
              </p>
              <p className="home-fac-list-txt">
                When you step into Ish Essence Studio, you'll experience a
                serene and calming ambiance designed to promote relaxation and
                rejuvenation. I believe in providing a peaceful escape where you
                can unwind, de-stress, and enjoy a pampering facial experience
                that revitalizes both your skin and your spirit.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeFacility;
