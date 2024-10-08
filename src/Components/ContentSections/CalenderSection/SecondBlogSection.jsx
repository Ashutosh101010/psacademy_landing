import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import image1 from './Images/image1.svg';
import parse from 'html-react-parser'
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const SecondBlogSection = () => {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    const isMobile = useMediaQuery("(min-width:600px)");
    const [cardData, setCardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.psacademy.co.in/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setCardData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

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
    }

    const handleReadMoreBlog = (e, data) => {
        navigate(`/blogContent/${data?.ID}`);
    };

    return (
        <Box m='20px' mt={5} mb={5}>
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
                        <ChevronLeftIcon onClick={previous} style={{ width: isMobile ? '14%' : '100%', background: '#FECACA', borderRadius: '10px', color: 'white' }} />
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
                        <ChevronRightIcon onClick={next} style={{ width: isMobile ? '14%' : '100%', background: '#FECACA', borderRadius: '10px', color: 'white' }} />
                    </button>
                </Grid>
            </Grid>
            <Grid container spacing={2} p={2}>
                {
                    showAll
                        ?
                        cardData.map((data) => {
                            const first10Words = data?.post_content
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/)
                                .slice(0, 8)
                                .join(' ');
                            const first10Wordstitle = data?.post_title
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/)
                                .slice(0, 3)
                                .join(' ');
                            return (
                                <Grid item xs={12} sm={3} md={3} key={data.id}>
                                    <Card sx={{ width: '75%', height: 'fit-content' }}>
                                        <img style={{ width: '100%', height: '100%' }} alt='' src={data?.guid} />
                                        <CardContent>
                                            <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                                {parse(first10Wordstitle)}
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
                                                sx={{
                                                    // background: '#F6E9FF',
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
                        cardData.slice(index, index + 4).map((data) => {
                            const first10Words = data?.post_content
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/)
                                .slice(0, 8)
                                .join(' ');
                            const first10Wordstitle = data?.post_title
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/)
                                .slice(0, 3)
                                .join(' ');
                            return (
                                <Grid item xs={12} sm={3} md={3} key={data.id}>
                                    <Card sx={{ width: '75%', height: 'fit-content' }}>
                                        <img style={{ width: '100%', height: '100%' }} alt='' src={data?.guid} />
                                        <CardContent>
                                            <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                                {parse(first10Wordstitle)}
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
                            backgroundColor: '#9D0009', // Change to desired hover background color
                        },
                    }}
                >
                    {showAll ? 'Show Less' : 'View All'}
                </Button>
            </Box>

        </Box>
    )
}

export default SecondBlogSection
