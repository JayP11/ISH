import React from "react";
import "./ContactInfo.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatText, BsPerson } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
const ContactInfo = ({ getContactData }) => {
  // console.log("getContactData", getContactData);
  return (
    <>
      <div className="contact-sec">
        <div className="contact-head-part">
          <p className="contact-head">Contact Information:</p>
        </div>
        <div className="contact-flex container">
          <div className="contact-flex-part1">
            <div className="c-details">
              <div>
                <div className="con-info-flex">
                  <BsPerson className="con-info-icon" />
                  <p className="our-service-item-name">Contact Person :</p>
                </div>
                <p className="our-service-item-desc">
                  {getContactData ? getContactData.name : ""}
                </p>
              </div>
              <div>
                <div className="con-info-flex">
                  <HiOutlineMail className="con-info-icon" />
                  <p className="our-service-item-name">Email Id :</p>
                </div>

                <Link
                  className="our-service-item-desc"
                  to={
                    "mailto:" + `${getContactData ? getContactData.email : ""}`
                  }>
                  {getContactData ? getContactData.email : ""}
                </Link>
              </div>

              <div>
                <div className="con-info-flex">
                  {/* <AiOutlinePhone className="con-info-icon" /> */}
                  <BsChatText className="con-info-icon" />
                  <p className="our-service-item-name">Text only:</p>
                </div>

                <Link
                  to={
                    "tel:" + `${getContactData ? getContactData.contactno : ""}`
                  }
                  className="our-service-item-desc">
                  {getContactData ? getContactData.contactno : ""}
                </Link>
   
              </div>

              <div>
                <div className="con-info-flex">
                  <GrLocation className="con-info-icon" />
                  <p className="our-service-item-name">Address :</p>
                </div>
                <p
                  className="our-service-item-desc"
                  style={{ maxWidth: "300px" }}>
                  {getContactData ? getContactData.address_one : ""}
                </p>
              </div>

              {/* <iframe
                                width="100%"
                                height="300"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29721.54250856522!2d70.7760554032362!3d22.2874097846101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc74cf7aa11%3A0xf65b0fdaebffdadb!2sTarget%20Marketing!5e0!3m2!1sen!2sin!4v1664352047813!5m2!1sen!2sin"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                allowFullScreen
                            ></iframe> */}

              <br />
            </div>
          </div>
          {/* <div className="contact-flex-part2">
                        <p className="our-service-item-name"> Hours :</p>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Monday closed</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Tuesday 9:00am - 4:00 pm</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Wednesday 10.00am - 6:00 pm</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Thursday 9:00 am - 4:00 pm</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Friday 10:00 am - 6:00 pm</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Friday 10:00 am - 6:00 pm</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Saturday 9:00 am - 2:00 pm</p></div>
                        <div className='contact-hour-flex'><AiOutlineClockCircle className="con-info-icon" /> <p className="our-service-item-desc">Sunday closed</p></div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
