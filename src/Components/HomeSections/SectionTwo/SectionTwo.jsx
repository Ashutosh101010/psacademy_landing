import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputBase, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import smssvg from './Images/smssvg.svg'
import appLogo from './Images/appLogosvg.svg'
import checkBoxsvg from './Images/redcheckbox.svg'
import CourseNetwrok from '../../../Network'
import '../../../App.css';
import { useEffect } from 'react'

const SectionTwo = () => {

  const instId = '94'
  const mobile = useMediaQuery("(min-width:600px)");
  const [course, setCourse] = useState('');
  const [coursesData, setCoursesData] = useState([]);

  const handleChangeCourse = (event) => {
    setCourse(event.target.value);
  };

  const getAllCourses = async () => {
    const response = await CourseNetwrok.fetchCourses(instId);
    // setCourses(response.courses);
    let templist = [];
    response.courses.forEach((course) => {
      if (course.active == true) {
        templist.push(course);
      }
    })
    setCoursesData(templist);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  // useEffect(() => {
  //   // Filter active courses
  //   // const activeCourses = courses.filter(course => course.active);
  //   let templist = [];
  //   coursesData.forEach((course) => {
  //     if (course.active == true) {
  //       templist.push(course);
  //     }
  //   })
  //   setCoursesData(templist);
  // }, [coursesData]);

  const dots = "&#x2022;"

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: '#540000',
        width: '100%',
        height: '100%',
        paddingTop: '15px',
        color: 'black'
      }}>
      <Grid container spacing={2}
        sx={{
          padding: ['10px 18px 30px 32px', '15px 0px 25px 240px']
        }}
      >
        <Grid item xs={12} sm={6} md={6} mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}
              sx={{
                display: 'flex',
                justifyContent: 'start',
                position: 'relative',
                left: ['0px', '-20px']
              }}
            >
              <img alt='' style={{ width: mobile ? '50%' : '80%' }} src={appLogo} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>

            </Grid>
          </Grid>
          <Grid container spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* <Grid item xs={6}> */}
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: 'Inter , sans-serif',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: ['23px', '30px'],
                  mb: 2
                }}
              >
                Here are the reasons, why you should join PS Academy ?
              </Typography>
              {/* <Typography
                sx={{
                  fontFamily: 'Inter , sans-serif',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: ['25px', '44px']
                }}
              >

              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter , sans-serif',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: ['25px', '44px'],
                  mb: 2
                }}
              >

              </Typography> */}
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                }}
              >
                1. Motto: "We Rise by Lifting Others" :
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                  ml: 1
                }}
              >
                &#9679; Our core belief: Success is our collective journey.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                }}
              >
                2. Foundation Course: Comprehensive Preparation
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                  ml: 1
                }}
              >
                &#9679; Our faculty covers everything from basics to advanced concepts, ensuring a strong foundation.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                }}
              >
                3. Over 3 Decades of Experience with Pradeep Shrivastava Sir
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                  ml: 1
                }}
              >
                &#9679; Benefit from the expertise of Pradeep Shrivastava Sir, known for his mastery in answer writing and bureaucratic insight.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                }}
              >
                4. Officer Mindset Development
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                  ml: 1
                }}
              >
                &#9679; Develop the skills to approach challenges with the confidence and composure of an officer.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                }}
              >
                5. Personalized Support for Success
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                  ml: 1
                }}
              >
                &#9679; Receive tailored strategies and individualized guidance for a successful exam preparation journey.
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                }}
              >
                6. Focus on Classroom Notes and Syllabus Completion
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: ['14px', '17px'],
                  lineHeight: ['30px', '30px'],
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  alignItem: 'center',
                  gap: '8px',
                  ml: 1
                }}
              >
                &#9679; Apart from printed notes, we prioritize class notes and ensure full syllabus coverage.
              </Typography>
            </Box>
            {/* </Grid> */}
          </Grid>
        </Grid>
        <Grid xs={12} sm={6} md={6} paddingLeft={"0px"} mt={['30px']}>
          {/* <Card
            sx={{
              maxWidth: [700, 500]
            }}
          >
            <CardContent sx={{ p: [2, 5] }}>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                fontFamily={'Inter , sans-serif'}
                fontSize={['40px', '46px']}
                fontWeight={'500'}
                lineHeight={'60px'}
              >
                Get In Touch
              </Typography>
              <Typography
                sx={{
                  padding: '9px',
                  textAlign: 'center',
                  width: '100%'
                }}
                fontFamily={'Inter , sans-serif'}
                fontSize={'15px'}
                fontWeight={'400'}
                lineHeight={'22px'}
              >
                We'd love to hear from you, please drop us a line if you've any
                query related to our program and courses.
              </Typography>
              <Grid container spacing={2} mb={4} mt={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography>
                    Name :
                  </Typography>
                  {/* <TextField fullWidth id="outlined-basic" label="Name" type='text' variant="outlined" /> */}
          {/* <input type='text' name='name' placeholder='Enter Your Name' className='form-control' style={{ width: '100%', height: mobile ? '45px' : '39px', fontSize: '16px', position: 'relative', top: '2px' }} /> */}
          {/* <input class="input-field" type='text' name='name' placeholder='Enter Your Name' style={{ width: '100%', height: mobile ? '45px' : '39px', fontSize: '16px', position: 'relative', top: '2px' }} />
                </Grid>
              </Grid>
              <Grid container spacing={2} mb={4}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography>
                    Phone :
                  </Typography>
                  {/* <TextField fullWidth id="outlined-basic" label="Phone" type='number' variant="outlined" /> */}
          {/* <input class="input-field" type='number' name='number' placeholder='Enter Your Phone Number' style={{ width: '100%', height: mobile ? '45px' : '39px', fontSize: '16px' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography>
                    Email :
                  </Typography>
                  {/* <TextField fullWidth id="outlined-basic" label="Email" type='email' variant="outlined" /> */}
          {/* <input class="input-field" type='email' name='email' placeholder='Enter Your Email' style={{ width: '100%', height: mobile ? '45px' : '39px', fontSize: '16px' }} />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    Course :
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      class="input-field"
                      value={course}
                      onChange={handleChangeCourse}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      style={{ width: '100%', height: mobile ? '45px' : '39px', fontSize: '16px' }}
                    >
                      <MenuItem value="">
                        <em>Select Your Course</em>
                      </MenuItem>
                      {coursesData && coursesData.map((filteredCourse, index) => {
                        return (
                          <MenuItem
                            style={{
                              margin: '10px'
                            }}
                          >
                            {filteredCourse.title}
                          </MenuItem>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12}>
                  <Typography>
                    Message :
                  </Typography>
                  {/* <TextField
                    id="outlined-basic"
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                  /> */}
          {/* <textarea class="input-field" name='message' rows={5} placeholder='Enter Message' style={{ width: '100%', height: '90px', fontSize: '16px' }} />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'none',
                  background: '#ffd80d',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  minHeight: '50px',
                  fontSize: '16px',
                  color: '#000',
                  gap: '10px',
                  width: ['95%', '87%'],
                  borderRadius: '0px',
                  border: 'none',
                  '&:hover': {
                    background: '#bf8c07', // Change the background color on hover
                  },
                }}
              >
                <img alt='' src={smssvg} />
                Send Message
              </Button>
            </CardActions> */}
          {/* // </Card> */}
          <Box maxWidth={800}>
            <iframe style={{ width: '100%', height: mobile ? '82vh' : '105vh', border: 'none' }} src='https://forms.classiolabs.com/?instituteid=94' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionTwo;

// background: #ffd80d;
// font-size: 16px;
// min-height: 50px;
// border: none;
// color: #000;
// font-weight: 600;