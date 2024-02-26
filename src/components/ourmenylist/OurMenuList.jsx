import React, { useEffect } from "react";
import "./OurMenuList.css";

const OurMenuList = ({ getHomeData }) => {
  useEffect(() => {
    console.log("menu data are", getHomeData);
  });
  return (
    <div className="our-menu-list-sec">
      <div className="container">
        <div className="our-service-menu-heading-part">
          <p className="our-service-menu-heading-main">SERVICE MENU</p>
          <p className="our-service-menu-heading-txt">
            Relaxing & Result-oriented esthetic Treatment
          </p>
        </div>
        <div className="our-menu-list-felx">
          {getHomeData &&
            getHomeData.map((item) => {
              return (
                <>
                  {item.serviceclone.map((itm) => {
                    return (
                      <div className="our-service-menu-part">
                        <div className="our-service-menu-type-box">
                          {/* <p className="facial-type">Relaxing Facial</p> */}
                          <p className="facial-type">
                            {itm.services ? itm.services.name : ""}
                          </p>
                        </div>
                        {itm.serviceclonechild.map((it) => {
                          return (
                            <>
                              <div className="our-service-menu-item-box">
                                <div className="our-service-menu-item-heading">
                                  <p className="our-service-item-name">
                                    {/* ISHpecial Shanti Bliss Facial 100 mins */}
                                    {it.service_titles}
                                  </p>
                                  <p className="our-service-item-price">
                                    ${it.price}
                                  </p>
                                </div>
                                <p className="our-service-item-desc">
                                  {it.service_description}
                                </p>
                              </div>
                            </>
                          );
                        })}

                        {/* <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Sattva Radiance Facial 110 mins
                </p>
                <p className="our-service-item-price">$167</p>
              </div>
              <p className="our-service-item-desc">
                Experience the pure essence of radiance with this facial that
                promotes inner tranquility and outer glow. Using Sattvic
                principles, it purifies your skin, calms your mind, and imparts
                a luminous and peaceful aura. A customized skincare treatment
                tailored to address your specific skin concerns and needs.
                Includes LED light therapy, relaxing face, neck, décolleté and
                trapezius massage with lymphatic drainage and marma (pressure
                points) and algae peel off mask.
              </p>
            </div>

            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Tridosha Harmony Facial 60 mins
                </p>
                <p className="our-service-item-price">$87</p>
              </div>
              <p className="our-service-item-desc">
                Restore balance to your skin and bring harmony to your mind, and
                spirit with this facial. Tailored to your unique constitution,
                it addresses imbalances in Vata, Pitta, and Kapha doshas,
                leaving your skin nourished, balanced, and vibrant. Cleansing
                and exfoliation with the choice of booster ampoule( stabilizing,
                hydrating or firming). Hydrating and nourishing face massage
                with a peel off mask.
              </p>
            </div> */}
                      </div>
                    );
                  })}
                </>
              );
            })}

          {/*  */}
          {/* <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Back Facials</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Back Facial 45mins </p>
                <p className="our-service-item-price">$67</p>
              </div>
              <p className="our-service-item-desc">
                Gentle cleansing and exfoliation to remove dead skin cells to
                smooth the skin's texture. Application of a hydrating mask to
                replenish moisture. Moisturizer application to nourish and
                soften the back.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  HydroBack Facial 55 mins
                </p>
                <p className="our-service-item-price">$85</p>
              </div>
              <p className="our-service-item-desc">
                Hydrodermabrasion of the back to remove impurities. Application
                of a purifying mask to clarify the skin. Nourishing massage to
                hydrate the back.
              </p>
            </div>
          </div> */}
          {/*  */}

          {/* <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Add-On </p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">Dermaplaning </p>
              <p className="our-service-item-price">$35</p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">LED Light therapy </p>
              <p className="our-service-item-price">$25</p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">Kansa wand </p>
              <p className="our-service-item-price">$35</p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">Gua Sha </p>
              <p className="our-service-item-price">$25</p>
            </div>
          </div> */}

          {/* here */}
          {/* <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Add-On </p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">Dermaplaning </p>
              <p className="our-service-item-price">$35</p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">LED Light therapy </p>
              <p className="our-service-item-price">$25</p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">Kansa wand </p>
              <p className="our-service-item-price">$35</p>
            </div>
            <div className="our-service-menu-item-heading">
              <p className="our-service-item-name">Gua Sha </p>
              <p className="our-service-item-price">$25</p>
            </div>
          </div> */}
        </div>
      </div>
      <p className="home-services-head-big-txt" style={{ paddingTop: "4rem" }}>
        Ask us for more customized treatment and bridal packages.
      </p>
    </div>
  );
};

export default OurMenuList;
