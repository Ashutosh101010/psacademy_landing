import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import contactsvg from '../../images/contactIcon.svg'
import emailLogo from '../../images/emailIcon.svg'
import appleStore from '../../images/applestoresvg.svg'
import playStore from '../../images/playstoresvg.svg'
import windowsStore from '../../images/windowsstoresvg.svg'
import CourseNetwrok from '../Network';

const SecondFooter = () => {

    const isMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    const [windowsUrl, setWindowsUrl] = useState([]);
    const instId = 94;

    const getInstituteList = async () => {
        const response = await CourseNetwrok.fetchInstitute(instId);
        setWindowsUrl(response?.institute?.instituteAppSettingsModals);
    };
    useEffect(() => {
        getInstituteList();
    }, []);

    const handleWindowsUrl = () => {
        window.location.href = `${windowsUrl?.windowsUrl}`
    };

    const handleNavigatePolicy = (event) => {
        event.stopPropagation();
        navigate('/privacypolicy');
    };

    const handleNavigateTerm = (event) => {
        event.stopPropagation();
        navigate('/termcondition');
    };
    const handleNavigateRefund = (event) => {
        event.stopPropagation();
        navigate('/refundpolicy');
    };

    const handleClick = () => {
        window.location.href = 'mailto:academyps123@gmail.com';
    };

    const handleClickPhone = () => {
        window.location.href = 'tel:0731-4001178'
    };

    const handleClickPhone1 = () => {
        window.location.href = 'tel:9826-063466'
    };

    const handleClickPhone2 = () => {
        window.location.href = 'tel:9926-576466'
    };

    const handlePlayStore = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.classiolabs.psacademy&pcampaignid=web_share'
    };

    const handleComingSoon = () => {

    };

    return (
        <Box sx={{ flexGrow: 1, background: '#540000' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8} padding={'25px 15px 15px 25px'}>
                    <Box pb={3} pl={[1, 10]}>
                        <Typography
                            fontSize={'20px'}
                            fontWeight={'700'}
                            fontFamily={'Inter'}
                            color={'#fff'}
                            lineHeight={'24px'}
                            textAlign={isMobile ? "start" : "center"}
                        >
                            Admission Office
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'#fff'}
                            lineHeight={'14px'}
                            display={['grid', 'flex']}
                            justifyContent={'flex-start'}
                            alignItems={'baseline'}
                            textAlign={isMobile ? "start" : "center"}
                        >
                            <p style={{ color: '#fff', fontFamily: 'Inter', fontWeight: '400', fontSize: '15px', width: isMobile ? '8%' : '100%' }}>Centre 1 :</p>G-10, Veda Business Park, Bhawarkua Square, Indore, Madhya Pradesh 452014
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'#fff'}
                            lineHeight={'14px'}
                            display={['grid', 'flex']}
                            justifyContent={'flex-start'}
                            alignItems={'baseline'}
                            textAlign={isMobile ? "start" : "center"}
                        >
                            <p style={{ color: '#fff', fontFamily: 'Inter', fontWeight: '400', fontSize: '15px', width: isMobile ? '8%' : '100%' }}>Centre 2 :</p>206, Ranawat Trade Centre, Bhawarkuan Square, Indore, Madhya Pradesh 452001
                        </Typography>
                    </Box>
                    <Box pl={[0.5, 10]}>
                        <Typography
                            fontSize={'20px'}
                            fontWeight={'700'}
                            fontFamily={'Inter'}
                            color={'#fff'}
                            lineHeight={'24px'}
                            pb={2}
                            width={['100%', '68%']}
                            textAlign={['center', 'start']}
                        >
                            Contact Us
                        </Typography>
                        <Box
                            sx={{
                                display: ['grid', 'flex'],
                                justifyContent: ['center', 'flex-start'],
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                <img alt=''
                                    onClick={handleClick}
                                    style={{
                                        width: isMobile ? '7.5%' : '5.5%'
                                    }}
                                    src={emailLogo} />
                                <Typography
                                    onClick={handleClick}
                                    sx={{
                                        color: '#fff',
                                        // display: ['none', 'flex'],
                                        cursor: 'pointer',
                                        fontSize: '15px'
                                    }}
                                >
                                    academyps123@gmail.com
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <img
                                    alt=''
                                    onClick={handleClickPhone}
                                    style={{
                                        width: isMobile ? '6.5%' : '9.8%'
                                    }}
                                    src={contactsvg}
                                />
                                <Typography
                                    sx={{
                                        color: '#fff',
                                        display: 'flex',
                                        // cursor: 'pointer',
                                        fontSize: '14px',
                                        gap:'5px'
                                    }}
                                >
                                    <span style={{ cursor: 'pointer', }} onClick={handleClickPhone} >07314001178</span>
                                    / <span style={{ cursor: 'pointer', }} onClick={handleClickPhone1} >9826063466</span>
                                    /<span style={{ cursor: 'pointer', }} onClick={handleClickPhone2}>9926576466</span>
                                </Typography>
                            </Box>
                        </Box>
                        {/* <Typography
                            fontSize={'15px'}
                            fontWeight={'500'}
                            fontFamily={'Inter'}
                            color={'#fff'}
                            lineHeight={'24px'}
                            width={['100%', '68%']}
                            textAlign={['center', 'start']}
                        >
                            PS Academy does not want to pen down a success story but we want to create a successful generation.
                            We believe in shaping the future of every student in the best way possible.
                        </Typography> */}
                        <Box
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'center'}
                            gap={'10px'}
                            mt={2}
                        >
                            <img style={{ cursor: 'pointer' }} onClick={handlePlayStore} width={isMobile ? '14.5%' : '35%'} alt='' src={playStore} />
                            <img style={{ cursor: 'pointer' }} onClick={handleComingSoon} width={isMobile ? '12%' : '30%'} alt='' src={appleStore} />
                            <img style={{ cursor: 'pointer' }} onClick={handleWindowsUrl} width={isMobile ? '13%' : '32%'} alt='' src={windowsStore} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <iframe
                        style={{
                            width: isMobile ? '80%' : '100%'
                        }}
                        height="250"
                        src="https://www.youtube.com/embed/WTXTCoLBlkY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SecondFooter