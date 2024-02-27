import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SecondFooter = () => {

    const isMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();

    const handleNavigatePolicy = (event) => {
        event.stopPropagation();
        navigate('/privacyPolicy');
    };

    const handleNavigateTerm = (event) => {
        event.stopPropagation();
        navigate('/termCondition');
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
                            color={'white'}
                            lineHeight={'24px'}
                            textAlign={isMobile ? "start" : "center"}
                        >
                            Admission Office
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            display={['grid', 'flex']}
                            justifyContent={'flex-start'}
                            alignItems={'baseline'}
                            textAlign={isMobile ? "start" : "center"}
                        >
                            <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: '400', fontSize: '15px', width: isMobile ? '8%' : '100%' }}>Centre 1 :</p>G-10, Veda Business Park, Bhawarkua Square, Indore, Madhya Pradesh 452014
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'400'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            display={['grid', 'flex']}
                            justifyContent={'flex-start'}
                            alignItems={'baseline'}
                            textAlign={isMobile ? "start" : "center"}
                        >
                            <p style={{ color: 'white', fontFamily: 'Inter', fontWeight: '400', fontSize: '15px', width: isMobile ? '8%' : '100%' }}>Centre 2 :</p>206, Ranawat Trade Centre, Bhawarkuan Square, Indore, Madhya Pradesh 452001
                        </Typography>
                    </Box>
                    <Box pl={[0.5, 10]}>
                        <Typography
                            fontSize={'20px'}
                            fontWeight={'700'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            pb={2}
                            width={['100%', '68%']}
                            textAlign={['center', 'start']}
                        >
                            PS Academy
                        </Typography>
                        <Typography
                            fontSize={'15px'}
                            fontWeight={'500'}
                            fontFamily={'Inter'}
                            color={'white'}
                            lineHeight={'24px'}
                            width={['100%', '68%']}
                            textAlign={['center', 'start']}
                        >
                            PS Academy does not want to pen down a success story but we want to create a successful generation.
                            We believe in shaping the future of every student in the best way possible.
                        </Typography>
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
                    <Box
                        display={'flex'}
                        gap={'10px'}
                        padding={'5px'}
                    >
                        <Typography
                            color={'#979595'}
                            fontFamily={'Inter'}
                            fontSize={'16px'}
                            fontWeight={'400'}
                            lineHeight={'24px'}
                        >
                            FAQs |
                        </Typography>
                        <Typography
                            color={'#979595'}
                            fontFamily={'Inter'}
                            fontSize={'16px'}
                            fontWeight={'400'}
                            lineHeight={'24px'}
                            onClick={handleNavigatePolicy}
                        >
                            Privacy Policy  |
                        </Typography>
                        <Typography
                            color={'#979595'}
                            fontFamily={'Inter'}
                            fontSize={'16px'}
                            fontWeight={'400'}
                            lineHeight={'24px'}
                            onClick={handleNavigateTerm}
                        >
                            Terms and Conditions
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SecondFooter