import React from 'react';
import backgroundImage from './Images/bgImage.svg'
import appLogo from './Images/appLogosvg.svg'
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import smssvg from './Images/smssvg.svg'

const SectionThree = () => {

    const isMobile = useMediaQuery("(min-width:600px)");

    const[message, setMessage] = React.useState('I am interested in the Answer Writing Program, Kindly guide me with that.');

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
                        onClick={handleWhatsapp}
                        sx={{
                            textTransform: 'none',
                            background: '#FE9805',
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            lineHeight: '24px',
                            fontSize: '16px',
                            color: '#000',
                            gap: '10px',
                            width: ['90%', '15%'],
                            borderRadius: '0px',
                            '&:hover': {
                                backgroundColor: '#FE9805',
                            },
                        }}
                    >
                        <img alt='' src={smssvg} />
                        Coming Soon
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SectionThree