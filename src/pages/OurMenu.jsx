import React, { useEffect } from "react";
import { OurMenuList } from "../components";
import NavbarSecond from "../common/navbarsecond/NavbarSecond";
import { Helmet } from "react-helmet";

const OurMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          ISH ESSENCE | Our Menu Organic Skin Studio in Bowling Green
        </title>
      </Helmet>
      <OurMenuList />
      <NavbarSecond />
    </>
  );
};

export default OurMenu;
