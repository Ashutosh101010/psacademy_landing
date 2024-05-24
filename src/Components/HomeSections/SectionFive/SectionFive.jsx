import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react';
import testimonial1 from './Image/testimonial1.svg'
import testimonial2 from './Image/testimonial2.svg'
import testimonial3 from './Image/testimonial33.svg'
import testimonial4 from './Image/testimonial44.svg'
import testimonial5 from './Image/testimonial55.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionFive = () => {

    const isMobile = useMediaQuery("(min-width:600px)");

    const imageData = [
        {
            id: 1,
            image: testimonial1,
        },
        {
            id: 2,
            image: testimonial2,
        },
        {
            id: 3,
            image: testimonial3,
        },
        {
            id: 4,
            image: testimonial4,
        },
        {
            id: 5,
            image: testimonial5,
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <Box m={'20px'} padding={'15px'} >
            <Typography
                sx={{
                    color: '#E68149',
                    fontSize: '30px',
                    textAlign: 'center',
                    fontWeight: '500'
                }}
            >
                Student Testimonials
            </Typography>
            <Typography
                sx={{
                    color: '#5E5E5E',
                    fontSize: '22px',
                    textAlign: 'center',
                    fontWeight: '500'
                }}
            >
                What Toppers are saying about PS Academy
            </Typography>
            <Box
                py={5}
            >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={false}
                    // customTransition="all 3"
                    transitionDuration={5000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false}
                    renderButtonGroupOutside={true}
                >
                    {
                        imageData.map((data, index) => {
                            return (
                                <Box display={'flex'} justifyContent={'center'} gap={2}>
                                    <img alt='' style={{ width: isMobile ? '90%' : '100%' }} src={data.image} />
                                </Box>
                            )
                        })
                    }
                </Carousel>
            </Box>
        </Box>
    )
}

export default SectionFive