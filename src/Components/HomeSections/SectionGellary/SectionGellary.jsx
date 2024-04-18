import { Box, Button, Dialog, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import CourseNetwrok from '../../../Network';
import Endpoints from '../../../constant/endpoints';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));


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
        console.log('item', item);
        setOpenPhooto(true);
        setSelectPhoto(item);
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * (900 / galleryList.length)}%)`;
        }
    }, [currentIndex, galleryList.length]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id),
                );
            };

    const LeftArrow = () => {
        const visibility = useContext(VisibilityContext);
        const isFirstItemVisible = visibility.items[0]?.isVisible; // Check if the first item is visible

        return (
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <ArrowBackIosIcon
                    disabled={!isFirstItemVisible}
                    onClick={() => visibility.scrollPrev()}
                    className="left"
                />
            </Box>
        );
    };

    const RightArrow = () => {
        const visibility = useContext(VisibilityContext);
        const isLastItemVisible = visibility.items[visibility.items.length - 1]?.isVisible; // Check if the last item is visible

        return (
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <ArrowForwardIosIcon
                    disabled={!isLastItemVisible}
                    onClick={() => visibility.scrollNext()}
                    className="right"
                />
            </Box>
        );
    };

    function Cardsss({ onClick, selected, title, itemId, item }) {
        const visibility = useContext > VisibilityContext;
        // const visible = visibility.useIsVisible(itemId, true);

        return (
            <div
                onClick={() => onClick(visibility)}
                // style={{
                //     width: '20px',
                // }}
                tabIndex={0}
            >
                <div onClick={(e) => handleOpenPhoto(e, item)} style={{ marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <div>{title}</div> */}
                    {/* <div>visible: {JSON.stringify(visible)}</div> */}
                    {/* <div>selected: {JSON.stringify(!!selected)}</div> */}
                    <img width={'250px'} alt='' height={'250px'} src={item} />
                </div>
                {/* <div
                    style={{
                        height: '200px',
                    }}
                /> */}
            </div>
        );
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

            <Box mt={2}>
                <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}  >
                    {
                        galleryList && galleryList.map((item, index) => {
                            return (
                                <Cardsss
                                    // itemId={id} // NOTE: itemId is required for track items
                                    // title={id}
                                    key={index}

                                    // onClick={handleClick(id)}
                                    // selected={isItemSelected(id)}
                                    item={Endpoints.mediaBaseUrl + item}
                                />
                            )
                        })
                    }
                </ScrollMenu>
            </Box>
            {/* <ImageList
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
                </ImageList> */}
            {/* {displayedGallery.map((data, index) => (
                    <img key={index} alt='' width={'10%'} src={Endpoints.mediaBaseUrl + data} />
                ))} */}

            <Dialog maxWidth='xl' open={openPhoto} onClose={(e) => setOpenPhooto(false)}>
                <Box>
                    <img style={{ width: '100%', height: isMobile ? '555px' : '100%' }} alt='' src={selectPhoto} />
                </Box>
            </Dialog>
        </Box>
    )
}

export default SectionGellary