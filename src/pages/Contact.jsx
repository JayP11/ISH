import React, { useState } from "react";
import { useEffect } from "react";
import NavbarSecond from "../common/navbarsecond/NavbarSecond";
import ContactInfo from "../components/contactinfo/ContactInfo";
import axios from "axios";
import { get_countact, ACCEPT_HEADER } from "../Utils/Constant";

const Contact = () => {
  const [getContactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getContactDataApi();
    // console.log("Get Home Data--->", getContactData);
  }, []);

  const getContactDataApi = async () => {
    setLoading(true);
    axios
      .get(get_countact, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        console.log("first");
        // console.log("contact data", JSON.stringify(res.data, null, 2));
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
  return (
    <div>
      {loading === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <NavbarSecond />
          <ContactInfo getContactData={getContactData} />
        </>
      )}
    </div>
  );
};

export default Contact;
