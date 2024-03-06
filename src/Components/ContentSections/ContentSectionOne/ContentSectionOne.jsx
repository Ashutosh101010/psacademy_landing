import { Alert, Box, Card, CardActions, CardContent, CardMedia, Dialog, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react';
import phoneSvg2 from './Images/phoneView2.jpeg'
import phoneSvg from './Images/phoneView.jpeg'
import androidPhone from './Images/androidPhone.svg'
import tabletSvg from './Images/tabletSvg.svg'
import desktopSvg from './Images/desktopSvg.svg'
import playStoreButton from './Images/playStoreButton.svg'
import appleStoreButton from './Images/appleStoreButton.svg'
import windowsStoreButton from './Images/windowsStoreButton.svg'
import { useSnackbar } from 'notistack';

const ContentSectionOne = () => {

    const isMobile = useMediaQuery("(min-width:600px)");
    const { enqueueSnackbar } = useSnackbar();
    const [openTabletModal, setOpenTabletModal] = useState(false);
    const [openDesktopModal, setOpenDesktopModal] = useState(false);

    const handleClickTablet = () => {
        setOpenTabletModal(true);
    }

    const handleClickDesktop = () => {
        setOpenDesktopModal(true);
    }

    // if (response.errorCode !== 0) {
    //     enqueueSnackbar(`${response.errorDescription}`, { variant: 'error', autoHideDuration: 3000 })
    // } else if (response.errorCode === 0) {
    //     enqueueSnackbar(`${response.message !== undefined ? response.message : ""}`, { variant: 'success', autoHideDuration: 3000 })
    // }

    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img alt='' width={'45%'} style={{ position: 'relative', left: ['70px', '0px'] }} src={phoneSvg} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} p={2}>
                    <Typography
                        fontSize={'30px'}
                        fontWeight={'600'}
                        fontFamily={'Inter'}
                        color={'#14142B'}
                        lineHeight={'35px'}
                        width={isMobile ? '65%' : '100%'}
                        textAlign={isMobile ? 'start' : 'center'}
                    >
                        <span style={{ color: '#F00' }} >PS Academy</span> is now available on all the platforms
                    </Typography>
                    <Typography
                        fontSize={'15px'}
                        fontWeight={'400'}
                        fontFamily={'Inter'}
                        color={'#4E4B66'}
                        lineHeight={'24px'}
                        width={isMobile ? '55%' : '100%'}
                        textAlign={isMobile ? 'start' : 'center'}
                        mt={2}
                    >
                        Download lessons and learn anytime, anywhere just made for your ease of learning
                    </Typography>
                    <Grid display={['none', 'flex']} container spacing={2} mt={3} width={['100%', '60%']} >
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper sx={{ p: 2 }}
                            >
                                <img alt='' width={isMobile ? '50%' : '50%'} style={{ position: 'relative', left: isMobile ? '25px' : '60px' }} src={androidPhone} />
                                <Typography
                                    color={'#14142B'}
                                    fontFamily={'Inter'}
                                    fontSize={'15px'}
                                    fontWeight={'600'}
                                    textAlign={'center'}
                                >
                                    Mobiles
                                </Typography>
                                <Typography
                                    color={'#6E7191'}
                                    fontFamily={'Inter'}
                                    fontSize={'12px'}
                                    fontWeight={'500'}
                                    textAlign={'center'}
                                    lineHeight={'20px'}
                                >
                                    iOS & Android
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper sx={{ p: 2 }}>
                                <img alt='' width={isMobile ? '100%' : '88%'} style={{ position: 'relative', top: '8px', left: '7px' }} src={tabletSvg} />
                                <Typography
                                    color={'#14142B'}
                                    fontFamily={'Inter'}
                                    fontSize={'15px'}
                                    fontWeight={'600'}
                                    textAlign={'center'} pt={'30px'}
                                    onClick={handleClickTablet}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Tablets
                                </Typography>
                                <Typography
                                    color={'#6E7191'}
                                    fontFamily={'Inter'}
                                    fontSize={'12px'}
                                    fontWeight={'500'}
                                    textAlign={'center'}
                                    lineHeight={'20px'}
                                >
                                    Android & iPAD
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper sx={{ p: 2 }}>
                                <img alt='' width={'100%'} src={desktopSvg} />
                                <Typography
                                    color={'#14142B'}
                                    fontFamily={'Inter'}
                                    fontSize={'15px'}
                                    fontWeight={'600'}
                                    textAlign={'center'} pt={'14px'}
                                    onClick={handleClickDesktop}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Desktops
                                </Typography>
                                <Typography
                                    color={'#6E7191'}
                                    fontFamily={'Inter'}
                                    fontSize={'12px'}
                                    fontWeight={'500'}
                                    textAlign={'center'}
                                    lineHeight={'20px'}
                                >
                                    All Browsers
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={3} width={['100%', '60%']}>
                        <Grid item xs={6} sm={4} md={4}>
                            <img alt='' width={'100%'} src={playStoreButton} />
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <img alt='' width={'100%'} src={appleStoreButton} />
                        </Grid>
                        {/* <Grid item xs={12} sm={4} md={4}>
                            <img alt='' width={'100%'} src={windowsStoreButton} />
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={openTabletModal} onClose={() => setOpenTabletModal(false)}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">Coming Soon</Alert>
                </Stack>
            </Dialog>
            <Dialog open={openDesktopModal} onClose={() => setOpenDesktopModal(false)}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">Coming Soon</Alert>
                </Stack>
            </Dialog>
        </Box>
    )
}

export default ContentSectionOne;