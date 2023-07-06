import React from 'react'
import "./AboutContent.css"

const AboutContent = () => {
    return (
        <div className="about-sec">
            <div className="container resp-padding">
                <div className="about-heading-part">
                    <p className="about-heading">Why Choose Ish Essence</p>
                </div>

                <p className="about-txt"><span className="about-txt-side-heading">Personalized Attention:</span> As the sole proprietor of the
                    studio, I take the time to understand your specific skincare
                    concerns and goals. I believe in a holistic approach to
                    skincare, considering factors such as lifestyle, diet, and
                    stress levels to provide personalized recommendations and
                    treatments that address your individual needs.</p>
                <p className="about-txt"><span className="about-txt-side-heading">Expertise and Skill:</span> With extensive training and
                    knowledge in the latest skincare techniques and
                    advancements, I stay updated on industry trends to offer you
                    the most effective and innovative treatments. I am dedicated
                    to continuous learning and improvement to ensure that you
                    receive the highest quality of care.</p>
                <p className='about-txt'><span className="about-txt-side-heading">Premium Skincare Products:</span> I exclusively use premium
                    skincare products from trusted brands known for their highquality ingredients and proven results. These products are
                    carefully selected to enhance your skin's health,
                    nourishment, and radiance. I also offer guidance on home
                    skincare routines and recommend products that will
                    complement your in-studio treatments.</p>
                <p className="about-txt" ><span className="about-txt-side-heading">Relaxing and Tranquil Environment:</span> When you step into
                    Ish Essence Studio, you'll experience a serene and calming
                    ambiance designed to promote relaxation and rejuvenation. I
                    believe in providing a peaceful escape where you can
                    unwind, de-stress, and enjoy a pampering facial experience
                    that revitalizes both your skin and your spirit.</p>
            </div>
        </div>
    )
}

export default AboutContent