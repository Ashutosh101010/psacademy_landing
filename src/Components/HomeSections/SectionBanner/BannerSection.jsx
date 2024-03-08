import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CourseNetwrok from '../../../Network';
import Endpoints from '../../../constant/endpoints';
import bannerImage1 from './Images/bannerImage1.svg'
import '../../../index.css';

const BannerSection = () => {

    // const [courses, setCourses] = useState([]);
    const [banners, setBanners] = useState([]);
    const isMobile = useMediaQuery("(min-width:600px)");
    const instId = 94;

    // const getAllCourses = async () => {
    //     const response = await CourseNetwrok.fetchCourses(instId);
    //     setCourses(response.courses);
    // };

    const getAllBanners = async () => {
        const response = await CourseNetwrok.fetchBannerss(instId);
        setBanners(response.banners);
    };

    useEffect(() => {
        // getAllCourses();
        getAllBanners();
    }, []);

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [banners]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / banners.length)}%)`;
        }
    }, [currentIndex, banners.length]);

    return (
        <Box m={'20px'}>
            <Box
                sx={{
                    mb: 2,
                    mt: 4,
                    overflow: 'hidden',
                    '&:hover': { overflowX: 'auto' },
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#402f2f69 transparent',
                    WebkitOverflowScrolling: 'touch',
                    '&::-webkit-scrollbar': {
                        height: '6px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                        borderRadius: '10px',
                        width: '1px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#402f2f69',
                    },
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {/* <Box
                    sx={{ width: '1000px' }}
                    display={'flex'}
                    gap={'20px'}
                >
                    {banners && banners.map((banner, index) => {
                        return (
                            <>
                                {/* <CardMedia
                                    component="img"
                                    height="230px"
                                    width={'auto'}
                                    // image={Endpoints.mediaBaseUrl + banner?.banner ? bannerImage1 : ""}
                                    image={Endpoints.mediaBaseUrl + banner?.banner}
                                /> */}
                {/* <img alt='' width={'100%'} height={'240px'} src={Endpoints.mediaBaseUrl + banner?.banner} />
                            </>
                        )
                    })}
                </Box> */}
                <div className="slider-container">
                    <div className="slider" ref={sliderRef}>
                        {banners.map((banner, index) => (
                            <div key={index} style={{ flex: isMobile ? '0 0 33.33%' : '0 0 100%' }}>
                                <img alt='' width={'100%'} height={'240px'} src={Endpoints.mediaBaseUrl + banner?.banner} />
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
            <Box
                textAlign={'center'}
                mt={4}
            >
                <Typography
                    fontSize={'18px'}
                    fontWeight={'700'}
                    fontFamily={'Inter'}
                    lineHeight={'30px'}
                    color={'black'}
                >
                    A UPSC-MPPSC COACHING THAT WILL HELP YOU CRACK
                </Typography>
                <Typography
                    fontSize={'18px'}
                    fontWeight={'700'}
                    fontFamily={'Inter'}
                    lineHeight={'30px'}
                    color={'black'}
                >
                    YOUR ACADEMICS AND EXPLAINS YOUR GAP YEARS
                </Typography>
            </Box>
        </Box >
    )
}

export default BannerSection
