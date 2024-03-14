import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import image1 from './Images/image1.svg';
import parse from 'html-react-parser'
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const BlogSection = ({ cardData }) => {

    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const isMobile = useMediaQuery("(min-width:600px)");

    const next = () => {
        const maxIndex = cardData.length - 1;
        const newIndex = (index + 1) % (maxIndex + 1);
        setIndex(newIndex);
    }

    const previous = () => {
        const maxIndex = cardData.length - 1;
        const newIndex = (index - 1 + maxIndex + 1) % (maxIndex + 1);
        setIndex(newIndex);
    }

    const toggleViewAll = () => {
        setShowAll(!showAll);
    };

    const handleReadMoreBlog = (e, data) => {
        navigate(`/blogContent/${data?.ID}`);
        // console.log('id', data);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
                    <Typography
                        color={'#212529'}
                        fontFamily={'Inter'}
                        fontSize={['25px', '31px']}
                        fontStyle={'normal'}
                        fontWeight={'700'}
                        lineHeight={'38px'}
                    // ml={'30px'}
                    >
                        Blog's
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'flex-end'}>
                    <button
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'baseline',
                            background: 'none',
                            border: 'none'
                        }}

                    >
                        <ChevronLeftIcon onClick={previous} style={{ width: isMobile ? "14%" : '100%', background: '#FECACA', borderRadius: '10px', color: 'white' }} />
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '18px',
                            paddingLeft: '1rem',
                            paddingRight: '1rem'
                        }}
                    >
                        {index + 1}
                    </button>
                    <button
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'baseline',
                            background: 'none',
                            border: 'none'
                        }}

                    >
                        <ChevronRightIcon onClick={next} style={{ width: isMobile ? "14%" : '100%', background: '#FECACA', borderRadius: '10px', color: 'white' }} />
                    </button>
                </Grid>
            </Grid>
            <Grid container spacing={2} p={2} sx={{ marginLeft: ['-5px', '0px'] }} >
                {cardData.length === 0 ?
                    <Typography fontFamily={'Inter'} fontSize={'20px'} >
                        No Blogs Available
                    </Typography>
                    : ''}
                {
                    showAll
                        ?
                        cardData.map((data) => {
                            const first10Words = data?.post_content
                                .replace(/<[^>]*>/g, ' ') 
                                .split(/\s+/) 
                                .slice(0, 8)
                                .join(' ');
                            const first10WordsTitle = data?.post_title
                                .replace(/<[^>]*>/g, ' ') 
                                .split(/\s+/)
                                .slice(0, 5)
                                .join(' ');
                            return (
                                <Grid item xs={12} sm={4} md={4} key={data.id}>
                                    <Card sx={{ width: '75%', height: 'fit-content' }}>
                                        <img style={{ width: '100%', height: '100%' }} alt='' src={data?.guid} />
                                        <CardContent>
                                            <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                                {parse(first10WordsTitle)}
                                            </Typography>
                                            <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                                {parse(first10Words)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                                                {moment(data?.post_date).format('MMMM Do YYYY')}
                                            </Typography>
                                            <Button
                                                onClick={(e) => handleReadMoreBlog(e, data)}
                                                sx={{
                                                    padding: '16px 32px',
                                                    alignItems: 'flex-end',
                                                    gap: '10px',
                                                    borderRadius: '15px',
                                                    textTransform: 'none',
                                                    fontSize: '14px',
                                                    fontWeight: '700',
                                                    color: "#8976FD"
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                        :
                        cardData.slice(index, index + 3).map((data) => {
                            const first10Words = data?.post_content
                                .replace(/<[^>]*>/g, ' ') 
                                .split(/\s+/) 
                                .slice(0, 8) 
                                .join(' ');
                            const first10WordsTitle = data?.post_title
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/) 
                                .slice(0, 3)
                                .join(' ');
                            return (
                                <Grid item xs={12} sm={4} md={4} key={data.id}>
                                    <Card sx={{ width: '75%', height: 'fit-content' }}>
                                        <img style={{ width: '100%', height: '100%' }} alt='' src={data?.guid} />
                                        <CardContent>
                                            <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                                {parse(first10WordsTitle)}
                                            </Typography>
                                            <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                                {parse(first10Words)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                                                {moment(data?.post_date).format('MMMM Do YYYY')}
                                            </Typography>
                                            <Button
                                                onClick={(e) => handleReadMoreBlog(e, data)}
                                                sx={{
                                                    padding: '16px 32px',
                                                    alignItems: 'end',
                                                    gap: '10px',
                                                    borderRadius: '15px',
                                                    textTransform: 'none',
                                                    fontSize: '14px',
                                                    fontWeight: '700',
                                                    color: "#8976FD"
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                }
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Button
                    onClick={toggleViewAll}
                    sx={{
                        background: '#9D0009',
                        color: 'white',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        p: '5px 25px 5px 25px',
                        '&:hover': {
                            background: '#9D0009',
                        },
                    }}
                >
                    {showAll ? 'Show Less' : 'View All'}
                </Button>
            </Box>
        </Box>
    )
}

export default BlogSection