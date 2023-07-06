import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import { GrLocation } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState('transparent');
  const [navbarBgShadow, setNavbarBgShadow] = useState('');
  // const [menuIconColorChange, setMenuIconColorChange] = useState('#fff');
  const [navLogo, setNavLogo] = useState('hidden');
  const HandleScroll = () => {
    window.scrollTo(0, 1300);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 600) {
        setNavbarBgColor('#fff'); // Change background color when scrolled
        setNavbarBgShadow('0 0 35px rgba(0,0,0,.1)'); // Change background color when scrolled
        // setMenuIconColorChange('#ec606c'); // Change background color when scrolled
        setNavLogo('visible'); // Change background color when scrolled
      } else {
        setNavbarBgColor('transparent'); // Reset background color when back to top
        setNavbarBgShadow(''); // Change background color when scrolled
        // setMenuIconColorChange('#fff'); // Change background color when scrolled
        setNavLogo('hidden'); // Change background color when scrolled
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* <div className="nav-up">
        <div className="top_nav_text_wrapp justify-content-between">
          <div className="nav-up-location">
            <MdLocationOn className="nav-up-icon" />

            <p className="nav-up-text">
              101 Deep Complex Kotechanagar Main Road, Off. Aminmarg Rajkot
              India
            </p>
          </div>
          <div className="nav-up-location">
            <a href="#">
              <p className="nav-up-text">CARRER</p>
            </a>
            <a href="https://www.facebook.com/login/" target="_blank">
              {" "}
              <GrFacebookOption className="nav-up-icon" />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <AiOutlineTwitter className="nav-up-icon" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
              <RiInstagramFill className="nav-up-icon" />
            </a>
          </div>
        </div>
      </div> */}
      <div className="nav-down" style={{ backgroundColor: navbarBgColor, boxShadow: navbarBgShadow }}>
        <div className="top_nav_text_wrapp padding-nav bg-nav">
          <div className="main-nav-logo">
            {/* <Link to="/"> */}
            <img src={images.logo_2} className="nav-logo" alt="logo" style={{ visibility: navLogo }} />
            {/* </Link> */}
          </div>
          <ul className="main-nav-list">
            <li>
              <Link className="main-nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <a className="main-nav-link" href="#">
                EXPERIENCES
              </a>
            </li> */}
            {/* <li>
              <Link className="main-nav-link" to="/">
                About Us
              </Link>
            </li> */}
            <li>

              <Link className="main-nav-link" to="/ourmenu">
                Our Menu
              </Link>
            </li>
            <li>

              <Link className="main-nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          {/* <button className="side_icon"> */}
          {toggleMenu === false ? (
            <GiHamburgerMenu
              className="side_icon"
              onClick={() => setToggleMenu(true)}
              // color={menuIconColorChange}
              color="#ec606c"
            />
          ) : (
            <RiCloseFill
              className="side_icon"
              onClick={() => setToggleMenu(false)}
              // color={menuIconColorChange}
              color="#ec606c"
            />
          )}
          {/* </button> */}
        </div>
      </div>
      {toggleMenu && (
        <div className="sidebar_main_wrapp">
          <div className="sidebar_base_wrapp">
            <Link
              className="sidebar_link"
              to="/"
              onClick={() => setToggleMenu(false)}
            >
              Home
            </Link>
            {/* <Link
              className="sidebar_link"
              to="/"
              onClick={() => setToggleMenu(false)}
            >
              About Us
            </Link> */}
            <Link
              className="sidebar_link"
              to="/ourmenu"
              onClick={() => setToggleMenu(false)}
            >
              Our Menu
            </Link>
            <Link
              className="sidebar_link"
              to="/contact"
              onClick={() => setToggleMenu(false)}
            >
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
