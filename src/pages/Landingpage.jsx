import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from '../constants/images';
import { Hero, HomeBlog, HomeBrandsLogo, HomeFacility, HomePackages, HomeReversableCard, HomeServices, HomeTestimonial, HomeVideo } from '../components';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Navbar } from '../common';
import { Helmet } from 'react-helmet';



const Landingpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>

            <Helmet>
                <title>ISH ESSENCE | Organic Skin Studio in Bowlin Green</title>
            </Helmet>
            <Navbar />

            <Hero />
            <HomeServices />
            <HomeReversableCard />
            <HomeFacility />
            <HomeVideo />
            <HomeTestimonial />
            <HomeBrandsLogo />
            <HomeBlog />
            {/* <HomePackages /> */}
            {/* <div className="whats-app-main">
                <button className="whats-app" onClick={() => window.scrollTo(0, 0)}>
                    <AiOutlineArrowUp className="float-icon" />
                </button>
            </div> */}
        </>
    );
}

export default Landingpage