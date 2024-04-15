import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import backgroundImage from './Images/banner-bottom.png'
import director from './Images/directorsvg.svg'
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import checkBoxsvg from './Images/redcheckbox.svg'
import Typewriter from '../../Typewritter';



const SectionOne = () => {

    const theme = useTheme();
    const mobile = useMediaQuery("(min-width:600px)");

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Inter , sans-serif',
        fontWeight: '700',
        fontSize: mobile ? '14px' : '13px'
    }));

    return (
        <Box
            sx={{
                flexGrow: 1,
                // backgroundImage: `url(${backgroundImage})`,
                width: '100%',
                height: '100%',
                // paddingTop: '5px',
                // pt: '10px',
                background: '#420000',
                // backgroundSize: 'cover', // or 'contain' depending on your needs
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                sx={{
                    // flexGrow: 1,
                    // backgroundImage: `url(${backgroundImage})`,
                    // backgroundSize: 'cover', // or 'contain' depending on your needs
                    // backgroundRepeat: 'no-repeat',
                    // borderBottom: mobile ? '' : '1px solid #8f7e7e00'
                    // background: 'linear-gradient(161deg, #FFFCFC 0%, #FF0000 41%, transparent)'
                    padding: ['1rem', '3rem']
                }}
            >
                <Grid container spacing={2} mt={'0px'}
                    sx={{
                        borderBottom: '6px solid #FF0000',
                    }}
                    pt={2}
                >
                    <Grid item xs={12} sm={6} md={6} mt={0} mb={4} padding={mobile ? '0px' : '30px'}>
                        <Grid container spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Grid item xs={12} sm={12} md={12} ml={[2, 0]} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                                <Box
                                    sx={{
                                        width: mobile ? '70%' : '100%',
                                        pt: 1
                                    }}
                                >
                                    <Typography width={mobile ? '65%' : '100%'}>
                                        <Item>🏆 Pioneer in UPSC-MPPSC Preparation</Item>
                                    </Typography>
                                    <Box mt={3}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter , sans-serif',
                                                fontWeight: '700',
                                                color: '#fff',
                                                fontSize: mobile ? '35px' : '24px',
                                            }}
                                        >
                                            Best <Typewriter text="UPSC Coaching" delay={100} />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter , sans-serif',
                                                fontWeight: '700',
                                                color: '#fff',
                                                fontSize: mobile ? '35px' : '24px',
                                                pb: '20px'
                                            }}
                                        >
                                            Near You.
                                        </Typography>
                                        {/* <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: '500',
                                                color: '#fff',
                                                fontSize: '17px',
                                                lineHeight: '36px',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            Learning is the process of acquiring new or modifying existing
                                        </Typography> */}
                                        {/* <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: '500',
                                                color: '#fff',
                                                fontSize: '17px',
                                                lineHeight: '36px',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            knowledge, behaviours, skills, values or preferences.
                                        </Typography> */}
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: '500',
                                                color: '#fff',
                                                fontSize: '14px',
                                                lineHeight: ['24px', '36px'],
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px',
                                                py:0.3
                                            }}
                                        >
                                            <img alt='' style={{ position: 'relative', bottom: mobile ? '0px' : '10px' }} src={checkBoxsvg} />   Guidance from Esteemed Mentor, Pradeep Srivastava Sir.
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: 'bolder',
                                                color: '#fff',
                                                fontSize: '18px',
                                                lineHeight: ['24px', '36px'],
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px',
                                                py:0.3
                                            }}
                                        >
                                            <img alt='' style={{ position: 'relative', bottom: mobile ? '0px' : '0px' }} src={checkBoxsvg} /> First ever PSC Career Assessment Test ®
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: '500',
                                                color: '#fff',
                                                fontSize: '14px',
                                                lineHeight: ['24px', '36px'],
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px',
                                                py:0.3
                                            }}
                                        >
                                            <img alt='' style={{ position: 'relative', bottom: mobile ? '0px' : '10px' }} src={checkBoxsvg} /> Exhaustive Mock Test Series and revision classes.
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: '500',
                                                color: '#fff',
                                                fontSize: '14px',
                                                lineHeight: ['24px', '36px'],
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px',
                                                py:0.3
                                            }}
                                        >
                                            <img alt='' style={{ position: 'relative', bottom: mobile ? '0px' : '10px' }} src={checkBoxsvg} />   Hybrid module – Offline and Recorded Lectures
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        <Box display={'flex'} justifyContent={'start'} alignItems={'center'}>
                            <img alt=''
                                style={{
                                    position: 'relative',
                                    top: mobile ? '0px' : '0px',
                                    width: mobile ? '60%' : '100%',
                                    // borderBottomRightRadius: mobile ? '175px' : '10px',
                                    marginBottom: mobile ? '0px' : '0px'
                                }}
                                src={director} />
                        </Box>
                    </Grid>
                    {/* <hr color='#fff' style={{ height: '14px', position: 'relative', top: mobile ? '612px' : '990px', width: '100%' }} /> */}
                </Grid>
            </Box>
        </Box>
    )
}

export default SectionOne