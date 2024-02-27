import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CourseNetwrok from '../Network';
import Header from '../Components/Header';
import SecondHeader from '../Components/SecondHeader';
import Navbar from '../Components/Navbar';
import SecondFooter from '../Components/SecondFooter';
import Footer from '../Components/Footer';
import { Box } from '@mui/material';

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


    return (
        <>
            <Header />
            <SecondHeader />
            <Navbar />
            <Box width={'100%'} height={'100%'} pb={2.9} >
                <iframe src={`https://iframe.classiolabs.com/buyCourseDetails/?iframeId=${iframeId}&courseId=${courseId}&folderId=${0}&on-click=${onClick}`} width={'100%'} height={'100%'} />
            </Box>
            {/* <source  /> */}
            {/* </iframe> */}
            <SecondFooter />
            <Footer />
        </>
    )
}

export default BuyThisCourse