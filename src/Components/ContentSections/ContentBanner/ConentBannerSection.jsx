import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import bannerImage1 from './Images/bannerImage1.svg'
import CourseNetwrok from '../../../Network';
import Endpoints from '../../../constant/endpoints';
import '../../../index.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ContentBannerSection = () => {

    // const [courses, setCourses] = useState([]);
    const [banners, setBanners] = useState([]);
    const sliderRef = useRef(null);
    const isMobile = useMediaQuery("(min-width:600px)");
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 1500); // Change image every 3 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, [banners]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / banners.length)}%)`;
        }
    }, [currentIndex, banners.length]);

    return (
        <Box sx={{ background: '#FFE8E8' }}>
            <Box
                sx={{
                    mb: 2,
                    mt: 4,
                    p: [2, 4],
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
                {/* <div
                    // className="slider-container"
                    style={{
                        width: isMobile ? '70%' : '100%',
                        overflow: 'hidden'
                    }}
                >
                    <div className="slider" ref={sliderRef}>
                        {banners.map((banner, index) => (
                            <div key={index} style={{ flex: isMobile ? '0 0 33.33%' : '0 0 100%' }}>
                                <img alt='' width={'100%'} height={'240px'} src={Endpoints.mediaBaseUrl + banner?.banner} />
                            </div>
                        ))}
                    </div>
                </div> */}
                <div style={{ width: isMobile ? '80%' : '100%' }}>
                    <Carousel
                       swipeable={false}
                       draggable={false}
                       showDots={false}
                       responsive={responsive}
                       ssr={true}
                       infinite={true}
                       autoPlay={true}
                       autoPlaySpeed={1000}
                       keyBoardControl={false}
                       // customTransition="all 3"
                       transitionDuration={1000}
                       containerClass="carousel-container"
                       removeArrowOnDeviceType={["desktop"]}
                       // deviceType={this.props.deviceType}
                       dotListClass="custom-dot-list-style"
                       itemClass="carousel-item-padding-40-px"
                       arrows={true}
                       renderButtonGroupOutside={true}
                    >
                        {
                            banners.map((item, i) => (
                                <div key={i} style={{ padding: '1rem' }}>
                                    <img alt='' width={'100%'} height={'220px'} src={Endpoints.mediaBaseUrl + item?.banner} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </Box>
            {/* <Box
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
            </Box> */}
        </Box >
    )
}

export default ContentBannerSection
