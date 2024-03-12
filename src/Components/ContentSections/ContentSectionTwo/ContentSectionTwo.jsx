import React from 'react';
import bgImage from './Images/Group1000001605.svg'
// import USC from './Images/USC.svg'
import USC from './Images/USC.svg'
import Ellipse1080 from './Images/Ellipse1080.svg'
import magazine from './Images/magazine.svg'
import paper from './Images/paper.svg'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import checkBoxsvg from './Images/checkBoxsvg.svg'

const ContentSectionTwo = () => {

    const isMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover', // or 'contain' depending on your needs
                backgroundRepeat: 'no-repeat',
                height: '100%',
                // width: '100%',
                paddingTop: '5px',
                p: '5px',
            }}
        >
            <Grid container spacing={1} pt={5}>
                {/* <hr color='#fff' style={{ height: '30px', position: 'relative', top: '520px', width: '100%' }} /> */}
                <Grid item xs={12} sm={6} md={6} position={'relative'} left={['0px', '23rem']}>
                    <Typography
                        fontFamily={'Inter'}
                        fontWeight={'700'}
                        fontSize={['35px', '46px']}
                        color={'white'}
                        lineHeight={'51px'}
                    >
                        Daily Current Affairs Notes
                    </Typography>
                    <Typography
                        fontFamily={'Inter'}
                        fontWeight={'700'}
                        fontSize={'30px'}
                        color={'white'}
                        lineHeight={'51px'}
                    >
                        For UPSC-MPPSC Prelim & Mains Exam
                    </Typography>
                    <Typography
                        fontFamily={'Inter'}
                        fontWeight={'500'}
                        fontSize={'16.5px'}
                        color={'white'}
                        lineHeight={'31px'}
                    >
                        <span style={{ color: '#FFA3A3' }} >Save time on news consumption!</span> Our team provides concise
                    </Typography>
                    <Typography
                        fontFamily={'Inter'}
                        fontWeight={'500'}
                        fontSize={'16.5px'}
                        color={'white'}
                        lineHeight={'31px'}
                    >
                        exam-centric current affairs summaries for both Prelims and Mains exams.
                    </Typography>
                    <Typography
                        fontFamily={'Inter'}
                        fontWeight={'500'}
                        fontSize={'16.5px'}
                        color={'white'}
                        lineHeight={'31px'}
                    >
                        Our Summaries Notes sources such as -
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            color: '#fff',
                            fontSize: '17px',
                            lineHeight: '45px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItem: 'center',
                            gap: '8px'
                        }}
                    >
                        <img alt='' src={checkBoxsvg} />The Hindu Newspaper
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            color: '#fff',
                            fontSize: '17px',
                            lineHeight: '45px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItem: 'center',
                            gap: '8px'
                        }}
                    >
                        <img alt='' src={checkBoxsvg} />The Indian Express
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            color: '#fff',
                            fontSize: '17px',
                            lineHeight: '45px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItem: 'center',
                            gap: '8px'
                        }}
                    >
                        <img alt='' src={checkBoxsvg} />Rojgar Nirman
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            color: '#fff',
                            fontSize: '17px',
                            lineHeight: '45px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItem: 'center',
                            gap: '8px'
                        }}
                    >
                        <img alt='' src={checkBoxsvg} />Pratiyogita Darpan
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} p={4}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'end'}>
                                <img alt='' style={{ width: isMobile ? '30%' : '100%' }} src={USC} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <img alt='' style={{ width: isMobile ? '35%' : '100%' }} src={Ellipse1080} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'} mt={2}>
                                <img alt='' style={{ width: isMobile ? '80%' : '100%', position: 'relative', top: '30px', left: '-5px' }} src={paper} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} mb={2}>
                                <img alt='' style={{ width: isMobile ? '65%' : '100%', position: 'relative', top: '-10x', right: isMobile ? '160px' : '35px' }} src={magazine} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContentSectionTwo