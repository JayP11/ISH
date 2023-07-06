import React from 'react'
import NavbarSecond from '../common/navbarsecond/NavbarSecond'
import { AboutContent } from '../components'
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <>
        <Helmet>
                <title>ISH ESSENCE | Organic Skin Studio in Bowlin Green</title>
            </Helmet>
            <NavbarSecond />
            
            <AboutContent />
        </>
    )
}

export default About