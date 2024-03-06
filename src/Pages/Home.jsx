import { Box, Button, Typography } from '@mui/material'
import React from 'react'
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

    return (
        <div>
            <Header />
            <SecondHeader />
            <Navbar />
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
