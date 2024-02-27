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
                const response = await fetch('http://localhost:5001/currentAffairList');
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

    // console.log('data', data);

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

                    const extractImageUrlFromPostContent = (post_content) => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(post_content, 'text/html');
                        const imageElement = doc.querySelector('img'); // Assuming the image is the first one found

                        if (imageElement) {
                            return imageElement.getAttribute('src');
                        } else {
                            return null;
                        }
                    }
                    const imageUrl = extractImageUrlFromPostContent(data?.post_content);
                    const first10Words = data?.post_content
                        .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                        .split(/\s+/) // Split into words
                        .slice(0, 20) // Take the first 10 words
                        .join(' ');

                    return (
                        <Grid item xs={12} sm={6} md={6}>
                            <Card
                                onClick={(e) => handleCurrentAffairPage(data)}
                                sx={{ maxWidth: '100%', boxShadow: 'none' }}>
                                <CardMedia
                                    sx={{ height: 400 }}
                                    image={imageUrl}
                                // title="green iguana"
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
                                        {parse(first10Words)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button
                                        sx={{
                                            borderRadius: '30px',
                                            textTransform: 'none',
                                            fontWeight: '600',
                                            fontSize: '11px',
                                            color: '#6941C6',
                                            background: '#F9F5FF'
                                        }}
                                    >
                                        {data?.name}
                                    </Button> */}
                                    {/* <Button
                                sx={{
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    color: '#3538CD',
                                    background: '#EEF4FF'
                                }}
                            >
                                Research
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    color: '#C11574',
                                    background: '#FDF2FA'
                                }}
                            >
                                Developments
                            </Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}

                <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={2}>
                        {data.slice(index, index + 2).map((data, index) => {
                            const extractImageUrlFromPostContent = (post_content) => {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(post_content, 'text/html');
                                const imageElement = doc.querySelector('img'); // Assuming the image is the first one found

                                if (imageElement) {
                                    return imageElement.getAttribute('src');
                                } else {
                                    return null;
                                }
                            }
                            const imageUrl = extractImageUrlFromPostContent(data?.post_content);
                            const first10Words = data?.post_content
                                .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                                .split(/\s+/) // Split into words
                                .slice(0, 20) // Take the first 10 words
                                .join(' ');
                            const first10WordsTitle = data?.post_title
                                .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                                .split(/\s+/) // Split into words
                                .slice(0, 4) // Take the first 10 words
                                .join(' ');
                            return (
                                <>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <CardMedia
                                            sx={{ height: 165 }}
                                            image={imageUrl}
                                        // title="green iguana"
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
                                        <CardActions>
                                            {/* <Button
                                                sx={{
                                                    borderRadius: '30px',
                                                    textTransform: 'none',
                                                    fontWeight: '600',
                                                    fontSize: '11px',
                                                    color: '#6941C6',
                                                    background: '#F9F5FF'
                                                }}
                                            >
                                                {data.name}
                                            </Button> */}
                                            {/* <Button
                                                sx={{
                                                    borderRadius: '30px',
                                                    textTransform: 'none',
                                                    fontWeight: '600',
                                                    fontSize: '11px',
                                                    color: '#3538CD',
                                                    background: '#EEF4FF'
                                                }}
                                            >
                                                Research
                                            </Button>

                                            <Button
                                                sx={{
                                                    borderRadius: '30px',
                                                    textTransform: 'none',
                                                    fontWeight: '600',
                                                    fontSize: '11px',
                                                    color: '#C11574',
                                                    background: '#FDF2FA'
                                                }}
                                            >
                                                Developments
                                            </Button> */}
                                        </CardActions>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} p={2}>
                {
                    // showAll
                    //     ?
                    data.map((data) => {
                        const extractImageUrlFromPostContent = (post_content) => {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(post_content, 'text/html');
                            const imageElement = doc.querySelector('img'); // Assuming the image is the first one found

                            if (imageElement) {
                                return imageElement.getAttribute('src');
                            } else {
                                return null;
                            }
                        }
                        const imageUrl = extractImageUrlFromPostContent(data?.post_content);
                        const first10Words = data?.post_content
                            .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                            .split(/\s+/) // Split into words
                            .slice(0, 20) // Take the first 10 words
                            .join(' ');
                        const first10WordsTitle = data?.post_title
                            .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                            .split(/\s+/) // Split into words
                            .slice(0, 4) // Take the first 10 words
                            .join(' ');
                        return (
                            <Grid item xs={12} sm={3} md={3} key={data.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={imageUrl}
                                    // title="green iguana"
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
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {/* <Button
                                            sx={{
                                                borderRadius: '30px',
                                                textTransform: 'none',
                                                fontWeight: '600',
                                                fontSize: '11px',
                                                color: '#6941C6',
                                                background: '#F9F5FF'
                                            }}
                                        >
                                            {data.name}
                                        </Button>
                                        <Button
                                            sx={{
                                                borderRadius: '30px',
                                                textTransform: 'none',
                                                fontWeight: '600',
                                                fontSize: '11px',
                                                color: '#6941C6',
                                                background: '#F9F5FF'
                                            }}
                                        >
                                            {data.name}
                                        </Button> */}
                                    </CardActions>
                                    <CardActions
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
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
                    // : cardData.slice(index, index + 4).map((data) => (
                    //     <Grid item xs={12} sm={4} md={3} key={data.id}>
                    //         <Card sx={{ maxWidth: 345 }}>
                    //             <CardMedia
                    //                 sx={{ height: 200 }}
                    //                 image={data?.guid}
                    //             // title="green iguana"
                    //             />
                    //             <CardContent>
                    //                 <Typography textAlign={'left'} fontWeight={'bold'} lineHeight={'24px'} fontSize={'20px'}>
                    //                     {data?.post_title}
                    //                 </Typography>
                    //                 <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'14px'}>
                    //                     {parse(data?.post_content)}
                    //                 </Typography>
                    //             </CardContent>
                    //             <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'} mt={'-15px'} ml={1}>
                    //                 <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                    //                     {moment(data?.post_date).format('MMMM Do YYYY')}
                    //                 </Typography>
                    //                 <Typography
                    //                     sx={{
                    //                         // background: '#F6E9FF',
                    //                         padding: '16px 32px',
                    //                         alignItems: 'flex-end',
                    //                         gap: '10px',
                    //                         borderRadius: '15px',
                    //                         textTransform: 'none',
                    //                         fontSize: '14px',
                    //                         fontWeight: '700',
                    //                         color: "#8976FD"
                    //                     }}
                    //                 >
                    //                     Read More
                    //                 </Typography>
                    //             </Box>
                    //         </Card>
                    //     </Grid>
                    // ))
                }
            </Grid>
        </Box>
    )
}

export default CurrentAffairSection