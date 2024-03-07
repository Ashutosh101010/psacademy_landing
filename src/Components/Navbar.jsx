import * as React from 'react';
import logo from '../../images/appLogosvg.svg'
import capLogo from '../../images/capsvg.svg'
import downArrow from '../../images/downArrowsvg.svg'
import upArrow from '../../images/upArrowsvg.svg'
import { Menu, MenuItem, Box, Button, Popper, Grow, Paper, MenuList, ClickAwayListener, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer, Collapse } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import CourseNetwrok from '../Network';
import { useNavigate } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import appleStore from '../../images/applestoresvg.svg'
import playStore from '../../images/playstoresvg.svg'
import windowsStore from '../../images/windowsstoresvg.svg'
import pdf from '../MPPSC_syllabus_23feb.pdf'

const pages = ['Interview Guidance', 'Answer Writing Program', 'Free-Resources', `Topper's Strategy`];
const ITEM_HEIGHT = 48;

const Navbar = () => {

    const instId = '94'
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [openFree, setOpenFree] = React.useState(false);
    const anchorRefFree = React.useRef(null);
    const [courses, setCourses] = React.useState([]);
    const [anchorElF, setAnchorElF] = React.useState(null);
    const openF = Boolean(anchorElF);
    const prevOpen = React.useRef(open);
    const prevOpenFree = React.useRef(openFree);
    const [anchorElM, setAnchorElM] = React.useState(null);
    const openM = Boolean(anchorElM);
    const [showCoursesSubMenu, setShowCoursesSubMenu] = React.useState(false);
    const [showFreeResourcesSubMenu, setShowFreeResourcesSubMenu] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(instId);
        setCourses(response.courses);
    };

    React.useEffect(() => {
        getAllCourses();
    }, []);

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // };

    // const handleToggleFree = () => {
    //     setOpenFree((prevOpenFree) => !prevOpenFree);
    // };

    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }

    //     setOpen(false);
    // };

    // const handleCloseFree = (event) => {
    //     if (anchorRefFree.current && anchorRefFree.current.contains(event.target)) {
    //         return;
    //     }
    //     setOpenFree(false);
    // };

    // function handleListKeyDown(event) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpen(false);
    //     } else if (event.key === 'Escape') {
    //         setOpen(false);
    //     };
    // };

    // function handleListKeyDownFree(event) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpenFree(false);
    //     } else if (event.key === 'Escape') {
    //         setOpenFree(false);
    //     };
    // };

    // return focus to the button when we transitioned from !open -> open
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    React.useEffect(() => {
        if (prevOpenFree.current === true && openFree === false) {
            anchorRefFree.current.focus();
        }

        prevOpenFree.current = openFree;
    }, [openFree]);

    const handleClick = (event) => {
        setAnchorElM(event.currentTarget);
    };
    const handleCloseM = () => {
        setAnchorElM(null);
    };

    const handleClickF = (event) => {
        setAnchorElF(event.currentTarget);
    };
    const handleCloseF = () => {
        setAnchorElF(null);
        handleCloseNavMenu();
        navigate('/content');
    };

    const handleBuyCourse = (item) => {
        const url = `https://iframe.classiolabs.com/buyCourseDetails/` + `?iframeId=12&courseId=${item?.id}&folderId=${0}&on-click=${true}`

        // const url = `${iframeData?.redirectUri}/buyCourseDetails/${item?.id}/0`
        window.open(url, '_blank', 'noreferrer');
        // navigate(`/buyCourseDetails/${item.id}`);
        handleCloseM();
        handleCloseNavMenu();
    };

    const handlNavigateHome = () => {
        navigate('/')
    };

    const handleCoursesClick = () => {
        setShowCoursesSubMenu(!showCoursesSubMenu);
    };
    const handleFreeResourcesClick = () => {
        setShowFreeResourcesSubMenu(!showFreeResourcesSubMenu);
    };

    const [openLeft, setOpenLeft] = React.useState(false);
    const [openCourse, setOpenCourse] = React.useState(false);
    const [openFreeResources, setOpenFreeResources] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenLeft(newOpen);
    };

    const handleClick2 = (event) => {
        setOpenCourse((prevOpen) => !prevOpen);
        event.stopPropagation();
    };

    const handleOpenNavMenu2 = () => {
        setOpenLeft(true);
    };
    const handleOpenNavMen2Close = () => {
        setOpenLeft(false);
    };

    const handleClickFreeResources = (event) => {
        setOpenFreeResources((prevOpen) => !prevOpen);
        event.stopPropagation();
    };

    const handlePlayStore = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.classiolabs.psacademy&pcampaignid=web_share'
    };

    const handleFreeResources = () => {
        const pdfUrl = pdf;
        // Open a new window to initiate the download
        window.open(pdfUrl, '_blank');
    }

    const handleMenuChange = (e, text) => {
        if (text === 'Free-Resources') {
            // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
            const pdfUrl = pdf;
            // Open a new window to initiate the download
            window.open(pdfUrl, '_blank');
        }
    }


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem sx={{ display: 'flex', justifyContent: 'end' }}>
                    <CloseIcon onClick={handleOpenNavMen2Close} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                        onClick={handleClick2}>
                        <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                            Courses
                        </Typography>
                        {openCourse ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openCourse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {courses && courses.map((filteredCourse, index) => (
                            <ListItemButton
                                key={index} // Make sure to provide a unique key
                                sx={{
                                    boxShadow: '0px 2px 8px 0px #b3a3a3'
                                }}
                                onClick={() => handleBuyCourse(filteredCourse)}
                            >
                                <ListItemText>
                                    {filteredCourse.title}
                                </ListItemText>
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>

                {/* <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                        onClick={handleClickFreeResources}>
                        <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                            Free-Rescources
                        </Typography>
                        {openFreeResources ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openFreeResources} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, boxShadow: '0px 2px 8px 0px #b3a3a3' }} onClick={handleClickFreeResources}>
                            <ListItemText
                                primary={'Current Affair'}
                                onClick={handleCloseF}
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, boxShadow: '0px 2px 8px 0px #b3a3a3' }} onClick={handleClickFreeResources}>
                            <ListItemText
                                primary={'Blogs'}
                                onClick={handleCloseF}
                            />
                        </ListItemButton>
                    </List>
                </Collapse> */}
                {/* Other items */}
                {pages.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={(e) => handleMenuChange(e, text)}
                        >
                            <Typography variant="body1" style={{ fontSize: '1.2rem' }} >
                                {text}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <Button
                        sx={{
                            background: '#FFD80D',
                            borderRadius: '40px',
                            textTransform: 'none',
                            fontWeight: '600',
                            fontSize: '15px',
                            color: 'black',
                            width: '100%',
                            '&:hover': {
                                background: '#FFD80D',
                            },
                        }}
                    >
                        <img alt='' src={capLogo} />
                        Free Scholarship Test
                    </Button>
                </ListItem>
                <ListItem
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <img onClick={handlePlayStore} width={'100%'} alt='' src={playStore} />
                </ListItem>
                <ListItem
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '-10px'
                    }}
                >
                    <img width={'88%'} alt='' src={appleStore} />
                </ListItem>
                <ListItem
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <img width={'90%'} alt='' src={windowsStore} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static"
            sx={{
                background: '#540000'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        // href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}
                        onClick={handlNavigateHome}
                    >
                        <img alt='' src={logo} />
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem
                                key="Courses"
                                onClick={handleCoursesClick}
                                onMouseEnter={handleCoursesClick} // Optional: Show submenu on hover
                                onMouseLeave={() => setShowCoursesSubMenu(false)} // Optional: Hide submenu on mouse leave
                            >
                                <Typography textAlign="center">Courses</Typography>
                                <Menu
                                    id="courses-submenu"
                                    anchorEl={anchorElNav}
                                    open={showCoursesSubMenu}
                                    onClose={() => setShowCoursesSubMenu(false)}
                                >
                                    {courses && courses.map((item, index) => {
                                        return (
                                            <MenuItem
                                                sx={{
                                                    margin: '5px'
                                                }}
                                                // onClick={handleCloseM}
                                                onClick={() => handleBuyCourse(item)}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        )
                                    })}
                                </Menu>
                            </MenuItem>
                            <MenuItem
                                key="Free Resources"
                                onClick={handleFreeResourcesClick}
                                onMouseEnter={handleFreeResourcesClick} // Optional: Show submenu on hover
                                onMouseLeave={() => setShowFreeResourcesSubMenu(false)} // Optional: Hide submenu on mouse leave
                            >
                                <Typography textAlign="center">Free Resources</Typography>
                                <Menu
                                    id="free-resources-submenu"
                                    anchorEl={anchorElNav}
                                    open={showFreeResourcesSubMenu}
                                    onClose={() => setShowFreeResourcesSubMenu(false)}
                                >
                                    <MenuItem
                                        sx={{
                                            margin: '5px'
                                        }}
                                        onClick={handleCloseF}>Current Affair</MenuItem>
                                    <MenuItem
                                        sx={{
                                            margin: '5px'
                                        }}
                                        onClick={handleCloseF}>Blogs</MenuItem>
                                </Menu>
                            </MenuItem>
                            {pages
                                .filter((page) => page !== 'Courses') // Exclude Courses page from the list
                                .map((page) => (
                                    <MenuItem
                                        sx={{
                                            margin: '5px'
                                        }}
                                        key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box> */}
                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: { xs: 'space-between', md: 'none' },
                            width: '100%'
                            // flexGrow: 1,
                            // fontFamily: 'monospace',
                            // fontWeight: 700,
                            // letterSpacing: '.3rem',
                            // color: 'inherit',
                            // textDecoration: 'none',
                        }}
                    >
                        <img alt='' onClick={handlNavigateHome} src={logo} />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu2} // Call handleOpenNavMenu on click
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Drawer component */}
                        <Drawer anchor="right" open={openLeft} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '5rem' }}>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            aria-controls={openM ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openM ? 'true' : undefined}
                            sx={{
                                color: '#fff',
                                fontWeight: '600',
                                fontSize: '15px',
                                textTransform: 'none',
                                gap: '10px',
                                ml: 2,
                            }}
                        >
                            Course
                            {openM === true ?
                                <img alt="" src={upArrow} />
                                :
                                <img alt="" src={downArrow} />
                            }
                        </IconButton>
                        <Menu
                            // anchorEl={anchorElM}
                            // id="account-menu"
                            // open={openM}
                            // onClose={handleCloseM}
                            // onClick={handleCloseM}
                            // id="basic-menu"
                            // anchorEl={anchorElM}
                            // open={openM}
                            // onClose={handleCloseM}
                            // onClick={handleCloseM}
                            // MenuListProps={{
                            //     'aria-labelledby': 'basic-button',
                            // }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorElM}
                            open={openM}
                            onClose={handleCloseM}
                            onClick={handleCloseM}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 6.5,
                                    width: '20%',
                                    // position: 'relative',
                                    top: '200px'
                                },
                            }}
                        >
                            {courses && courses.map((filteredCourse, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        // sx={{
                                        //     margin: '5px'
                                        // }}
                                        // onClick={handleCloseM}
                                        onClick={() => handleBuyCourse(filteredCourse)}
                                    >
                                        {filteredCourse.title}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                        <Button sx={{ color: '#fff', fontWeight: '600', textTransform: 'none' }}>
                            Interview Guidance
                        </Button>
                        <Button sx={{ color: '#fff', fontWeight: '600', textTransform: 'none' }}>
                            Answer Writing Program
                        </Button>
                        <IconButton
                            onClick={handleFreeResources}
                            size="small"
                            aria-controls={openF ? 'account-menu-f' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openF ? 'true' : undefined}
                            sx={{
                                color: '#fff',
                                fontWeight: '600',
                                fontSize: '15px',
                                textTransform: 'none',
                                gap: '10px',
                                ml: 2
                            }}
                        >
                            Free-Resources
                            {/* {openF === true ?
                                <img alt="" src={upArrow} />
                                :
                                <img alt="" src={downArrow} />
                            } */}
                        </IconButton>
                        {/* <Menu
                            anchorEl={anchorElF}
                            id="account-menu-f"
                            open={openF}
                            onClose={handleCloseF}
                            onClick={handleCloseF}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem
                                sx={{
                                    margin: '5px'
                                }}
                                onClick={handleCloseF}>
                                Current Affair
                            </MenuItem>
                            <MenuItem
                                sx={{
                                    margin: '5px'
                                }}
                                onClick={handleCloseF}>
                                Blogs
                            </MenuItem>
                        </Menu> */}
                        <Button sx={{ color: '#fff', fontWeight: '600', textTransform: 'none' }}>
                            Topper’s Strategy
                        </Button>
                    </Box>
                    {/* <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <Button
                            sx={{
                                background: '#FFD80D',
                                borderRadius: '40px',
                                textTransform: 'none',
                                fontWeight: '600',
                                color: 'black',
                                width: ['80%', '100%'],
                                '&:hover': {
                                    background: '#FFD80D',
                                },
                            }}
                        >
                            <img alt='' src={capLogo} />
                            Free
                        </Button>
                    </Box> */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{
                                background: '#FFD80D',
                                borderRadius: '40px',
                                textTransform: 'none',
                                fontWeight: '600',
                                color: 'black',
                                width: ['80%', '100%'],
                                '&:hover': {
                                    background: '#FFD80D',
                                },
                            }}
                        >
                            <img alt='' src={capLogo} />
                            Free Scholarship Test
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar