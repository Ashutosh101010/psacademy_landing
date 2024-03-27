import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CourseNetwrok from '../../../Network';
import parse from 'html-react-parser';
import premiumBadge from './Images/premiumBadge.svg'
import { Link } from 'react-router-dom';
import Endpoints from '../../../constant/endpoints';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CourseSection = () => {

    const [courses, setCourses] = useState([]);
    const [tagsList, setTagsList] = useState([]);
    const [iframeData, setIframeData] = useState([]);
    const [currentTagIndices, setCurrentTagIndices] = useState([]);

    const instId = 94;
    const iframeIdss = 13;

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(instId);
        let templist = [];
        response.courses.forEach((course) => {
            if (course.active == true) {
                templist.push(course);
            }
        })
        setCourses(templist);
    };

    const getTagsList = async () => {
        const response = await CourseNetwrok.getTagsListApi(instId);
        setTagsList(response.tags);
    };

    const getIframe = async () => {
        const response = await CourseNetwrok.fetchIFrame(iframeIdss);
        setIframeData(response.iFrame);
        console.log('response.iFrame', response.iFrame);
    };

    const handleBuyCourse = (item) => {
        const url = `http://localhost:5174/coursedetail/` + `?iframeId=${iframeData?.id}&courseId=${item?.id}&folderId=${0}&on-click=${true}`
        window.open(url, '_blank', 'noreferrer');
    };

    useEffect(() => {
        getAllCourses();
        getTagsList();
        getIframe();
    }, []);

    useEffect(() => {
        if (courses) {
            setCurrentTagIndices(Array(courses.length).fill(0));
        }
    }, [courses]);

    const handlePrevClick = (tagIndex) => {
        setCurrentTagIndices((prevIndices) => {
            const updatedIndices = [...prevIndices];
            updatedIndices[tagIndex] = Math.max(0, updatedIndices[tagIndex] - 1);
            return updatedIndices;
        });
    };

    const handleNextClick = (tagIndex) => {
        setCurrentTagIndices((prevIndices) => {
            const updatedIndices = [...prevIndices];
            updatedIndices[tagIndex] = Math.min(courses.length - 1, updatedIndices[tagIndex] + 1);
            return updatedIndices;
        });
    };


    return (
        <Box sx={{ flexGrow: 1, m: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} textAlign={'center'}>
                    <Grid container spacing={1}>
                        {tagsList?.length > 0 &&
                            tagsList?.map((tags, i) => {
                                const filteredCourses = courses?.filter(item => (item.tags || []).some(tag => tag.id === tags.id) && tags?.availablePublic === true && item.active === true);
                                if (filteredCourses.length > 0) {
                                    return <Grid item xs={12} sm={12} md={12}>
                                        <div key={i} style={{ position: 'relative', padding: "10px 0px 10px 0px", margin: "10px" }}>
                                            {iframeData?.showHeader === true ?
                                                <Typography noWrap sx={{ fontWeight: '700', fontSize: '40px', paddingLeft: '0rem', textAlign: 'center', p: 1, color: '#540000', lineHeight: '60px' }}>
                                                    {tags.tag}
                                                </Typography>
                                                : ""}
                                            <div className='slide-boxes' style={{ width: '100%', overflowX: 'auto', padding: '0.5rem', display: 'flex' }}
                                            >
                                                <div style={{
                                                    display: 'flex', gap: '20px',
                                                    transition: 'transform 0.5s',
                                                    transform: `translateX(-${currentTagIndices[i] * 10}%)`,
                                                }}>
                                                    {courses.map((item, index) => {
                                                        const tagslists = item.tags || [];
                                                        if (tagslists.some(tag => tag.id === tags.id)) {
                                                            return (
                                                                <>
                                                                    <Card
                                                                        onClick={() => handleBuyCourse(item)}
                                                                        key={index} sx={{
                                                                            width: ['90%', '70%'], maxWidth: ['580px', '400px'], height: '100%', borderRadius: '7px',
                                                                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                                                                        }} className=''>
                                                                        <div className='relative' style={{ height: '165px' }}>

                                                                            <img style={{ width: '100%', maxWidth: '350px', height: '100%' }} src={Endpoints.mediaBaseUrl + item.logo} alt="card thumb image" />

                                                                            {item.paid && (
                                                                                <Avatar
                                                                                    sx={{ backgroundColor: '#FFD700', position: 'relative', top: ['-165px', '-163px'], left: '5px', width: ['30px', '30px'], height: ['30px', '25px'] }}
                                                                                >
                                                                                    <img src={premiumBadge} alt="cardbadge" />
                                                                                </Avatar>
                                                                            )}
                                                                        </div>
                                                                        <CardContent sx={{ paddingBottom: "20px", padding: '10px' }}>
                                                                            <Stack gap={'20px'}>
                                                                                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                                                                    <Typography noWrap sx={{ width: '200px', fontWeight: '600', fontSize: '16px' }}>
                                                                                        {item.title}
                                                                                    </Typography>

                                                                                </Stack>
                                                                                <Typography fontSize={'13px'} noWrap sx={{ width: "300px" }}>
                                                                                </Typography>
                                                                                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                                                    {item.paid ? (
                                                                                        <Typography variant='body1'
                                                                                            fontWeight={'bold'}>
                                                                                            {item.discount > 0 ? (
                                                                                                <>
                                                                                                    <span style={{ background: 'gold', padding: '5px', borderRadius: '6px', fontWeight: 'bold', color: 'black', fontSize: '14px' }} className="">
                                                                                                        {Number(item.price) - Number(item.price) * (Number(item.discount) / 100)}/-
                                                                                                    </span>
                                                                                                    &nbsp;
                                                                                                    <s style={{ fontSize: '12px' }}>{item.price}/-</s>
                                                                                                    &nbsp;
                                                                                                    <span style={{ color: 'red', fontSize: '12px' }} className="">-{item.discount}%</span>
                                                                                                </>
                                                                                            ) : (
                                                                                                <span style={{ color: 'black', fontWeight: 'bold', border: '15px', padding: '5px' }} className="">{item.price}/-</span>
                                                                                            )}
                                                                                        </Typography>
                                                                                    ) : (
                                                                                        <Typography style={{ background: 'gold', padding: '5px', borderRadius: '6px', fontWeight: 'bold', color: 'black', fontSize: '14px' }} className="">
                                                                                            Free
                                                                                        </Typography>
                                                                                    )}
                                                                                </div>
                                                                            </Stack>
                                                                        </CardContent>
                                                                        <CardActions sx={{ paddingTop: '0px', display: 'block' }}>
                                                                            <hr style={{ border: '1px solid rgb(128 128 128 / 8%)', width: '95%' }} />

                                                                            <div>
                                                                                <Button
                                                                                    onClick={() => handleBuyCourse(item)}
                                                                                    fullWidth
                                                                                    sx={{
                                                                                        fontWeight: '700',
                                                                                        textTransform: 'none',
                                                                                        background: `#F44336FF`,
                                                                                        color: 'white',
                                                                                        '&:hover': {
                                                                                            background: 'rgb(118, 53, 220)',
                                                                                            color: 'white',
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    {item?.price === 0 ? "View this Course" : "Buy this course"}
                                                                                </Button>
                                                                            </div>
                                                                        </CardActions>
                                                                    </Card>
                                                                </>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </div>
                                            </div>
                                            {courses.filter((item) => (item.tags || []).some((tag) => tag.id === tags.id)).length > 3 && (
                                                <div>
                                                    <IconButton
                                                        sx={{ marginLeft: '-10px', background: "#00000047", color: "#fff", position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}
                                                        onClick={() => handlePrevClick(i)}
                                                        disabled={currentTagIndices[i] === 0}
                                                    >
                                                        <ArrowBackIosIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        sx={{ background: "#00000047", color: "#fff", position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}
                                                        onClick={() => handleNextClick(i)}
                                                        disabled={currentTagIndices[i] === courses.length - 1}
                                                    >
                                                        <ArrowForwardIosIcon />
                                                    </IconButton>
                                                </div>
                                            )}
                                        </div>
                                    </Grid>
                                }
                            })}
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

export default CourseSection;
