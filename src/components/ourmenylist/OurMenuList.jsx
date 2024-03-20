import React from "react";
import "./OurMenuList.css";

const OurMenuList = () => {
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
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              {/* <p className="facial-type">Relaxing Facial</p> */}
              <p className="facial-type">Signature Facials</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  {/* ISHpecial Shanti Bliss Facial 100 mins */}
                  Signature Facial 100 mins
                </p>
                <p className="our-service-item-price">$150</p>
              </div>
              <p className="our-service-item-desc">
                Immerse yourself in the blissful serenity of this facial,
                designed to soothe both your skin and your soul. Combining
                gentle Ayurvedic techniques with calming ingredients, it
                provides deep relaxation, nourishment, and a luminous glow. This
                facial is designed to provide a soothing and tranquil experience
                while rejuvenating and nourishing the skin. LED light therapy,
                relaxing, lymphatic drainage face, neck, décolleté and trapezius
                massage with kansa wand and marma (pressure points) and algae
                peel off mask.
              </p>
            </div>

            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Custom Treatment Facial 110 mins
                </p>
                <p className="our-service-item-price">$170</p>
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
                  {/* Tridosha Harmony Facial 60 mins */}
                  Mini Facial 60 mins
                </p>
                <p className="our-service-item-price">$90</p>
              </div>
              <p className="our-service-item-desc">
                Restore balance to your skin and bring harmony to your mind, and
                spirit with this facial. Tailored to your unique constitution,
                it addresses imbalances leaving your skin nourished, balanced,
                and vibrant. Cleansing and exfoliation with the choice of
                booster ampoule (stabilizing, hydrating or firming). Hydrating
                and nourishing face massage with a peel off mask.
              </p>
            </div>
          </div>
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">HYDROFACIALS</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Silver HydroFacial 60 mins
                </p>
                <p className="our-service-item-price">$117</p>
              </div>
              <p className="our-service-item-desc">
                Deep cleansing, exfoliation, and extraction with face, neck and
                décolleté massage and a nourishing peel off mask.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Gold HydroFacial 80 mins - 100 mins{" "}
                </p>
                <p className="our-service-item-price">$147</p>
              </div>
              <p className="our-service-item-desc">
                Deep cleansing, exfoliation, extraction. Serum infusion with
                hydro jet spray. Face, neck and décolleté massage LED light
                therapy and a skin tightening peel off mask.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Platinum HydroFacial 100 mins - 120 mins{" "}
                </p>
                <p className="our-service-item-price">$177</p>
              </div>
              <p className="our-service-item-desc">
                Deep cleansing, exfoliation, and extraction. Serum infusion with
                Ultrasonic and skin tightening with radio frequency. LED light
                therapy to enhance results. Specialty mask for advanced
                hydration. Neck and décolleté massage.
              </p>
            </div>
            {/*  */}
            <div className="our-service-menu-part">
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
                  <p className="our-service-item-price">$83</p>
                </div>
                <p className="our-service-item-desc">
                  Hydrodermabrasion of the back to remove impurities.
                  Application of a purifying mask to clarify the skin.
                  Nourishing massage to hydrate the back.
                </p>
              </div>
            </div>
            {/*  */}
            {/* <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Back Facial 45mins </p>
                <p className="our-service-item-price">$65</p>
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
            </div> */}
          </div>

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
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Dermaplaning</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Dermaplaning 60 mins </p>
                <p className="our-service-item-price">$80</p>
              </div>
              <p className="our-service-item-desc">
                Gentle cleanse. Dermaplane to remove vellus hair (peach fuzz)
                and dead skin cells. Soothing mask application to nourish and
                hydrate the skin.
              </p>
            </div>

            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Dermaplaning Facial 90 mins{" "}
                </p>
                <p className="our-service-item-price">$115</p>
              </div>
              <p className="our-service-item-desc">
                Deep cleanse with steam to prepare the skin. Exfoliate and
                Dermaplane to remove vellus hair (peach fuzz) and dead skin
                cells. Relaxing face, neck and décolleté massage with soothing
                mask application for nourishment of the skin.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Back Facial 45 mins </p>
                <p className="our-service-item-price">$67</p>
              </div>
              <p className="our-service-item-desc">
                Gentle cleansing and exfoliation to remove dead skin cells to
                smooth the skin's texture. Application of a hydrating mask to
                replenish moisture. Moisturizer application to nourish and
                soften the back.
              </p>
            </div>
          </div>

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
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">DermaPeel</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  S.A.S DermaPeel 110 mins
                </p>
                <p className="our-service-item-price">$160</p>
              </div>
              <p className="our-service-item-desc">
                To remove imperfections and purify the skin,refine blocked and
                dilated pores, balance excess shine and sebaceous secretion, as
                well as improving and preventing the signs of aging.
              </p>
            </div>

            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  P.S.F DermaPeel 90 mins{" "}
                </p>
                <p className="our-service-item-price">$150</p>
              </div>
              <p className="our-service-item-desc">
                For mature skin with visible signs of aging, including dark
                spots, deep wrinkles, lack of firmness, and dull or devitalized
                skin. Recommended to globally treat all signs of aging and
                intensely rejuvenate the complexion.
              </p>
            </div>

            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Bio Microneedling Peel 60-80 mins
                </p>
                <p className="our-service-item-price">$200</p>
              </div>
              <p className="our-service-item-desc">
                Bio Microneedling is a collagen-boosting treatment;Suffering
                from saggy skin, fine lines, acne scars, wrinkles, dull &
                pigmented skin, dark spots, uneven skin tone etc? This natural
                siliceous micro needles are introduced into the dermis layer of
                the skin through hand massage. This further stimulates collagen
                and elastin production in the skin cells and gives your skin a
                natural and younger-looking effect.
              </p>
            </div>
          </div>
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Hair Treatments</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Herbal Hair Mask 90 mins
                </p>
                <p className="our-service-item-price">$87</p>
              </div>
              <p className="our-service-item-desc">
                Herbal powders mixed with oil to create hair masks. These masks
                can help with dandruff, hair loss, and promotes hair growth.
                Includes shampoo, blow dry and styling.
              </p>
            </div>

            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Shiro Abhyanga 60 mins</p>
                <p className="our-service-item-price">$77</p>
              </div>
              <p className="our-service-item-desc">
                This is a head massage technique done with warm oil that
                stimulates the pressure points on the scalp, promoting
                relaxation and improving blood circulation to the hair
                follicles. Includes shampoo, blow dry and styling.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Hot Oil Scalp Massage 60 mins
                </p>
                <p className="our-service-item-price">$80</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Scalp Detox 90 mins</p>
                <p className="our-service-item-price">$90</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Anti-Hairfall Treatment 70 mins
                </p>
                <p className="our-service-item-price">$130</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Psoriasis Relief Scalp Facial 90 mins
                </p>
                <p className="our-service-item-price">$150</p>
              </div>
            </div>
          </div>

          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Express services</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Express Facial 40 mins</p>
                <p className="our-service-item-price">$57</p>
              </div>
              <p className="our-service-item-desc">
                Cleansing, manual exfoliation and a hydrating mask
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Express Vitamin C Facial 30 mins
                </p>
                <p className="our-service-item-price">$47</p>
              </div>
              <p className="our-service-item-desc">
                Double cleansing, Vitamin C infusion with hydro jet 8 hydrating
                face mask.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Luxury Blowout 45 mins</p>
                <p className="our-service-item-price">$43</p>
              </div>
              <p className="our-service-item-desc">
                Shampoo and styling with all natural shampoo and conditioner.
                Includes scalp, neck and shoulder massage.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Algae Peel off mask 25 mins
                </p>
                <p className="our-service-item-price">$33</p>
              </div>
              <p className="our-service-item-desc">
                Goji berry algae peel off mask
              </p>
            </div>
          </div>

          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Package Deals</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Pre-Bridal Package valid for 3 months
                </p>
                <p className="our-service-item-price">$450</p>
              </div>
              <p className="our-service-item-desc">
                2 Facial treatments - 1 Dermaplaning - 1 Mini Facial - 1 hair
                treatment (with haircut)
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Event-Ready one day package 120mins
                </p>
                <p className="our-service-item-price">$200</p>
              </div>
              <p className="our-service-item-desc">
                Express Facial - Shampoo & blowdry - Special occasion hairstyle
                - Soft glam makeup with lashes.
              </p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  On the go package 90mins
                </p>
                <p className="our-service-item-price">$150</p>
              </div>
              <p className="our-service-item-desc">
                Algae peel off mask - Shampoo & style - Natural makeup
              </p>
            </div>
          </div>
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Lash and Brows</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Brow Wax</p>
                <p className="our-service-item-price">$20</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">
                  Ismei Brow Lamination and Henna
                </p>
                <p className="our-service-item-price">$85</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Lash Lift and Tint</p>
                <p className="our-service-item-price">$85</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Brow and Lash Package</p>
                <p className="our-service-item-price">$125</p>
              </div>
            </div>
          </div>
          <div className="our-service-menu-part">
            <div className="our-service-menu-type-box">
              <p className="facial-type">Add-Ons</p>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Dermaplaning</p>
                <p className="our-service-item-price">$40</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">LED Light therapy</p>
                <p className="our-service-item-price">$25</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Kansa wand </p>
                <p className="our-service-item-price">$35</p>
              </div>
            </div>
            <div className="our-service-menu-item-box">
              <div className="our-service-menu-item-heading">
                <p className="our-service-item-name">Gua Sha </p>
                <p className="our-service-item-price">$25</p>
              </div>
            </div>
          </div>

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
