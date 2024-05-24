import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CourseNetwrok from '../Network';
import Header from '../Components/Header';
import SecondHeader from '../Components/SecondHeader';
import Navbar from '../Components/Navbar';
import SecondFooter from '../Components/SecondFooter';
import Footer from '../Components/Footer';
import { Box, Button } from '@mui/material';
import whatsAppSvg from '../../images/whatsAppSvg.svg';

const BuyThisCourse = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const queryParam = new URLSearchParams(location.search);
    const iframeId = queryParam.get("iframeId");
    const courseId = queryParam.get("courseId");
    const onClick = queryParam.get("on-click");
    const totalCoursePrice = queryParam.get("totalCoursePrice");
    const campaignId = queryParam.get("campaignId");
    const [courseIdData, setCourseIdData] = useState([]);
    const [iFrameInstId, setIFrameInstId] = useState([]);
    const [colorPaletteId, setColorPaletteId] = useState(null);
    const [suggestedLength, setSuggestedLength] = useState([]);
    const [courses, setCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedIds, setSelectedIds] = useState([Number(courseId)]);

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

    const getIframe = async () => {
        const response = await CourseNetwrok.fetchIFrame(iframeId);
        setIFrameInstId(response?.iFrame);
        setColorPaletteId(response?.iFrame?.colorPalette);
    };

    useEffect(() => {
        getIframe();
    }, []);

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(iFrameInstId?.instId);
        setCourses(response.courses);
    };

    useEffect(() => {
        const filteredCourses = courses.filter(item => (item.tags || []).some(tag => tag.id === item.setting.checkoutTag) && item.id !== Number(courseId));
        setSuggestedLength(filteredCourses)
        if (courses.length > 0) {
            for (let item of courses) {
                if (courseId == item.id) {
                    setCourseIdData(item);
                }
            };
        };
    }, [courses]);

    useEffect(() => {
        if (iFrameInstId && iFrameInstId.instId) {
            getAllCourses();
        };
    }, [iFrameInstId]);

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
            {/* <Header />
            <SecondHeader /> */}
            {isSticky === false && <Navbar />}
            <div style={{ position: 'fixed', width: '100%', zIndex: 100000, top: isSticky ? '0' : 'auto' }}>
                {isSticky && <Navbar />}
            </div>
            <Box width={'100%'} height={'100%'} pb={2.9} >
                <iframe style={{ border: 'none' }} src={`https://course.classiolabs.com/buyCourseDetails/?iframeId=${iframeId}&courseId=${courseId}&folderId=${0}&on-click=${onClick}`} width={'100%'} height={'100%'} />
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
            {/* <source  /> */}
            {/* </iframe> */}
            {/* <SecondFooter /> */}
            <Footer />
        </>
    )
}

export default BuyThisCourse