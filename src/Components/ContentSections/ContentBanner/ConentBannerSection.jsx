import { Box, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import bannerImage1 from './Images/bannerImage1.svg'
import CourseNetwrok from '../../../Network';
import Endpoints from '../../../constant/endpoints';

const ContentBannerSection = () => {

    const [courses, setCourses] = useState([]);
    const [banners, setBanners] = useState([]);

    const instId = 94;

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(instId);
        setCourses(response.courses);
    };

    const getAllBanners = async () => {
        const response = await CourseNetwrok.fetchBannerss(instId);
        setBanners(response.banners);
    };

    // console.log('banners', banners);


    useEffect(() => {
        // getAllCourses();
        getAllBanners();
    }, []);

    return (
        <Box p={5}
            sx={{
                background: '#FFE8E8'
            }}
        >
            <Box
                sx={{
                    mb: 2,
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
                }}
            >
                <Box
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
                                <img alt='' width={'100%'} height={'170px'} src={Endpoints.mediaBaseUrl + banner?.banner} />
                            </>
                        )
                    })}
                </Box>
            </Box>
        </Box >
    )
}

export default ContentBannerSection