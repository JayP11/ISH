import React from 'react'
import "./HomeTestimonial.css"
import images from '../../constants/images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeTestimonial = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="home-testi-sec">
            <div className="home-testi-flex container">
                <div className="home-test-part1">
                    <p className="home-testi-part1-heading">LOVED BY OUR CUSTOMERS</p>
                    <p className="home-test-part1-txt">What our clients are <br /> saying about our luxury <br /> services</p>
                </div>
                <div className="home-test-part2">
                    <Slider {...settings}>
                        <div>
                            <div className="home-testi-inner-flex">
                                <div className="home-testi-imgbox">
                                    <img src={images.testi_img1} className="home-testi-img" />
                                </div>
                                <div>
                                    <p className="home-testi-txt">Their team are easy to work with and helped me make <br /> amazing websites in a short amount of time. Thanks <br /> guys for all your hard work. Professional support.</p>
                                    <p class="home-testi-auth">Jonsan Donner</p>
                                    <p class="home-testi-auth-desg">Sales manager</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="home-testi-inner-flex">
                                <div className="home-testi-imgbox">
                                    <img src={images.testi_img2} className="home-testi-img" />
                                </div>
                                <div>
                                    <p className="home-testi-txt">This theme has a wide variety of options and a really <br /> good customer support. But even so, the theme still <br /> gives a lot of features while prioritizing web speed.</p>
                                    <p class="home-testi-auth">harvard Alexander</p>
                                    <p class="home-testi-auth-desg">Microsoft Design</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="home-testi-inner-flex">
                                <div className="home-testi-imgbox">
                                    <img src={images.testi_img3} className="home-testi-img" />
                                </div>
                                <div>
                                    <p className="home-testi-txt">Trust us we looked for a very long time and wasted <br /> thousands of dollars testing other teams, freelancers,<br />and outsource companies. Excellent company!</p>
                                    <p class="home-testi-auth">Mackangy Rose</p>
                                    <p class="home-testi-auth-desg">Creative director</p>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default HomeTestimonial