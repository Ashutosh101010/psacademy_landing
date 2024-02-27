import React from 'react';
import backgroundImage from './Images/bgImage.svg'
import appLogo from './Images/appLogosvg.svg'
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import smssvg from './Images/smssvg.svg'

const SectionThree = () => {

    const isMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                paddingTop: '5px',
                pt: ['45px', '60px'],
                paddingBottom: '1px'
            }}>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                mb={[2, 5]}
            >
                <img width={isMobile ? '12%' : '65%'} alt='' src={appLogo} />
            </Box>
            <Box mb={5}>
                <Typography
                    fontWeight={'700'}
                    fontSize={['25px', '50px']}
                    fontFamily={'Inter'}
                    textAlign={'center'}
                    lineHeight={['30px', '45px']}
                    color={'white'}
                >
                    Answer Writing Skill Development Program
                </Typography>
                <Typography
                    fontWeight={'400'}
                    fontSize={['18px', '30px']}
                    fontFamily={'Inter'}
                    textAlign={'center'}
                    lineHeight={'60px'}
                    color={'white'}
                >
                    For English Medium & Hindi Medium
                </Typography>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Button
                        sx={{
                            textTransform: 'none',
                            background: '#FFD80D',
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            lineHeight: '24px',
                            fontSize: '16px',
                            color: '#000',
                            gap: '10px',
                            width: ['90%', '15%'],
                            borderRadius: '0px',
                            '&:hover': {
                                backgroundColor: '#FFD80D',
                            },
                        }}
                    >
                        <img alt='' src={smssvg} />
                        Join Now
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SectionThree