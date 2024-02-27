import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import SecondFooter from '../Components/SecondFooter'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <SecondHeader />
            <Navbar />
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
                        fontWeight={'600'}
                    >
                        PS Academy Privacy and Security Policy
                    </Typography>
                </Box>
                <Typography
                    fontSize={['20px']}
                    textAlign={'end'}
                    fontWeight={'600'}
                    p={2}
                >
                    Last Updated: 27 Feb 2024
                </Typography>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'center'}
                        fontWeight={'500'}
                    >
                        Welcome to PS Academy! We are committed to safeguarding your privacy and ensuring the security of your data. This Privacy and Security Policy outlines how we collect, use, and protect your information when you use our website, mobile application (App), and related services. By accessing our services, you agree to the terms outlined in this policy.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        1. Information We Collect:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Personal Information:</span>We collect personal information, such as your name, contact details, and address, for registration and account creation.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Payment Information:</span>When you make a purchase, we collect necessary payment details through our secure payment gateway, Quickpay, provided by IDBI Bank.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Usage Data:</span>We gather information about your interactions with our website and App to improve our services and user experience.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        2. How We Use Your Information:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Course Delivery: </span>Your personal information is used to deliver purchased courses, study material, recorded videos, and facilitate live classes.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Transaction Processing: </span>Payment information is securely processed through Quickpay to complete your transactions.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (c)<span style={{ fontWeight: '500' }}>Communication: </span>We may use your contact details to send important updates, notifications, and promotional materials related to our offerings.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        3. Data Security:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Secure Transactions: </span>We prioritize the security of your payment transactions by using Quickpay, a secure payment gateway provided by IDBI Bank.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Encryption: </span>We may disclose your information if required by law or in response to valid requests from governmental authorities.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (c)<span style={{ fontWeight: '500' }}>Legal Requirements: </span>All data transmission between your device and our servers is encrypted to prevent unauthorized access.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        4. Data Sharing and Disclosure:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Third-Party Services: </span>We may share your information with third-party service providers for the purpose of delivering our services, but we do not sell or trade your data.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Legal Compliance: </span>We may disclose your information if required by law or in response to a legal request.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        5. Your Choices:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Opt-Out: </span>You can opt-out of receiving promotional communications by using the unsubscribe option in our emails.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Access and Update: </span>You can access and update your personal information through your account settings.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        6. Refunds and Exchanges:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Refund Policy:: </span>Refunds are processed in accordance with our refund policy, available on our website and App.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Exchanges: </span>We do not support exchanges for digital products, but we address issues on a case-by-case basis.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        8. Contact Information:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        If you have any questions or concerns about our Privacy and Security Policy, please contact us at <a href='care@psacademy.co.in.' >care@psacademy.co.in.</a>.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        9. Changes to this Policy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        We reserve the right to update and revise this Privacy and Security Policy. Any changes will be effective immediately upon posting on our website and App.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Thank you for choosing PS Academy!
                    </Typography>
                </Box>
            </Box>
            <SecondFooter />
            <Footer />
        </>
    )
}

export default PrivacyPolicy