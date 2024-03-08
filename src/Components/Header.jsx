import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'

const Header = () => {

    const handlePlayStore = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.classiolabs.psacademy&pcampaignid=web_share'
    };

    return (
        <>
            <Grid container spacing={2}
                sx={{
                    background: '#FFD80D',
                    padding: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                }}
            >
                <Grid item xs={12} sm={6} md={6} textAlign={['center', 'end']}>
                    <Typography fontWeight={'700'}>
                        Registration Open for Interview Guidance Program
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} display={'flex'} justifyContent={['center', 'start']}>
                    <Button
                        onClick={handlePlayStore}
                        sx={{
                            background: '#9D0009',
                            borderRadius: '8px',
                            color: 'white',
                            fontWeight: '400',
                            lineHeight: '24px',
                            textTransform: 'none',
                            width: ['80%', '15%'],
                            '&:hover': {
                                backgroundColor: '#9D0009', // Change to desired hover background color
                            },
                        }}
                    >
                        Register Now
                    </Button>
                </Grid>
            </Grid>
            {/* <Box>
                <Typography fontWeight={'700'}>
                    Registration Open for Interview Guidance Program
                </Typography>
            </Box>
            <Box>
                <Button
                    sx={{
                        background: '#9D0009',
                        borderRadius: '8px',
                        color: 'white',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textTransform: 'none'
                    }}
                >
                    Register Now
                </Button>
            </Box> */}
        </>
    )
}

export default Header