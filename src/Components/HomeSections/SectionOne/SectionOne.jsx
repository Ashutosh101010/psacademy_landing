import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import backgroundImage from './Images/bg1.svg'
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
                pt: '1px',
                background: '#9A0000',
                // backgroundSize: 'cover', // or 'contain' depending on your needs
                // backgroundRepeat: 'no-repeat',
            }}>
            <Grid container spacing={2}>
                <hr color='#fff' style={{ height: '14px', position: 'relative', top: mobile ? '575px' : '980px', width: '100%' }} />
                <Grid item xs={12} sm={6} md={6} mt={4} padding={mobile ? '0px' : '30px'}>
                    <Grid container spacing={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Grid item xs={12} sm={6} md={6} ml={[2, 0]}>
                            <Typography>
                                <Item>🏆 Pioneer in UPSC-MPPSC Preparation</Item>
                            </Typography>
                            <Box mt={3}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '700',
                                        color: '#fff',
                                        fontSize: mobile ? '44px' : '30px',
                                    }}
                                >
                                    Best <Typewriter text="UPSC Coaching" delay={100} />
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '700',
                                        color: '#fff',
                                        fontSize: mobile ? '44px' : '30px',
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
                                        lineHeight: '36px',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItem: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <img alt='' src={checkBoxsvg} /> Mentorship by Pradeep Srivastava Sir
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
                                    <img alt='' src={checkBoxsvg} /> Answer Writing Skill Development Program
                                </Typography>
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
                    <img alt='' style={{ position: 'relative', top: '4px', width: mobile ? '60%' : '100%' }} src={director} />
                </Grid>

            </Grid>
        </Box>
    )
}

export default SectionOne