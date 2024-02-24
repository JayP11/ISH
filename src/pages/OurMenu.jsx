import React, { useEffect,useState } from "react";
import { OurMenuList } from "../components";
import NavbarSecond from "../common/navbarsecond/NavbarSecond";
import { Helmet } from "react-helmet";
import { ACCEPT_HEADER, get_home } from "../Utils/Constant";
import axios from "axios";

const OurMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [getHomeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.log("first");
        console.log("home data", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setHomeData(res.data.data);
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
                    }}
                >
                    <div className="loader"></div>
                </div>
            ) :(
              <>
      <Helmet>
        <title>
          ISH ESSENCE | Our Menu Organic Skin Studio in Bowling Green
        </title>
      </Helmet>
      <OurMenuList getHomeData= {getHomeData}/>
      <NavbarSecond />
    </>)}
    </>
  );
};

export default OurMenu;
