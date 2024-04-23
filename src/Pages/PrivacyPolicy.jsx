import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../Components/Header'
import SecondHeader from '../Components/SecondHeader'
import SecondFooter from '../Components/SecondFooter'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import whatsAppSvg from '../../images/whatsAppSvg.svg';

const PrivacyPolicy = () => {

    const [message, setMessage] = useState('PS Team');

    const handleWhatsapp = (event) => {
        event.preventDefault();

        // Replace the phone number and construct the WhatsApp URL
        const phoneNumber = '+919926576466';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, '_blank');
    };

    const [isSticky, setIsSticky] = useState(false);

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
            {isSticky === false && <Navbar />}
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
                        fontWeight={'600'}
                    >
                        Privacy Policy
                    </Typography>
                </Box>
                <Typography
                    fontSize={['20px']}
                    textAlign={'end'}
                    fontWeight={'600'}
                    p={2}
                >
                    Last Updated: 05 March 2024
                </Typography>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        The Privacy Policy outlined herein governs the practices of PS Academy's Website concerning the disclosure, collection, storage, Usage, and protection of Your information throughout Your engagement with the Website and associated Services.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        This policy outlines how We collect, Use, and protect Your data in accordance with the Information Technology Act, 2000 (“IT Act”), Information Technology (Intermediary Guidelines) Rules, 2011, and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. If You do not comprehend or agree with any aspect of this policy, it is advisable to refrain from utilizing the platform. Your continued Use of the platform signifies Your explicit consent to both the terms of the Privacy Policy and the Terms of Use.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        For the context of this Policy, accessing the Website, associated applications, study materials, test courses, video courses, and any other content provided or accessed through them collectively constitutes the 'Services.'
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        This Privacy Policy is an integral component of the Terms of Use governing PS Academy's Services and should be interpreted together. Terms capitalized herein but undefined shall hold the same meaning as provided in the Terms of Use.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        1. PS Academy Account: A unique account created for You to access Our Services or parts of Our Services.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        2. Affiliate: An entity that controls, is controlled by, or is under common control with PS Academy, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        3. PS Academy Platform: The online platform provided by PS Academy for accessing preparatory classes for MPPSC and UPSC exams.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        4. PS Academy (referred to as either "PS Academy," "We," "Us," or "Our" in this Policy): PS Academy, located at 206, Ranawat Trade Centre, Bhawarkuan Square, Indore, Madhya Pradesh 452001, India.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        5. Country: Refers to the jurisdiction where PS Academy operates, which is Madhya Pradesh, India.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        6. Device: Any Device that can access the PS Academy Platform, such as a computer, cellphone, or digital tablet.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        7. Personal Data: Any information that relates to an identified or identifiable individual.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        8. Service: Refers to the PS Academy Platform and associated Services provided by PS Academy.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        9. Service Provider: Any natural or legal person who processes data on behalf of PS Academy. This may include third-party companies or individuals employed by PS Academy to facilitate the service, provide the service on behalf of PS Academy, perform Services related to the service, or assist PS Academy in analyzing how the service is Used.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        10. Usage Data: Data collected automatically, either generated by Using the PS Academy Platform or from the platform infrastructure itself (for example, the duration of a page visit).
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                        lineHeight={'30px'}
                    >
                        11. You: The individual accessing or Using the PS Academy Platform, or the company, or other legal entity on behalf of which such individual is accessing or Using the platform, as applicable.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Information We Collect:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        1.<span style={{ fontWeight: '500' }}>Personal Information:</span>In the course of engaging with our service, we may request certain personal information from you. This includes data that identifies you individually, such as your email address, full name, phone number, date of birth, gender, and residential address, complete with pin code. This information is essential for registration and creation of account on Our platform.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        2.<span style={{ fontWeight: '500' }}>Payment Information:</span>When you engage in a transaction, we gather requisite payment particulars via our secure payment gateway, Quickpay, facilitated by IDBI Bank. This ensures the confidentiality and security of your financial information throughout the payment process.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        3.<span style={{ fontWeight: '500' }}>Usage Data:</span>We collect Usage Data automatically, including your IP address, browser type, visited pages, timestamps of visits, device identifiers, and other diagnostic information. This data helps us improve our services, troubleshoot issues, and enhance your user experience while ensuring your privacy is upheld.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        3.<span style={{ fontWeight: '500' }}>Mobile Data:</span>When you use our service on a mobile device, we automatically collect essential data like the type of device, its unique ID, IP address, operating system, browser type, and other diagnostic information. Additionally, we may gather data that your browser sends when accessing our service via mobile. This information aids in optimizing your experience while maintaining your privacy.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        4.<span style={{ fontWeight: '500' }}>Cookies:</span>We utilize cookies and similar tracking technologies to enhance Your browsing experience and improve Our Services. You can manage cookie preferences through Your browser settings.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        i. Session Cookies
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Administered by: Us
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Purpose: These cookies are essential for providing Services available through the Website and enabling the Use of its features. They assist in User authentication and prevent fraudulent Use of accounts. Without these cookies, the requested Services cannot be provided, and We Use them solely to deliver those Services.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        ii. Cookies Policy / Notice Acceptance Cookies
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Type: Persistent Cookies
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Administered by: Us
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Purpose: These cookies identify whether Users have accepted the Use of cookies on the Website.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        iii. Functionality Cookies
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Purpose: These cookies enable Us to remember Your choices when Using the Website, such as login details or language preferences. They aim to provide You with a more personalized experience and eliminate the need to re-enter Your preferences each time You visit the Website. For further information about the cookies We Use and Your choices regarding cookies.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                        color={'red'}
                    >
                        These revisions aim to improve clarity and conciseness while maintaining the original meaning and intent of the text.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        How We Use Your Information:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        1.<span style={{ fontWeight: '500' }}>Course Delivery: </span>Your personal information is utilized to provide you with our preparatory classes, manage your enrollment, and deliver relevant course materials. Additionally, we analyze aggregated data to comprehend usage trends, enhance our website functionality, and develop new offerings to better serve your needs. We may also use your information for marketing communications, sending you promotional emails, SMS, and/or push messages about our classes, events, upgrades, and special offers with your consent.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        2.<span style={{ fontWeight: '500' }}>Transaction Processing: </span>Your payment information is securely processed through our trusted payment gateway, Quickpay, to complete your transactions. We also monitor the usage of our service to ensure optimal performance and enhance user experience. Additionally, we manage your account to facilitate registration and provide access to different functionalities available to you as a registered user.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        3.<span style={{ fontWeight: '500' }}>Communication: </span>We may utilize your contact details to send you important updates, notifications, and promotional materials related to our offerings. This includes notifying you of course updates, upcoming events, and exclusive offers designed to enhance your learning journey. We also contact you via email, telephone calls, SMS, or other electronic communication methods regarding updates or informative communications related to our products or services.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Sharing or Disclosure of Information Collected:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        The Company respects Your privacy and does not disclose, share, or exploit Your information without Your permission, except under the following circumstances:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Legal Necessity:</span>The Company may share Your information if required by law or governmental authorities for verification, prevention, detection, investigation of criminal activities, or prosecution and punishment of offenses.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Limited Disclosure to Service Providers: </span>Your information may be disclosed to Service Providers for purposes such as hosting the platform, payment processing, data analysis, and customer service, under strict contractual arrangements to maintain confidentiality and security.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (c)<span style={{ fontWeight: '500' }}>Limited Disclosures for Improvement of Services: </span>The Company may share aggregated, anonymized data with sponsors, partners, advertisers, analytics companies, or third parties for marketing, advertising, promotional offers, product information, and market research, under strict contractual arrangements to preserve confidentiality and security.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Business Transactions
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        In the scenario of a merger, acquisition, or sale of assets, it is possible that your personal data may be transferred to another entity. This transfer could occur as part of the transaction process, wherein your information becomes an asset of the acquiring or merging entity. However, please be assured that in such circumstances, the company will provide prior notice to you before any transfer of your personal data takes place. This notice ensures transparency and gives you the opportunity to make informed decisions regarding your personal information in light of the impending change in ownership or control of the company.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Data Security:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (a)<span style={{ fontWeight: '500' }}>Secured Transactions: </span>Ensuring the security of your payment transactions is paramount to us. That's why we utilize Quickpay, a secure payment gateway provided by IDBI Bank, to safeguard your financial information during transactions.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (b)<span style={{ fontWeight: '500' }}>Employee Access: </span>Access to your personal data is strictly limited to authorized personnel who require it for their job responsibilities. Our employees undergo thorough training on data protection and are bound by strict confidentiality agreements, ensuring that your information is accessed only by those with legitimate need, in compliance with security regulations.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        (c)<span style={{ fontWeight: '500' }}>Encryption: </span>To enhance security, all data transmission between your device and our servers is encrypted. This encryption ensures that your information remains confidential and protected from unauthorized access throughout its journey.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Your Choices:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        1.<span style={{ fontWeight: '500' }}>Opt-Out : </span>If you prefer not to receive promotional communications from us, you have the freedom to opt-out. This can be easily done by clicking on the unsubscribe link provided in the emails you receive from us. By exercising this option, you can control the frequency and nature of promotional materials you receive, ensuring your inbox remains tailored to your preferences.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        2.<span style={{ fontWeight: '500' }}>Access & Update: </span>We understand the importance of keeping your personal information accurate and up-to-date. That's why we provide you with the ability to access and update your information conveniently. Through the account settings available to you, you can easily view and modify your personal details such as your name, contact information, and preferences. This ensures that the information we hold about you remains current and reflects your latest preferences and requirements accurately.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Children's Privacy
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        Our Service is not intended for individuals under the age of 13, and We do not knowingly collect personally identifiable information from anyone in this age group. If You are a parent or guardian and You believe that Your child under the age of 13 has provided Us with Personal Data, please contact Us immediately. If We discover that We have collected Personal Data from anyone under the age of 13 without proper parental consent, We will promptly take action to remove that information from Our servers.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        In situations where We need to obtain consent as a legal requirement for processing Your information, and if Your country mandates parental consent for individuals under a certain age, We may require consent from Your parent or guardian before collecting and utilizing that information.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Refunds & Exchanges:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        1.<span style={{ fontWeight: '500' }}>Refund Policy: </span>Ensuring transparency and fairness in all transactions, we adhere to a comprehensive refund policy available on our website and app. This policy outlines the refund process and eligibility criteria in detail, providing you with clear guidance on how to proceed. For further information, please refer to the return policy section, where our refund policy is detailed.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        2.<span style={{ fontWeight: '500' }}>Exchanges :</span>While we do not support exchanges for digital products, we approach issues on an individual basis to ensure customer satisfaction. Our team is available to address any concerns you may have, working diligently to resolve them efficiently. For specific inquiries regarding exchanges, please reach out to us, and we'll be happy to assist you further.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Changes to this Privacy Policy:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        We reserve the right to update this Privacy Policy periodically to align with changes in Our practices or regulatory requirements. In the event of any significant changes, We will inform You through notifications on Our Website or App, ensuring transparency and keeping You informed about any revisions to Our policies.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Contact Us:
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        If You have any questions or concerns about Our Privacy Policy or Our handling of Your personal information, please contact Us at academyps123@gmail.com.
                    </Typography>
                    <Typography
                        fontSize={['18px', '20px']}
                        textAlign={'start'}
                        fontWeight={'400'}
                        p={2}
                    >
                        By Using Our Website and Services, You consent to the terms of this Privacy Policy and the processing of Your personal information in accordance with the IT Act and related rules and regulations.
                    </Typography>
                </Box>
                <Box p={2}>
                    <Typography
                        fontSize={['18px', '25px']}
                        textAlign={'start'}
                        fontWeight={'500'}
                    >
                        Thank You for choosing PS Academy for Your exam preparation needs.
                    </Typography>
                </Box>
            </Box>
            <div style={{ position: 'absolute', width: 'fit-content' }}>
                <div style={{ position: 'fixed', left: '-45px', top: '92%', transform: 'translateY(-50%)', padding: '10px', width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
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
            </div>
            <SecondFooter />
            <Footer />
        </>
    )
}

export default PrivacyPolicy