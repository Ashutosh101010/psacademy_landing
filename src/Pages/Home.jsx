import { Box, Button, Dialog, Typography, useMediaQuery } from '@mui/material'
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
import landingImage from '../../images/landingImage.jpeg'
import CloseIcon from '@mui/icons-material/Close';
import webView from '../../images/Group1000001629.svg'
import mobile from '../../images/Group1000001623mobile1.svg'
import ContentSectionOne from '../Components/ContentSections/ContentSectionOne/ContentSectionOne'

const Home = () => {

    const isMobile = useMediaQuery("(min-width:600px)");
    const [message, setMessage] = React.useState('PS Team');
    const [showLandingImage, setShowLandingImage] = useState(true);
    const [isSticky, setIsSticky] = useState(false);

    const handleWhatsapp = (event) => {
        event.preventDefault();

        // Replace the phone number and construct the WhatsApp URL
        const phoneNumber = '+919926576466';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, '_blank');
    };

    const handleCloseModal = () => {
        setShowLandingImage(false);
    };

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
            {isSticky === false && <Navbar />}
            <div style={{ position: 'fixed', width: '100%', zIndex: 100000, top: isSticky ? '0' : 'auto' }}>
                {isSticky && <Navbar />}
            </div>
            <SectionOne />
            <BannerSection />
            <Box px={'0rem'} py={2} display={'flex'} justifyContent={'center'} onClick={handleWhatsapp}>
                {
                    isMobile ? <img style={{ zIndex: '1' }} width={'80%'} alt='' src={webView} /> : <img style={{ zIndex: '1' }} width={'100%'} alt='' src={mobile} />
                }
            </Box>
            <CourseSection />
            <SectionTwo />
            {/* <ContentSectionOne /> */}
            <SectionThree />
            <SectionFourth />
            <SectionGellary />
            <SecondFooter />
            <Footer />
            <div style={{ position: 'absolute', width: 'fit-content' }}>
                <div style={{ position: 'fixed', left: '-45px', top: '92%', transform: 'translateY(-50%)', padding: '10px', width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
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
            <Dialog open={showLandingImage} onClose={(e) => setShowLandingImage(false)}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "480px",
                        },
                    },
                    // zIndex: 10
                }}
            >
                <div className="landing-image-modal" style={{ maxHeight: '650px', overflowY: 'auto', margin: '5px' }}>
                    <CloseIcon sx={{ position: 'absolute', top: 10, right: 10 }} onClick={handleCloseModal} />
                    <iframe style={{ width: '100%', height: '100%', border: 'none' }} src='https://forms.classiolabs.com/?instituteid=94' />
                </div>
            </Dialog>
        </div>
    )
}

export default Home
