import { Box, Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import newsLogo from './Images/news.svg'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import parse from 'html-react-parser'
import moment from 'moment';

const BlogContentSecionOne = ({ blogData }) => {

    const [value, setValue] = useState(null);
    const isMobile = useMediaQuery("(min-width:600px)");

    useEffect(() => {

    }, [blogData]);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
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

    return (
        <Box m='20px'>
            <Grid container spacing={2}>
                {/* {Array.isArray(blogData) && blogData.map((data, index) => (
                    <Typography key={index}>
                        {data?.post_date}
                    </Typography>
                ))} */}
                {Array.isArray(blogData) && blogData.map((data, index) => {
                    const parsedContent = parse(data?.post_content);

                    const styles = {
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#333',
                        width: 'auto',
                        height: 'auto'
                    };
                    return (
                        <Grid item xs={12} sm={8} md={8} p={3}>
                            <Box display={['block', 'flex']} justifyContent={'space-between'} alignItems={'baseline'}>
                                <Typography width={'75%'} textAlign={'left'} fontWeight={'bold'} lineHeight={'44px'} fontSize={'35px'} mb={5} mt={5}>
                                    {data?.post_title}
                                </Typography>
                                <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'20px'} mb={2}>
                                    {moment(data?.post_date).format('MMMM Do YYYY')}
                                </Typography>
                            </Box>
                            {/* <img alt='' style={{ width: isMobile ? '60%' : '100%' }} src={imageUrl} /> */}
                            <Typography
                                style={styles}
                            // textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'35px'} fontSize={'25px'}
                            >
                                {parsedContent}
                            </Typography>
                        </Grid>
                    )
                }
                )}
                <Grid item xs={12} sm={4} md={4}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <Card sx={{ maxWidth: 360, height: ['670', '39%'] }}>
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
                                <Grid container spacing={2}>
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
                                <Grid container spacing={2}>
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
                                <Grid container spacing={2}>
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
        </Box>
    )
}

export default BlogContentSecionOne