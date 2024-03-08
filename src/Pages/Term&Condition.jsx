import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SecondFooter from '../Components/SecondFooter'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import whatsAppSvg from '../../images/whatsAppSvg.svg';

const TermCondition = () => {

    const [isSticky, setIsSticky] = useState(false);

    const [message, setMessage] = React.useState('PS Team');

    const handleWhatsapp = (event) => {
        event.preventDefault();

        // Replace the phone number and construct the WhatsApp URL
        const phoneNumber = '+919926576466';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, '_blank');
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <SecondHeader />
            <Navbar />
            <div style={{ position: 'fixed', width: '100%', zIndex: 100000, top: isSticky ? '0' : 'auto' }}>
                {isSticky && <Navbar />}
            </div>
            <Box m={'20px'}>
                <Box p={2}
                    sx={{
                        background: '#540005',
                        color: 'white'
                    }}
                >
                    <Typography
                        fontSize={['25px', '40px']}
                        textAlign={'center'}
                        fontWeight={'500'}
                        color={'white'}
                    >
                        Term & Condition
                    </Typography>
                </Box>
                <Typography
                    fontSize={['20px']}
                    textAlign={'end'}
                    fontWeight={'600'}
                    p={2}
                >
                    Effective Date : 22 Feb 2024
                </Typography>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'center'}
                        fontWeight={'400'}
                    >
                        These Terms and Conditions ("Terms") govern your use of the PS Academy Indore Educational Platform ("Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the Platform.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        1. Acceptance of Terms:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        By using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. PS Academy Indore reserves the right to modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes. Your continued use of the Platform after any modifications indicates your acceptance of the revised Terms.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        2. Use of the Platform:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        You may use the Platform for educational purposes only. You agree not to use the Platform for any unlawful or unauthorized purpose. You are solely responsible for your conduct and any data, text, information, usernames, graphics, images, photos, profiles, audio, video, and links ("Content") that you submit, post, and display on the Platform.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        3. Registration:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        In order to access certain features of the Platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        4. Privacy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        5. Intellectual Property:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        PS Academy Indore retains all rights, title, and interest in and to the Platform, including all intellectual property rights. You may not use the Platform for any purpose not expressly permitted by these Terms. You agree not to modify, adapt, translate, or reverse engineer any portion of the Platform.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        6. User Content:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        By submitting Content to the Platform, you grant PS Academy Indore a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the Content in connection with the Platform and PS Academy Indore's business, including without limitation for promoting and redistributing part or all of the Platform.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        7. Third-Party Links:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        The Platform may contain links to third-party websites or resources. PS Academy Indore is not responsible for the availability or accuracy of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        8. Termination:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        PS Academy Indore may suspend or terminate your access to the Platform at any time, with or without cause, and with or without notice, for any reason or no reason.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        9. Disclaimer of Warranties:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        The Platform is provided "as is" and "as available" without any warranties of any kind, express or implied. PS Academy Indore does not warrant that the Platform will be uninterrupted or error-free, that defects will be corrected, or that the Platform is free of viruses or other harmful components.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        10. Limitation of Liability:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        In no event shall PS Academy Indore be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of the Platform.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        11. Governing Law:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        12. Contact Us:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        If you have any questions about these Terms, please contact us at <a href='care@psacademy.co.in.' >care@psacademy.co.in.</a>

                        By using the PS Academy Indore Educational Platform, you signify your agreement to these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use the Platform.
                    </Typography>
                </Box>
            </Box>
            <div style={{ position: 'fixed', left: '-45px', top: '95%', transform: 'translateY(-50%)', padding: '10px', width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <Button variant="contained" color="primary"
                    onClick={handleWhatsapp}
                    sx={{
                        textTransform: 'none',
                        background: '#28B71D',
                        boxShadow: '0px 3px 8px 0px rgba(0, 0, 0, 0.24)',
                        borderRadius: '40px',
                        gap: '5px',
                        fontWeight: '600',
                        fontSize: '14px',
                        '&:hover': {
                            background: '#28B71D',
                        },
                    }}
                >
                    <img alt='' width={'15%'} src={whatsAppSvg} />
                    WhatsApp Us
                </Button>
            </div>
            <SecondFooter />
            <Footer />
        </>
    )
}

export default TermCondition