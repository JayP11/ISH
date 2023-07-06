import React from 'react'
import { useEffect } from 'react';
import NavbarSecond from '../common/navbarsecond/NavbarSecond';
import ContactInfo from '../components/contactinfo/ContactInfo';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <NavbarSecond />
            <ContactInfo />

        </div>
    )
}

export default Contact