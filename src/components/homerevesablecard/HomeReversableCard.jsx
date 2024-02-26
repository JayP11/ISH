import React, { useState } from "react";
import "./HomeReversableCard.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const HomeReversableCard = ({ getHomeData }) => {
  const [getarray, setarray] = useState(getHomeData?.child2);
  // console.log("getHomeData33333", getHomeData.child2);
  return (
    <div className="home-revr-card-main">
      <div className="home-services-container">
        <div className="home-services-table container">
          {getarray && getarray.length > 0
            ? getarray.map((item, index) => {
                return (
                  <div className="home-service-card">
                    <div className="home-service-face home-service-front">
                      <img src={item.feature_image_path} alt="" />
                      <div className="home-service-card-frint-txt-box">
                        <div className="home-service-card-inner-txt-box">
                          <h3 className="home-service-card-title">
                            Personalized Attention
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-service-face home-service-back">
                      <img
                        alt=""
                        src={item.feature_logo_path}
                        className="card-back-icon"
                      />
                      <p className="home-card-back-heading">
                        {item.feature_name}
                      </p>
                      <div className="box">{item.Feature_Description}</div>
                      {/* <Link to="#" className="home-card-back-link">
                        DISCOVER MORE
                      </Link> */}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div className="revr-card-down-flex container">
        <div className="revr-card-down-flex-part1">
          <p className="revr-card-down-flex-part1-txt">
            Facial Massage therapy for rest and relaxation. You owe yourself
            this moment.
          </p>
        </div>
        <div className="revr-card-down-flex-part2">
          <p className="revr-card-down-part2-txt">
            Facial skin massage involves gentle manipulation of the facial
            muscles and tissues to improve the appearance and health of the
            skin. It offers benefits like improved circulation, relaxation,
            lymphatic drainage, muscle toning, and enhanced product absorption.
          </p>
          {/* <a href="#" className='home-card-back-link'>EXPLORE MORE</a> */}
        </div>
      </div>
    </div>
  );
};

export default HomeReversableCard;

//  <div className="home-service-card">
//             <div className="home-service-face home-service-front">
//               <img
//                 src={images.hero_banner_22}
//                 alt=""
//                 className="home-service-card-img"
//               />
//               <div className="home-service-card-frint-txt-box">
//                 <div className="home-service-card-inner-txt-box">
//                   <h3 className="home-service-card-title">
//                     Expertise and Skill
//                   </h3>
//                   {/* <p className="home-services-card-txt">Starting from $90</p> */}
//                 </div>
//               </div>
//             </div>
//             <div className="home-service-face home-service-back">
//               <img
//                 alt=""
//                 src={images.card_back_icon2}
//                 className="card-back-icon"
//               />
//               <p className="home-card-back-heading">Expertise and Skill</p>
//               {/* <p> */}
//               <div className="box">
//                 With extensive training and knowledge in the latest skincare
//                 techniques and advancements, I stay updated on industry trends
//                 to offer you the most effective and innovative treatments. I am
//                 dedicated to continuous learning and improvement to ensure that
//                 you receive the highest quality of care.
//               </div>
//               {/* </p> */}
//               <Link to="#" className="home-card-back-link">
//                 DISCOVER MORE
//               </Link>
//             </div>
//           </div>
//           <div className="home-service-card">
//             <div className="home-service-face home-service-front">
//               <img
//                 src={images.card_img3}
//                 alt=""
//                 className="home-service-card-img"
//               />
//               <div className="home-service-card-frint-txt-box">
//                 <div className="home-service-card-inner-txt-box">
//                   <h3 className="home-service-card-title">
//                     Premium Skincare Products
//                   </h3>
//                   {/* <p className="home-services-card-txt">Starting from $75</p> */}
//                 </div>
//               </div>
//             </div>
//             <div className="home-service-face home-service-back">
//               <img
//                 alt=""
//                 src={images.card_back_icon3}
//                 className="card-back-icon"
//               />
//               <p className="home-card-back-heading">
//                 Premium Skincare Products
//               </p>
//               {/* <p> */}
//               <div className="box">
//                 I exclusively use premium skincare products from trusted brands
//                 known for their highquality ingredients and proven results.
//                 These products are carefully selected to enhance your skin's
//                 health, nourishment, and radiance. I also offer guidance on home
//                 skincare routines and recommend products that will complement
//                 your in-studio treatments.
//               </div>
//               {/* </p> */}
//               <Link to="#" className="home-card-back-link">
//                 DISCOVER MORE
//               </Link>
//             </div>
//           </div>
//           <div className="home-service-card">
//             <div className="home-service-face home-service-front">
//               <img
//                 src={images.card_img4}
//                 alt=""
//                 className="home-service-card-img"
//               />
//               <div className="home-service-card-frint-txt-box">
//                 <div className="home-service-card-inner-txt-box">
//                   <h3 className="home-service-card-title">
//                     Relaxing and Tranquil Environment
//                   </h3>
//                   {/* <p className="home-services-card-txt">Starting from $75</p> */}
//                 </div>
//               </div>
//             </div>
//             <div className="home-service-face home-service-back">
//               <img
//                 src={images.card_back_icon4}
//                 className="card-back-icon"
//                 alt=""
//               />
//               <p className="home-card-back-heading">
//                 Relaxing and Tranquil Environment
//               </p>
//               <div className="box">
//                 When you step into Ish Essence Studio, you'll experience a
//                 serene and calming ambiance designed to promote relaxation and
//                 rejuvenation. I believe in providing a peaceful escape where you
//                 can unwind, de-stress, and enjoy a pampering facial experience
//                 that revitalizes both your skin and your spirit.
//               </div>
//               <Link to="#" className="home-card-back-link">
//                 DISCOVER MORE
//               </Link>
//             </div>
//           </div>
