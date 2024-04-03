import { Box, Button, Grid, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import WebView from './Images/Group1000001624web1.svg'
import MobileView from './Images/Group1000001623mobile1.svg'
import banneImage1 from './Images/banneImage1.svg'
import banneImage2 from './Images/banneImage2.svg'
import banneImage3 from './Images/banneImage3.svg'
import banneImage4 from './Images/banneImage4.svg'
import fullbanner from './Images/fullbanner.svg'
import smssvg from './Images/smssvg.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../index.css';

const AssementTest = () => {

    const isMobile = useMediaQuery("(min-width:600px)");

    const [message, setMessage] = React.useState('I am interested in the Answer Writing Program, Kindly guide me with that.');

    const handleWhatsapp = (event) => {
        event.preventDefault();

        // Replace the phone number and construct the WhatsApp URL
        const phoneNumber = '+919926576466';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+Thanks%21&type=phone_number&app_absent=0`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, '_blank');
    };


    return (
        <div style={{ paddingLeft: isMobile ? '7rem' : '0rem', paddingRight: isMobile ? '7rem' : '0rem', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <Box
                sx={{
                    py: 2,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {
                    isMobile ? <img width={'80%'} alt='' onClick={handleWhatsapp} src={WebView} /> : <img width={'100%'} alt='' onClick={handleWhatsapp} src={MobileView} />
                }
            </Box>
            <Box
                sx={{
                    py: 2,
                    px: 2,
                    display: ['grid', 'flex'],
                    justifyContent: 'center'
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6} display={'flex'} justifyContent={'flex-end'} >
                            <img width={isMobile ? '80%' : '100%'} alt='' src={banneImage1} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <img width={isMobile ? '80%' : '100%'} alt='' src={banneImage2} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} display={'flex'} justifyContent={'flex-end'}>
                            <img width={isMobile ? '80%' : '100%'} alt='' src={banneImage3} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <img width={isMobile ? '80%' : '100%'} alt='' src={banneImage4} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                sx={{
                    py: 2,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img width={isMobile ? '80%' : '100%'} alt='' src={fullbanner} />
            </Box>
            <Box
                sx={{
                    py: 2,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button
                    onClick={handleWhatsapp}
                    sx={{
                        textTransform: 'none',
                        background: '#FE9805',
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        lineHeight: '24px',
                        fontSize: ['12px','16px'],
                        color: '#000',
                        gap: '10px',
                        width: ['90%', '40%'],
                        p: '0.9rem',
                        borderRadius: '0px',
                        '&:hover': {
                            backgroundColor: '#FE9805',
                        },
                    }}
                >
                    <img alt='' src={smssvg} />
                    Book your Free Counseling Session Now
                </Button>
            </Box>
        </div>
    )
}

export default AssementTest