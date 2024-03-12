import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import backgroundImage from './Images/banner-bottom.png'
import director from './Images/directorsvg.svg'
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import checkBoxsvg from './Images/checkBoxsvg.svg'
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
        fontSize: mobile ? '18px' : '14px'
    }));

    return (
        <Box
            sx={{
                flexGrow: 1,
                // backgroundImage: `url(${backgroundImage})`,
                width: '100%',
                height: '100%',
                paddingTop: '5px',
                pt: '10px',
                background: '#9A0000',
                // backgroundSize: 'cover', // or 'contain' depending on your needs
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                sx={{
                    // flexGrow: 1,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover', // or 'contain' depending on your needs
                    backgroundRepeat: 'no-repeat',
                    borderBottom: mobile ? '' : '1px solid #8f7e7e00'
                }}
            >
                <Grid container spacing={2} mt={'0px'} pb={mobile ? '0px' : '12px'}>
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
                                        width: mobile ? '70%' : '100%'
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
                                                fontSize: mobile ? '35px' : '27px',
                                            }}
                                        >
                                            Best <Typewriter text="UPSC Coaching" delay={100} />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter , sans-serif',
                                                fontWeight: '700',
                                                color: '#fff',
                                                fontSize: mobile ? '35px' : '27px',
                                            }}
                                        >
                                            Near You.
                                        </Typography>
                                        <Typography
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
                                        </Typography>
                                        <Typography
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
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: '500',
                                                color: '#fff',
                                                fontSize: '17px',
                                                lineHeight: ['30px', '36px'],
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItem: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            <img alt='' style={{ position: 'relative', bottom: mobile ? '0px' : '12px' }} src={checkBoxsvg} /> Mentorship by Pradeep Srivastava Sir
                                        </Typography>
                                        <Typography
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
                                            <img alt='' src={checkBoxsvg} /> Daily Current Affairs.
                                        </Typography>
                                        <Typography
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
                                            <img alt='' src={checkBoxsvg} /> Mock Test Series.
                                        </Typography>
                                        <Typography
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
                                            <img alt='' style={{ position: 'relative', bottom: mobile ? '0px' : '14px' }} src={checkBoxsvg} /> Answer Writing Skill Development Program
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
                            <img alt='' style={{ position: 'relative', top: mobile ? '0px' : '12px', width: mobile ? '60%' : '100%', borderBottomRightRadius: mobile ? '175px' : '10px', marginBottom: mobile ? '18px' : '0px' }} src={director} />
                        </Box>
                    </Grid>
                    {/* <hr color='#fff' style={{ height: '14px', position: 'relative', top: mobile ? '612px' : '990px', width: '100%' }} /> */}
                </Grid>
            </Box>
        </Box>
    )
}

export default SectionOne