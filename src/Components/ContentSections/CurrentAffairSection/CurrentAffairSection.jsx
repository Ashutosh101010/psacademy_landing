import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import image from './Images/image.svg'
import image2 from './Images/image2.svg'
import parse from 'html-react-parser'
import moment from 'moment/moment';
import image3 from './Images/image3.svg'
import { useNavigate } from 'react-router-dom'

const CurrentAffairSection = () => {

    // const cardData = [
    //     {
    //         id: 1,
    //         guid: image3,
    //         post_title: 'Test1',
    //         post_content: 'Content 1',
    //         post_date: 'Date 1'
    //     },
    //     {
    //         id: 2,
    //         guid: image3,
    //         post_title: 'Test2',
    //         post_content: 'Content 2',
    //         post_date: 'Date 2'
    //     },
    //     {
    //         id: 3,
    //         guid: image3,
    //         post_title: 'Test3',
    //         post_content: 'Content 3',
    //         post_date: 'Date 3'
    //     },
    //     {
    //         id: 4,
    //         guid: image3,
    //         post_title: 'Test4',
    //         post_content: 'Content 4',
    //         post_date: 'Date 4'
    //     },
    // ];

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrentAffiar = async () => {
            try {
                const response = await fetch('https://api.psacademy.co.in/currentAffairList');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchCurrentAffiar();
    }, []);

    const handleCurrentAffairPage = (data) => {
        navigate(`/currentAffair/${data?.ID}`);
    };

    return (
        <Box m='20px'>
            <Typography fontSize={'25px'} fontWeight={'600'} lineHeight={'50px'} fontFamily={'Inter'} >
                Current Affair recent updates
            </Typography>
            <Grid container spacing={2} p={2}>
                {data.slice(index, index + 1).map((data, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={6}>
                            <Card
                                onClick={(e) => handleCurrentAffairPage(data)}
                                sx={{ maxWidth: '100%', boxShadow: 'none' }}>
                                <CardMedia
                                    sx={{ height: 400 }}
                                    image={data?.guid}
                                />
                                <CardContent>
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: '#6941C6',
                                            fontWeight: '600'
                                        }}
                                        variant="body2" color="text.secondary">
                                        {moment(data?.post_date).format('MMMM Do YYYY')}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data?.post_title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {parse(data?.post_content)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
                <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={2}>
                        {data.slice(index, index + 2).map((data, index) => {
                            const first10Words = data?.post_content
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/)
                                .slice(0, 10)
                                .join(' ');
                            const first10WordsTitle = data?.post_title
                                .replace(/<[^>]*>/g, ' ')
                                .split(/\s+/)
                                .slice(0, 5)
                                .join(' ');
                            return (
                                <>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <CardMedia
                                            sx={{ height: 165 }}
                                            image={data?.guid}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={8}>
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    fontSize: '12px',
                                                    color: '#6941C6',
                                                    fontWeight: '600'
                                                }}
                                                variant="body2" color="text.secondary">
                                                {moment(data?.post_date).format('MMMM Do YYYY')}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {first10WordsTitle}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {parse(first10Words)}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} p={2}>
                {
                    data.map((data) => {
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
                            <Grid item xs={12} sm={3} md={3} key={data.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={data?.guid}
                                    />
                                    <CardContent>
                                        <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                                            {first10WordsTitle}
                                        </Typography>
                                        <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                                            {parse(first10Words)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
                                    >
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
        </Box>
    )
}

export default CurrentAffairSection
