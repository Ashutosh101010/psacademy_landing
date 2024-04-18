import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import image1 from './Images/image1.svg';
import CourseNetwrok from '../../../Network';
import parse from 'html-react-parser'
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';

const SectionFourth = () => {

    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [faqs, setFaqs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const isMobile = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.psacademy.co.in/faqList`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setFaqs(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const next = () => {
        const maxIndex = faqs.length - 1;
        const newIndex = (index + 1) % (maxIndex + 1);
        setIndex(newIndex);
    };

    const previous = () => {
        const maxIndex = faqs.length - 1;
        const newIndex = (index - 1 + maxIndex + 1) % (maxIndex + 1);
        setIndex(newIndex);
    };

    const toggleViewAll = () => {
        setShowAll(!showAll);
    };

    // const handleReadMoreFaq = (e, data) => {
    //     navigate(`/faq/${data?.ID}`);
    // };

    return (
        <Box m={'20px'}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
                    <Typography
                        color={'#212529'}
                        fontFamily={'Inter'}
                        fontSize={['25px', '31px']}
                        fontStyle={'normal'}
                        fontWeight={'700'}
                        lineHeight={'38px'}
                        ml={'30px'}
                    >
                        FAQ'S
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} display={['none', 'flex']} justifyContent={'flex-end'}>
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
            <Grid container spacing={2} p={4}>
                {
                    showAll
                        ? faqs
                            .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
                            .map((data, index) => {
                                const first10Words = data?.post_content
                                    .replace(/<[^>]*>/g, ' ')
                                    .split(/\s+/)
                                    .slice(0, 4)
                                    .join(' ');
                                const first10WordsTitle = data?.post_title
                                    .replace(/<[^>]*>/g, ' ')
                                    .split(/\s+/)
                                    .slice(0, 2)
                                    .join(' ');
                                return (
                                    <Grid item xs={12} sm={3} md={3} key={data.id}>
                                        <a className='anchor' href={`/faq/${data?.ID}`}>
                                            <Card sx={{ width: ['100%', '75%'], height: 'fit-content' }}>
                                                <img style={{ width: '100%', height: '100%' }} alt='' src={data?.guid} />
                                                <CardContent>
                                                    <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                                        {parse(first10WordsTitle)}...
                                                    </Typography>
                                                    <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                                        {parse(first10Words)}...
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                    <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'12px'}>
                                                        {moment(data?.post_date).format('MMMM Do YYYY')}
                                                    </Typography>
                                                    <Button
                                                        // onClick={(e) => handleReadMoreFaq(e, data)}
                                                        sx={{
                                                            padding: '16px 32px',
                                                            alignItems: 'end',
                                                            gap: '10px',
                                                            borderRadius: '15px',
                                                            textTransform: 'none',
                                                            fontSize: '12px',
                                                            fontWeight: '700',
                                                            color: "#8976FD"
                                                        }}
                                                    >
                                                        Read More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </a>
                                    </Grid>
                                )
                            })
                        : faqs
                            .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
                            .slice(index, index + 4)
                            .map((data) => {
                                const first10Words = data?.post_content
                                    .replace(/<[^>]*>/g, ' ')
                                    .split(/\s+/)
                                    .slice(0, 4)
                                    .join(' ');
                                const first10WordsTitle = data?.post_title
                                    .replace(/<[^>]*>/g, ' ')
                                    .split(/\s+/)
                                    .slice(0, 2)
                                    .join(' ');
                                return (
                                    <Grid item xs={12} sm={3} md={3} key={data.id}>
                                        <a className='anchor' href={`/faq/${data?.ID}`}>
                                            <Card sx={{ width: ['100%', '75%'], height: 'fit-content' }}>
                                                <img style={{ width: '100%', height: '100%' }} alt='' src={data?.guid} />
                                                <CardContent>
                                                    <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                                        {parse(first10WordsTitle)}...
                                                    </Typography>
                                                    <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                                        {parse(first10Words)}...
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                    <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'12px'}>
                                                        {moment(data?.post_date).format('MMMM Do YYYY')}
                                                    </Typography>
                                                    <Button
                                                        // onClick={(e) => handleReadMoreFaq(e, data)}
                                                        sx={{
                                                            // background: '#F6E9FF',
                                                            padding: '16px 32px',
                                                            alignItems: 'flex-end',
                                                            gap: '10px',
                                                            borderRadius: '15px',
                                                            textTransform: 'none',
                                                            fontSize: '12px',
                                                            fontWeight: '700',
                                                            color: "#8976FD"
                                                        }}
                                                    >
                                                        Read More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </a>
                                    </Grid>
                                )
                            }
                            )
                }
                {/* {cardData.slice(index, index + 4).map((data, dataIndex) => {
                    return (
                        <Grid item xs={12} sm={4} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={data?.image}
                                // title="green iguana"
                                />
                                <CardContent>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'baseline'}
                                    >
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'600'}
                                            fontSize={'18px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.name}
                                        </Typography>
                                        <Typography
                                            color={'#5E587A'}
                                            fontFamily={'Inter'}
                                            fontWeight={'400'}
                                            fontSize={'15px'}
                                            textTransform={'capitalize'}
                                            gutterBottom variant="h5" component="div">
                                            {data?.date}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        fontFamily={'Inter'}
                                        fontWeight={'600'}
                                        fontSize={'15px'}
                                        textTransform={'capitalize'}
                                        variant="body2" color="text.secondary"
                                    >
                                        {data?.decription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        sx={{
                                            background: '#F6E9FF',
                                            padding: '16px 32px',
                                            alignItems: 'flex-start',
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
                })} */}
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
                            backgroundColor: '#9D0009',
                        },
                    }}
                >
                    {showAll ? 'Show Less' : 'View All'}
                </Button>
            </Box>
        </Box>
    )
}

export default SectionFourth;
