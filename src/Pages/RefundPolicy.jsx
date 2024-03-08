import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SecondFooter from '../Components/SecondFooter'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import whatsAppSvg from '../../images/whatsAppSvg.svg';

const RefundPolicy = () => {

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
                        Refund Policy
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Cancellation:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        At PS Academy, we adhere to a strict policy regarding cancellations. Once an order is confirmed, it cannot be canceled. However, PS Academy reserves the right to cancel any order at our discretion, especially if we are unable to deliver the order satisfactorily or if there is a violation of our Terms of Use.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Refunds:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        PS Academy typically does not offer refunds for confirmed orders. However, we may consider refunds, discounts, or other forms of compensation in select circumstances, solely at our discretion and subject to certain conditions.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Cancellation Policy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Once you have enrolled in any course, class, or material with PS Academy, our standard policy typically prohibits refunds or money transfers for adjustments against other students. However, we understand that circumstances may arise where adjustments are necessary. In such cases, exceptions may be considered for course changes, with each situation evaluated individually on a case-by-case basis. We strive to accommodate your needs while maintaining fairness and consistency in our policies.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Extra Payment Refund Policy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        If PS Academy receives excess payments for any course, we will endeavor to refund the surplus amount within 15 days upon submission of appropriate evidence. Refunds may be processed through methods such as NEFT bank transfers from PS Academy offices. Please note that any damages resulting solely from bank processing or student negligence are not the liability of PS Academy. Students are encouraged to address bank-related concerns directly with the bank or appropriate consumer forums if necessary. PS Academy strives to assist students within the constraints of time and resources.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                    >
                        <span style={{ fontWeight: '700' }}>NOTE: </span>Please note that refunds, if applicable, will be subject to a maximum limit of 30% of the fees, and taxes will be deducted accordingly. Additionally, any refunds or discrepancies need to be reported within 10 calendar days.
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

export default RefundPolicy