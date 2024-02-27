import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import USC from './Images/USC.svg'
import Ellipse1080 from './Images/Ellipse1080.svg'
import BlogSection from '../../ContentSections/CalenderSection/BlogsSection'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const BlogContentSectionTwo = () => {

  const isMobileView = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(true);

  const next = () => {
    const maxIndex = data.length - 1;
    const newIndex = (index + 1) % (maxIndex + 1);
    setIndex(newIndex);
  }

  const previous = () => {
    const maxIndex = data.length - 1;
    const newIndex = (index - 1 + maxIndex + 1) % (maxIndex + 1);
    setIndex(newIndex);
  }

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  const handleReadMoreBlog = (e, data) => {
    navigate(`/currentAffair/${data?.ID}`);
  };

  return (
    <Box m='20px'>
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
                    <img alt='' style={{ width: isMobileView ? '72%' : '60%', marginLeft: isMobileView ? '0px' : '50px' }} src={USC} />
                  </Grid>
                  <Grid item xs={6} sm={1.5} md={1.5}>
                    <img alt='' style={{ marginTop: isMobileView ? '70px' : '2px', width: isMobileView ? '80%' : '65%' }} src={Ellipse1080} />
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
              pt: 4,
              pb: 2
            }}
          >
            <BlogSection cardData={data} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} pb={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
              <Typography
                color={'#212529'}
                fontFamily={'Inter'}
                fontSize={['25px','31px']}
                fontStyle={'normal'}
                fontWeight={'700'}
                lineHeight={'38px'}
              // ml={'30px'}
              >
                Current Affair
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'baseline',
                  background: 'none',
                  border: 'none'
                }}

              >
                <ChevronLeftIcon onClick={previous} style={{ width: isMobileView ? '30%' : "100%", background: '#FECACA', borderRadius: '10px', color: 'white' }} />
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
                <ChevronRightIcon onClick={next} style={{ width: isMobileView ? '30%' : "100%", background: '#FECACA', borderRadius: '10px', color: 'white' }} />
              </button>
            </Grid>
            <Grid container spacing={2} p={2}>
              {
                data.slice(index, index + 1).map((data) => {
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
                  const first10Words = data?.post_content
                    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                    .split(/\s+/) // Split into words
                    .slice(0, 10) // Take the first 10 words
                    .join(' ');

                  const first10WordsTitle = data?.post_title
                    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
                    .split(/\s+/) // Split into words
                    .slice(0, 5) // Take the first 10 words
                    .join(' ');
                  const imageUrl = extractImageUrlFromPostContent(data?.post_content);
                  return (
                    <Grid item xs={12} sm={12} md={12} key={data.id}>
                      <Card sx={{ maxWidth: 525 }}>
                        <CardMedia
                          sx={{ height: 250 }}
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
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'baseline'} mt={'-15px'} ml={1}>
                          <Typography textAlign={'left'} fontWeight={'600'} color={'#00000080'} lineHeight={'24px'} fontSize={'13px'}>
                            {moment(data?.post_date).format('MMMM Do YYYY')}
                          </Typography>
                          <Typography
                            onClick={(e) => handleReadMoreBlog(e, data)}
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
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  )
                }
                )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogContentSectionTwo