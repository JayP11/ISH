import React, { useState } from "react";
import "./Footer.css";
import images from "../../constants/images";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import axios from "axios";
// import Notification from "../../Utils/Notification";
// import { subscribes } from "../../Utils/Constant";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { mobileValidate } from "../../Utils/helpers";
import { Link } from "react-router-dom";
import { BsChatText } from "react-icons/bs";
const Footer = () => {
  const [email, setemail] = useState("");

  // const kNews = async () => {
  //   const regEx =
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   const regexpMobile = /^[0-9\b]+$/;

  //   if (email == "") {
  //     Notification("error", "Error!", "Please enter your Email Address!");
  //     return;
  //   } else {
  //     const formData = new FormData();
  //     //
  //     formData.append("email", email);
  //     console.log("formData contact us ", formData);

  //     const response = await axios
  //       .post(subscribes, formData, {
  //         headers: {
  //           Accept: "application/x.kingskraft.v1+json",
  //         },
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //     console.log("response contact us ", response.data);

  //     if (response.data.success == 1) {
  //       setemail("");
  //       Notification(
  //         "success",
  //         "Success!",
  //         "Subscribed"
  //       );
  //       return;
  //     } else {
  //       Notification("error", "Error!", "please enter valid data!");
  //       return;
  //     }
  //   }
  // };
  return (
    <div className="footer-sec">
      <div className="footer-flex container">
        {/* <div className="footer-inner-part1-flex">
          <p className="footer-part-header">Company</p>
          <ul className="footer-link-flex">
            <li><Link to="/" className="footer-link">About Company</Link></li>
            <li><Link to="/" className="footer-link">Company services</Link></li>
            <li><Link to="/" className="footer-link">Job opportunities</Link></li>
            <li><Link to="/" className="footer-link">Contact us</Link></li>
          </ul>
        </div>
        <div className="footer-inner-part2-flex">
          <p className="footer-part-header">Customer</p>
          <ul className="footer-link-flex" >
            <li><Link to="/" className="footer-link">Client support</Link></li>
            <li><Link to="/" className="footer-link">Pricing packages</Link></li>
            <li><Link to="/" className="footer-link">Company history</Link></li>
            <li><Link to="/" className="footer-link">Our process</Link></li>
          </ul>
        </div> */}
        <div className="footer-inner-part3-flex">
          <p className="footer-part-header">Get in touch</p>
          <div className="footer-link-flex">
            <p className="footer-link">
              Atarah Beauty Bar, <br /> 1251 Suite 2, 1251 Magnolia street,
              Bowling Green, KY 42104
            </p>
            <div className="footer-icon-flex">
              {/* <FiPhoneCall className="link-footer-icon" /> */}
              <BsChatText
                style={{ color: "white" }}
                className="con-info-icon"
              />
              <a href="tel:+1 6154998889" className="footer-link">
                +1 6154998889
              </a>
            </div>
            <div className="footer-icon-flex">
              <AiOutlineMail className="link-footer-icon" />
              <a href="ishessence@gmail.com" className="footer-link">
                ishessence@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer-inner-part4-flex">
          <p className="footer-part-header">Follow us on Instagram</p>
          <div className="footer-img-flex">
            <div className="footer-insta-img-main">
              <img
                src={images.footer_link_img1}
                className="footer-link-part-img"
              />
              <div className="footer-insta-img-part">
                <a href="https://www.instagram.com/" target="_blank">
                  <AiOutlineInstagram className="footer-social-icon" />
                </a>
              </div>
            </div>
            {/* <div className="footer-insta-img-main">
              <img src={images.footer_link_img2} className="footer-link-part-img" />
              <div className="footer-insta-img-part">

                <a href="https://www.instagram.com/" target="_blank"><AiOutlineInstagram className="footer-social-icon" /></a>
              </div>
            </div>
            <div className="footer-insta-img-main">
              <img src={images.footer_link_img3} className="footer-link-part-img" />
              <div className="footer-insta-img-part">

                <a href="https://www.instagram.com/" target="_blank"><AiOutlineInstagram className="footer-social-icon" /></a>
              </div>
            </div> */}
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
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF className="footer-social-icon" />
          </a>
          <TbWorld className="footer-social-icon" />
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter className="footer-social-icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <AiOutlineInstagram className="footer-social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
