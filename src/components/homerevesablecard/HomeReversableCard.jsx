import React from 'react'
import "./HomeReversableCard.css"
import images from '../../constants/images'

const HomeReversableCard = () => {
    return (
        <div className="home-revr-card-main">
            <div class="home-services-container">

                <div class="home-services-table container">
                    <div class="home-service-card">
                        <div class="home-service-face home-service-front">
                            <img src={images.hero_banner_11} alt="" />
                            <div className="home-service-card-frint-txt-box">
                                <div className="home-service-card-inner-txt-box">
                                    <h3 className='home-service-card-title'>Personalized Attention</h3>
                                    {/* <p className="home-services-card-txt">Starting from $50</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="home-service-face home-service-back">
                            <img src={images.card_back_icon1} className="card-back-icon" />
                            <p className='home-card-back-heading'>Personalized Attention</p>
                            <p>
                                <div class="box">As the sole proprietor of the
                                    studio, I take the time to understand your specific skincare
                                    concerns and goals. I believe in a holistic approach to
                                    skincare, considering factors such as lifestyle, diet, and
                                    stress levels to provide personalized recommendations and
                                    treatments that address your individual needs.
                                </div>
                            </p>
                            <a href="#" className='home-card-back-link'>DISCOVER MORE</a>
                        </div>
                    </div>
                    <div class="home-service-card">
                        <div class="home-service-face home-service-front">
                            <img src={images.hero_banner_22} alt="" className='home-service-card-img' />
                            <div className="home-service-card-frint-txt-box">
                                <div className="home-service-card-inner-txt-box">
                                    <h3 className='home-service-card-title'>Expertise and Skill</h3>
                                    {/* <p className="home-services-card-txt">Starting from $90</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="home-service-face home-service-back">
                            <img src={images.card_back_icon2} className="card-back-icon" />
                            <p className='home-card-back-heading'>Expertise and Skill</p>
                            <p>
                                <div class="box">
                                    With extensive training and
                                    knowledge in the latest skincare techniques and
                                    advancements, I stay updated on industry trends to offer you
                                    the most effective and innovative treatments. I am dedicated
                                    to continuous learning and improvement to ensure that you
                                    receive the highest quality of care.
                                </div>
                            </p>
                            <a href="#" className='home-card-back-link'>DISCOVER MORE</a>
                        </div>
                    </div>
                    <div class="home-service-card">
                        <div class="home-service-face home-service-front">
                            <img src={images.card_img3} alt="" className='home-service-card-img' />
                            <div className="home-service-card-frint-txt-box">
                                <div className="home-service-card-inner-txt-box">
                                    <h3 className='home-service-card-title'>Premium Skincare Products</h3>
                                    {/* <p className="home-services-card-txt">Starting from $75</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="home-service-face home-service-back">
                            <img src={images.card_back_icon3} className="card-back-icon" />
                            <p className='home-card-back-heading'>Premium Skincare Products</p>
                            <p>
                                <div class="box">I exclusively use premium
                                    skincare products from trusted brands known for their highquality ingredients and proven results. These products are
                                    carefully selected to enhance your skin's health,
                                    nourishment, and radiance. I also offer guidance on home
                                    skincare routines and recommend products that will
                                    complement your in-studio treatments.
                                </div>
                            </p>
                            <a href="#" className='home-card-back-link'>DISCOVER MORE</a>

                        </div>
                    </div>

                    <div class="home-service-card">
                        <div class="home-service-face home-service-front">
                            <img src={images.card_img4} alt="" className='home-service-card-img' />
                            <div className="home-service-card-frint-txt-box">
                                <div className="home-service-card-inner-txt-box">
                                    <h3 className='home-service-card-title'>Relaxing and Tranquil Environment</h3>
                                    {/* <p className="home-services-card-txt">Starting from $75</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="home-service-face home-service-back">
                            <img src={images.card_back_icon4} className="card-back-icon" />
                            <p className='home-card-back-heading'>Relaxing and Tranquil Environment</p>
                            <p>
                                <div class="box">When you step into
                                    Ish Essence Studio, you'll experience a serene and calming
                                    ambiance designed to promote relaxation and rejuvenation. I
                                    believe in providing a peaceful escape where you can
                                    unwind, de-stress, and enjoy a pampering facial experience
                                    that revitalizes both your skin and your spirit.

                                </div>
                            </p>
                            <a href="#" className='home-card-back-link'>DISCOVER MORE</a>

                        </div>
                    </div>



                </div>
            </div>

            <div className="revr-card-down-flex container">
                <div className="revr-card-down-flex-part1">
                    <p className="revr-card-down-flex-part1-txt">Facial Massage therapy for rest and relaxation. You owe yourself this moment.</p>
                </div>
                <div className="revr-card-down-flex-part2">
                    <p className="revr-card-down-part2-txt">Facial skin massage involves gentle manipulation of the facial muscles and tissues to improve the appearance and health of the skin. It offers benefits like improved circulation, relaxation, lymphatic drainage, muscle toning, and enhanced product absorption.</p>
                    {/* <a href="#" className='home-card-back-link'>EXPLORE MORE</a> */}
                </div>
            </div>
        </div>
    )
}

export default HomeReversableCard