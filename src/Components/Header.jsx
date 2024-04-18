import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import { keyframes } from '@emotion/react';

// Define the shaking animation
const shakeAnimation = keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30% {
        transform: translateX(-3px);
    }
    20%, 40% {
        transform: translateX(3px);
    }
    50%, 70% {
        transform: translateX(-2px);
    }
    60%, 80% {
        transform: translateX(2px);
    }
    90% {
        transform: translateX(-1px);
    }
    100% {
        transform: translateX(0);
    }
`;

const Header = () => {

    const handlePlayStore = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.classiolabs.psacademy&pcampaignid=web_share'
    };

    return (
        <>
            <Grid container spacing={1}
                sx={{
                    background: '#fff',
                    py: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                }}
            >
                <Grid item xs={12} sm={6} md={6} textAlign={['center', 'end']} display={'flex'} justifyContent={['center', 'end']}>
                    <Typography fontWeight={'700'}>
                        Registration Open for Scholarship Program
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} justifyContent={['center', 'start']} display={'flex'}>
                    <Button
                        onClick={handlePlayStore}
                        sx={{
                            background: '#ECE2E2',
                            borderRadius: '8px',
                            color: '#000',
                            fontWeight: '400',
                            lineHeight: '24px',
                            textTransform: 'none',
                            border: '1px solid #9D0009',
                            width: ['50%', '15%'],
                            '&:hover': {
                                backgroundColor: '#ECE2E2',
                            },
                            animation: `${shakeAnimation} 2s infinite ease-in-out`,
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