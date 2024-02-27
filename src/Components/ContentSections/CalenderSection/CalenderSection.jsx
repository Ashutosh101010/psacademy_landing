import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import USC from './Images/USC.svg'
import Ellipse1080 from './Images/Ellipse1080.svg'
import dayjs from 'dayjs';
import newsLogo from './Images/news.svg'
import BlogSection from './BlogsSection'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';

const CalenderSection = () => {

    const isMobile = useMediaQuery("(min-width:600px)");
    const [data, setData] = useState([]);
    const [value, setValue] = React.useState(null);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(); // Create a Date object with your desired date
    const day = date.getDate() - 3;
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day} ${monthName} ${year}`;

    const day2 = date.getDate() - 2;
    const formattedDate1 = `${day2} ${monthName} ${year}`;

    const day3 = date.getDate() - 1;
    const formattedDate3 = `${day3} ${monthName} ${year}`;

    const handleChangeDate = (newValue) => {
        const dateObj = new Date(newValue);

        // Extract date components
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it starts from 0
        const date = String(dateObj.getDate()).padStart(2, '0');

        // Extract time components
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const seconds = String(dateObj.getSeconds()).padStart(2, '0');

        // Concatenate components in the desired format
        const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        setValue(newValue);
    };


    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:5001/UPSCblogs', { 'date': value }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.data) {
                throw new Error('Failed to fetch data');
            }

            const jsonData = response.data;
            return jsonData;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        fetchData(null)
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [value]);

    const handleDateChange = (date) => {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const date1 = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const seconds = String(dateObj.getSeconds()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${date1} ${hours}:${minutes}:${seconds}`;
        setValue(formattedDate);
    }

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8} p={3}>
                    <Card
                        sx={{
                            p: 2,
                            backgroundColor: 'red',
                            backgroundImage: 'linear-gradient(#A34218, #1C006B)',
                            background: 'linear-gradient(to right, #A34218, #1C006B)',
                            borderRadius: '20px',
                            width: ['100%', '90%'],
                            padding: '10px'
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={1.5} md={1.5}>
                                        <img alt='' style={{ width: isMobile ? '72%' : '60%', marginLeft: isMobile ? '0px' : '50px' }} src={USC} />
                                    </Grid>
                                    <Grid item xs={6} sm={1.5} md={1.5}>
                                        <img alt='' style={{ marginTop: isMobile ? '70px' : '2px', width: isMobile ? '80%' : '65%' }} src={Ellipse1080} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} mt={['0px', 2]}>
                                        <Box position={'relative'} top={'20px'}>
                                            <Typography
                                                fontFamily={'Inter'}
                                                fontSize={['19px', '31px']}
                                                fontWeight={'600'}
                                                color={'#fff'}
                                                width={'100%'}
                                                textAlign={['center', 'start']}
                                            >
                                                Online UPSC - MPPSC Coaching
                                            </Typography>
                                            <Typography
                                                fontFamily={'Inter'}
                                                fontSize={['14px', '18px']}
                                                fontWeight={'500'}
                                                color={'#FFFF00'}
                                                width={'100%'}
                                                textAlign={['center', 'start']}
                                            >
                                                Indore Best Coaching for online / classroom UPSC CSE and MPPSC
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}
                                        display={'flex'}
                                        justifyContent={['center', 'end']}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            sx={{
                                                borderRadius: '40px',
                                                background: '#CC0000',
                                                fontSize: '16px',
                                                mt: 2,
                                                color: 'white',
                                                textTransform: 'none',
                                                padding: '5px 20px 5px 20px',
                                                fontWeight: '600',
                                                '&:hover': {
                                                    background: '#CC0000', // Change the background color on hover
                                                    // Add any other styles you want for hover effect
                                                },
                                            }}
                                        >
                                            Enquire Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                    <Box
                        sx={{
                            pt: 2,
                            pb: 2
                        }}
                    >
                        <BlogSection cardData={data} />
                    </Box>
                    <Card
                        sx={{
                            p: 2,
                            backgroundColor: 'red',
                            backgroundImage: 'linear-gradient(#A34218, #1C006B)',
                            background: 'linear-gradient(to right, #A34218, #1C006B)',
                            borderRadius: '20px',
                            width: ['100%', '90%'],
                            padding: '10px'
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={1.5} md={1.5}>
                                        <img alt='' style={{ width: isMobile ? '72%' : '60%', marginLeft: isMobile ? '0px' : '50px' }} src={USC} />
                                    </Grid>
                                    <Grid item xs={6} sm={1.5} md={1.5}>
                                        <img alt='' style={{ marginTop: isMobile ? '70px' : '2px', width: isMobile ? '80%' : '65%' }} src={Ellipse1080} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} mt={['0px', 2]}>
                                        <Box position={'relative'} top={'20px'}>
                                            <Typography
                                                fontFamily={'Inter'}
                                                fontSize={['19px', '31px']}
                                                fontWeight={'600'}
                                                color={'#fff'}
                                                width={'100%'}
                                                textAlign={['center', 'start']}
                                            >
                                                Online UPSC - MPPSC Coaching
                                            </Typography>
                                            <Typography
                                                fontFamily={'Inter'}
                                                fontSize={['14px', '18px']}
                                                fontWeight={'500'}
                                                color={'#FFFF00'}
                                                width={'100%'}
                                                textAlign={['center', 'start']}
                                            >
                                                Indore Best Coaching for online / classroom UPSC CSE and MPPSC
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}
                                        display={'flex'}
                                        justifyContent={['center', 'end']}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            sx={{
                                                borderRadius: '40px',
                                                background: '#CC0000',
                                                fontSize: '16px',
                                                mt: 2,
                                                color: 'white',
                                                textTransform: 'none',
                                                padding: '5px 20px 5px 20px',
                                                fontWeight: '600',
                                                '&:hover': {
                                                    background: '#CC0000', // Change the background color on hover
                                                    // Add any other styles you want for hover effect
                                                },
                                            }}
                                        >
                                            Enquire Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid display={['none', 'grid']} item xs={12} sm={4} md={4}>
                    <Card sx={{ maxWidth: 360, height: ['670', 'auto'] }}>
                        <CardContent>
                            <Box
                                sx={{
                                    background: '#B92727',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    gap: '8px',
                                    color: 'white',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    letterSpacing: '1px',
                                    borderRadius: '5px'
                                }}
                            >
                                <img alt='' src={newsLogo} />
                                Daily News
                            </Box>
                        </CardContent>
                        <CardContent>
                            <Box
                                sx={{
                                    padding: '8px',
                                    borderLeft: '5px solid #F47C7C',
                                    display: 'flex',
                                    mb: 2,
                                    boxShadow: '1px 1px 1px 1px #00000059',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': {
                                        boxShadow: '4px 3px 10px 2px #00000059',
                                    },
                                }}
                            >
                                <Grid container spacing={2} onClick={(e) => handleDateChange(formattedDate)}>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <EventAvailableIcon />
                                        {formattedDate}
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <KeyboardArrowRightIcon />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box
                                sx={{
                                    padding: '8px',
                                    borderLeft: '5px solid #F47C7C',
                                    display: 'flex',
                                    mb: 2,
                                    boxShadow: '1px 1px 1px 1px #00000059',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': {
                                        boxShadow: '4px 3px 10px 2px #00000059',
                                    },
                                }}
                            >
                                <Grid container spacing={2} onClick={(e) => handleDateChange(formattedDate1)}>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <EventAvailableIcon />
                                        {formattedDate1}
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <KeyboardArrowRightIcon />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box
                                sx={{
                                    padding: '8px',
                                    borderLeft: '5px solid #F47C7C',
                                    display: 'flex',
                                    mb: 2,
                                    boxShadow: '1px 1px 1px 1px #00000059',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': {
                                        boxShadow: '4px 3px 10px 2px #00000059',
                                    },
                                }}
                            >
                                <Grid container spacing={2} onClick={(e) => handleDateChange(formattedDate3)}>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <EventAvailableIcon />
                                        {formattedDate3}
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <KeyboardArrowRightIcon />
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <CardContent
                            sx={{
                                background: '#FFF2F2'
                            }}
                        >
                            <Typography gutterBottom variant="h5" component="div" fontSize={'15px'} fontWeight={'700'} fontFamily={'Inter'}>
                                To View Old News, please select date below
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                    <DemoItem>
                                        <DateCalendar defaultValue={value} onChange={handleChangeDate} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}

export default CalenderSection