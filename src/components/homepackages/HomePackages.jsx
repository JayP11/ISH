import React from 'react'
import "./HomePackages.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import images from '../../constants/images';
const HomePackages = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="home-packages-sec">
            <div className="home-packages-flex">
                <div className="home-packages-left-side-big-txt">relax</div>
                <div className="home-packages-sec-part-flex">
                    <p className="home-packages-sec-part-heading">LUXURY PACKAGES</p>
                    <p className="home-packages-sec-part-sub-heading">Our spa massage therapy packages
                    </p>
                    <p className="home-packages-sec-part-txt">Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="home-packages-third">
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3></h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HomePackages