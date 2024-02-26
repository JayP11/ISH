import React, { useState, useEffect } from "react";
import "./Footer.css";
import images from "../../constants/images";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsChatText } from "react-icons/bs";
import axios from "axios";
import { get_countact, ACCEPT_HEADER } from "../../Utils/Constant";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [getContactData, setContactData] = useState([]);

  const getContactDataApi = async () => {
    setLoading(true);
    axios
      .get(get_countact, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        // console.log("contact data footer", JSON.stringify(res.data, null, 2));
        if (res.data.success === 1) {
          setContactData(res.data.data[0]);
          setLoading(false);
        } else {
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };
  useEffect(() => {
    getContactDataApi();
  }, []);
  return (
    <div className="footer-sec">
      <div className="footer-flex container">
        <div className="footer-inner-part3-flex">
          <p className="footer-part-header">Get in touch</p>
          <div className="footer-link-flex">
            <p className="our-service-item-desc">
              {getContactData ? getContactData.address_one : ""}
            </p>
            <div className="footer-icon-flex">
              <BsChatText
                style={{
                  color: "white",
                  alignSelf: "center",
                  height: "22px",
                  width: "22px",
                }}
                className="con-info-icon"
              />
              <Link to="tel:+1 6154998889" className="footer-link">
                {getContactData.contactno}
              </Link>
            </div>
            <div className="footer-icon-flex">
              <AiOutlineMail className="link-footer-icon" />
              <Link
                className="our-service-item-desc"
                to={
                  "mailto:" + `${getContactData ? getContactData.email : ""}`
                }>
                {getContactData ? getContactData.email : ""}
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-inner-part4-flex">
          <p className="footer-part-header">Follow us on Instagram</p>
          <div className="footer-img-flex">
            <div className="footer-insta-img-main">
              <img
                alt=""
                src={images.footer_link_img1}
                className="footer-link-part-img"
              />
              <div className="footer-insta-img-part">
                <Link to="https://www.instagram.com/" target="_blank">
                  <AiOutlineInstagram className="footer-social-icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-insta-flex">
            <AiOutlineInstagram className="insta-footer-icon" />
            <a href="https://www.instagram.com/" className="insta-txt-footer">
              Follow Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-main">
        <div className="main-nav-logo">
          <Link to="/">
            <img src={images.logo_2} className="nav-logo" alt="logo" />
          </Link>
        </div>
        <p className="footer-copyright-txt">© 2023 all rights reserved.</p>
        <div className="footer-bottom-social-icon-flex">
          <Link to="https://www.facebook.com/" target="_blank">
            <FaFacebookF className="footer-social-icon" />
          </Link>
          <TbWorld className="footer-social-icon" />
          <Link to="https://twitter.com/" target="_blank">
            <FaTwitter className="footer-social-icon" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <AiOutlineInstagram className="footer-social-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
