import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import images from "../constants/images";
import {
  Hero,
  HomeBlog,
  HomeBrandsLogo,
  HomeFacility,
  HomePackages,
  HomeReversableCard,
  HomeServices,
  HomeTestimonial,
  HomeVideo,
} from "../components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Navbar } from "../common";
import { Helmet } from "react-helmet";
import { ACCEPT_HEADER, get_home } from "../Utils/Constant";
import axios from "axios";

const Landingpage = () => {
  const [getHomeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getHomeDataApi();
    // console.log("Get Home Data--->", getHomeData);
  }, []);

  const getHomeDataApi = async () => {
    setLoading(true);
    axios
      .get(get_home, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        // console.log("first");
        // console.log("home data", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setHomeData(res.data.data[0]);
          setLoading(false);
        } else {
          null();
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  return (
    <>
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
          <Helmet>
            <title>ISH ESSENCE | Organic Skin Studio in Bowling Green</title>
          </Helmet>
          <Navbar />

          <Hero getHomeData={getHomeData} />
          <HomeServices getHomeData={getHomeData} />
          <HomeReversableCard />
          <HomeFacility />
          <HomeVideo getHomeData={getHomeData} />
            <HomeTestimonial getHomeData={getHomeData} />
          <HomeBrandsLogo />
          <HomeBlog />
        </>
      )}
      {/* <HomePackages /> */}
      {/* <div className="whats-app-main">
                <button className="whats-app" onClick={() => window.scrollTo(0, 0)}>
                    <AiOutlineArrowUp className="float-icon" />
                </button>
            </div> */}
    </>
  );
};

export default Landingpage;
