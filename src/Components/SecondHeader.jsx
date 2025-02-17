import React, { useEffect, useState } from 'react'
// import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import facebookLogo from '../../images/facebooksvg.svg'
import instagramLogo from '../../images/instagramsvg.svg'
import youtubeLogo from '../../images/youtubesvg.svg'
import telegramLogo from '../../images/telegramsvg.svg'
import emailLogo from '../../images/emailsvg.svg'
import contactLogo from '../../images/contactsvg.svg'
import appleStore from '../../images/applestoresvg.svg'
import playStore from '../../images/playstoresvg.svg'
import windowsStore from '../../images/windowsstoresvg.svg'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import CourseNetwrok from '../Network'

const SecondHeader = () => {

  const isMobile = useMediaQuery("(min-width:600px)");
  const [windowsUrl, setWindowsUrl] = useState([]);
  const instId = 94;

  const getInstituteList = async () => {
    const response = await CourseNetwrok.fetchInstitute(instId);
    setWindowsUrl(response?.institute?.instituteAppSettingsModals);
  };

  useEffect(() => {
    getInstituteList();
  }, []);

  const handleClick = () => {
    window.location.href = 'mailto:indorepsacademy@gmail.com';
  };

  const handleClickPhone = () => {
    window.location.href = 'tel:0731-4001178'
  };

  const handleClickPhone1 = () => {
    window.location.href = 'tel:9826-063466'
  };

  const handleClickPhone2 = () => {
    window.location.href = 'tel:9926-576466'
  };
  const handlePlayStore = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.classiolabs.psacademy&pcampaignid=web_share'
  };
  const handleFacebook = () => {
    window.location.href = 'https://www.facebook.com/psacademy?mibextid=rS40aB7S9Ucbxw6v'
  }
  const handleYouTube = () => {
    window.location.href = 'https://www.youtube.com/@psacademy1998'
  };
  const handleInstagram = () => {
    window.location.href = 'https://www.instagram.com/ps__academy'
  };
  const handleTelegram = () => {
    window.location.href = 'https://t.me/ps_academy'
  };
  const handleWindowsUrl = () => {
    window.location.href = `${windowsUrl?.windowsUrl}`
  };
  const handleComingSoon = () => {

  };

  return (
    <Box sx={{ background: '#540000', py: 0 }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6}
          sm={5}
          md={5}
          display={'flex'}
          justifyContent={['start', 'center']}
          alignItems={'center'}
          gap={'10px'}
          position={'relative'}
          left={['20px', '0px']}
        >
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: ['end', 'center'],
              alignItems: 'center',
              width: '100%',
              gap: '10px',
              p: ['5px', '0px']
            }}
            onClick={handleClick}
          > */}
          <img alt=''
            onClick={handleClick}
            style={{
              width: isMobile ? '2.5%' : '10%'
            }}
            // width={['5%', '15%']} 
            src={emailLogo} />
          <Typography
            sx={{
              color: 'white',
              display: ['none', 'flex'],
              cursor: 'pointer',
              fontSize: '14px'
            }}
            onClick={handleClick}
          >
            indorepsacademy@gmail.com
          </Typography>
          {/* </Box> */}
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'start',
              alignItems: 'center',
              width: '100%',
              gap: '10px',
              cursor: 'pointer'
            }}
            onClick={handleClickPhone}
          > */}
          <img
            alt=''
            onClick={handleClickPhone}
            style={{
              width: isMobile ? '2.5%' : '10%'
            }}
            src={contactLogo}
          />
          <Typography
            sx={{
              color: 'white',
              display: ['none', 'flex'],
              fontSize: '14px',
              gap: 0.5
            }}
          >
            <span style={{ cursor: 'pointer' }} onClick={handleClickPhone}>0731-4001178</span> /
            <span style={{ cursor: 'pointer' }} onClick={handleClickPhone1}>9826063466</span>  /
            <span style={{ cursor: 'pointer' }} onClick={handleClickPhone2}>9926576466</span>
          </Typography>
          {/* </Box> */}
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          md={2}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'25px'}
        >
          <img style={{ cursor: 'pointer' }} onClick={handleFacebook} width={'8%'} alt='' src={facebookLogo} />
          <img style={{ cursor: 'pointer' }} onClick={handleYouTube} width={'8%'} alt='' src={youtubeLogo} />
          <img style={{ cursor: 'pointer' }} onClick={handleInstagram} width={'8%'} alt='' src={instagramLogo} />
          <img style={{ cursor: 'pointer' }} onClick={handleTelegram} width={'8%'} alt='' src={telegramLogo} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          display={['none', 'flex']}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img style={{ cursor: 'pointer' }} onClick={handlePlayStore} width={'35%'} alt='' src={playStore} />
        </Grid>
      </Grid>
      <hr />
    </Box >
  )
}

export default SecondHeader