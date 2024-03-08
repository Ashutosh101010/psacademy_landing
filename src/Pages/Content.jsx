import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import Navbar from '../Components/Navbar'
import SecondFooter from '../Components/SecondFooter'
import Footer from '../Components/Footer'
import { Button } from '@mui/material'
import whatsAppSvg from '../../images/whatsAppSvg.svg';
import SectionThree from '../Components/HomeSections/SectionThree/SectionThree'
import SectionTwo from '../Components/HomeSections/SectionTwo/SectionTwo'
import ContentSectionOne from '../Components/ContentSections/ContentSectionOne/ContentSectionOne'
import ContentSectionTwo from '../Components/ContentSections/ContentSectionTwo/ContentSectionTwo'
import ContentBannerSection from '../Components/ContentSections/ContentBanner/ConentBannerSection'
import CalenderSection from '../Components/ContentSections/CalenderSection/CalenderSection'
import SecondBlogSection from '../Components/ContentSections/CalenderSection/SecondBlogSection'
import CurrentAffairSection from '../Components/ContentSections/CurrentAffairSection/CurrentAffairSection'

const Content = () => {

    const [message, setMessage] = React.useState('PS Team');

    const handleWhatsapp = (event) => {
        event.preventDefault();

        // Replace the phone number and construct the WhatsApp URL
        const phoneNumber = '+919926576466';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, '_blank');
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
            <ContentSectionTwo />
            {/* <SectionOne /> */}
            {/* <BannerSection /> */}
            {/* <CourseSection /> */}
            <CurrentAffairSection />
            <CalenderSection />
            <ContentBannerSection />
            <SecondBlogSection />
            <SectionThree />
            {/* <SectionFourth /> */}
            {/* <SectionGellary /> */}
            <ContentSectionOne />
            <SectionTwo />
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

export default Content