import { Box, Button, Dialog, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CourseNetwrok from '../../../Network';
import Endpoints from '../../../constant/endpoints';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const SectionGellary = () => {

    const instId = '94';
    const isMobile = useMediaQuery("(min-width:600px)");
    const [openPhoto, setOpenPhooto] = useState(false);
    const [galleryList, setGalleryList] = useState([]);
    const [selectPhoto, setSelectPhoto] = useState([]);

    const getInstituteList = async () => {
        const response = await CourseNetwrok.fetchInstitute(instId);
        setGalleryList(response?.institute?.gallery);
        Endpoints.mediaBaseUrl = response.instituteTechSettingModals.mediaUrl;
    };

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    useEffect(() => {
        getInstituteList();
    }, []);

    const handleOpenPhoto = (e, item) => {
        setOpenPhooto(true);
        setSelectPhoto(item);
    }

    return (
        <Box m={'20px'}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} display={'flex'} justifyContent={'start'}>
                    <Typography
                        color={'#212529'}
                        fontFamily={'Inter'}
                        fontSize={'31px'}
                        fontStyle={'normal'}
                        fontWeight={'700'}
                        lineHeight={'38px'}
                    >
                        Gallery
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} padding={'1rem'} ml={'-5px'}>
                <ImageList
                    sx={{ width: '100%', height: 318 }}
                    variant="masonry"
                    cols={isMobile ? 4 : 1}
                    rowHeight={150}
                >
                    {galleryList.map((item, index) => (
                        <ImageListItem key={index} cols={index?.length || 1} rows={index?.length || 2}>
                            <img
                                {...srcset(Endpoints.mediaBaseUrl + item, 121, index, index)}
                                // alt={item.title}
                                onClick={(e) => handleOpenPhoto(e, item)}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                {/* {displayedGallery.map((data, index) => (
                    <img key={index} alt='' width={'10%'} src={Endpoints.mediaBaseUrl + data} />
                ))} */}
            </Grid>
            <Dialog maxWidth='xl' open={openPhoto} onClose={(e) => setOpenPhooto(false)}>
                <Box>
                    <img style={{ width: '100%', height: isMobile ? '555px' : '100%' }} alt='' src={Endpoints.mediaBaseUrl + selectPhoto} />
                </Box>
            </Dialog>
        </Box>
    )
}

export default SectionGellary