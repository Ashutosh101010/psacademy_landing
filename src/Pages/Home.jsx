import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/HomeSections/SectionOne/SectionOne'
import SectionTwo from '../Components/HomeSections/SectionTwo/SectionTwo'
import SectionThree from '../Components/HomeSections/SectionThree/SectionThree'
import Footer from '../Components/Footer'
import SecondFooter from '../Components/SecondFooter'
import whatsAppSvg from '../../images/whatsAppSvg.svg';
import BannerSection from '../Components/HomeSections/SectionBanner/BannerSection'
import CourseSection from '../Components/HomeSections/SectionCourse/CourseSection'
import SectionFourth from '../Components/HomeSections/SectionFourth/SectionFourth'
import SectionGellary from '../Components/HomeSections/SectionGellary/SectionGellary'

const Home = () => {

    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send?phone=919630020141`
        window.open(url, '_blank', 'noreferrer');
    };


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <SecondHeader />
            <Navbar />
            <div style={{ position: 'fixed', width: '100%', zIndex: 100000, top: isSticky ? '0' : 'auto' }}>
                {isSticky && <Navbar />}
            </div>
            <SectionOne />
            <BannerSection />
            <CourseSection />
            <SectionTwo />
            <SectionThree />
            <SectionFourth />
            <SectionGellary />
            <SecondFooter />
            <Footer />
            <div style={{ position: 'fixed', left: '-45px', top: '95%', transform: 'translateY(-50%)', padding: '10px', width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <Button variant="contained" color="primary"
                    onClick={handleWhatsapp}
                    sx={{
                        textTransform: 'none',
                        background: '#28B71D',
                        boxShadow: '0px 3px 8px 0px rgba(0, 0, 0, 0.24)',
                        borderRadius: '40px',
                        gap: '5px',
                        fontWeight: '600',
                        fontSize: '14px',
                        '&:hover': {
                            background: '#28B71D',
                        },
                    }}
                >
                    <img alt='' width={'15%'} src={whatsAppSvg} />
                    WhatsApp Us
                </Button>
            </div>

        </div>
    )
}

export default Home
