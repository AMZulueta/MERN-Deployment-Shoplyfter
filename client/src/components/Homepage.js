import React, { useState } from "react";
import Logo from '../ShopLogo.jpeg';
import CarouselFirstSlide from '../shoplyfter1.png';
import CarouselSecondSlide from '../CarouselKarl.jpeg';
import CarouselThirdSlide from '../Shoplyfter.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Typography, 
        Button, 
        Stack,
        IconButton, 
        ButtonGroup, 
        Paper,
        AppBar,
        Toolbar,
        Menu,
        MenuItem,
        Box, 
        Link
    } from '@mui/material'
import { Container } from "@mui/system";
import Carousel from 'react-bootstrap/Carousel'

export const Homepage = () => {
    const [anchorEl, setAnchorEl] = useState();
    const [index, setIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    
return (
    <Stack>
        <Box sx={{ display: 'flex', bgcolor: 'primary.light'}}>
            <Typography variant ='subtitle1'  sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontStyle: 'normal',
                letterSpacing: 2,
                pl: 100
            }}
            >
                Shopping is Life!
                50% DP within 5 days. 
                50% remaining upon arrival to PH. 
            </Typography>
            <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                <ButtonGroup variant='text' aria-label='alignment button group'>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <AccountCircleOutlinedIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="search" color="inherit" href='/cart'>
                        <ShoppingBagOutlinedIcon />
                    </IconButton>
                </ButtonGroup>
            </Box>
        </Box>
        {/* // Start of Nav-Bar */}
        <AppBar position='static' sx={{bgcolor: 'white'}}>
            <Container maxWidth='m'>
                <Toolbar disableGutters> 
                    <img src={Logo} alt="logo-icon" width='100px' height='60px'/>
                <Typography variant='h6' noWrap component='a' href='/' sx={{
                    mr: 4,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none'
                }}
                >
                    Hello ShopLyft3rs
                </Typography>
                <Box sx={{ flexGrow: 10, display: { xs: 'none', md: 'flex' }, ml: 55, p: 6 }}>
                    <Button color='inherit' href='/'>Home</Button>
                    <Button 
                        color='inherit' 
                        id='product-category-button' 
                        onClick={handleClick} 
                        aria-controls={open ? 'product-category-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Product Category
                    </Button>
                    <Button color='inherit'>About Us</Button>
                </Box>
                <Menu 
                    id='product-category-menu' 
                    anchorEl={anchorEl} 
                    open={open}
                    MenuListProps={{'aria-labelledby' : 'product-category-button'}}
                    onClose={handleClose}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                >
                    <MenuItem onClick={handleClose}>Bags</MenuItem>
                    <MenuItem onClick={handleClose}>Accesories</MenuItem>
                    <MenuItem onClick={handleClose} href='/product'>All Products</MenuItem>
                </Menu>
                
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        <IconButton area-aria-label='facebook' size='medium' href='https://www.facebook.com/ShopLyft3rs'>
                            <FacebookIcon/>
                        </IconButton>
                        <IconButton area-aria-label='instagram' href='https://www.instagram.com/shoplyft3rs/'>
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton area-aria-label='email' href='mailto:shoplyft3rs@gmail.com'>
                            <EmailIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
         {/* //Start Carousel */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselFirstSlide}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Your Choice, Your Style</h3>
                    <p>See the latest products</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselSecondSlide}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Shop Karl Lagerfeld</h3>
                    <p>Check out all stocks available. PM is the Key!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselThirdSlide}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Shopping is LIFE</h3>
                    <p>
                    50% DP within 5 days. 
                    50% remaining upon arrival to pinas. 
                    Or Layaway while waiting.
                    No rush shipping. ETA: 2-3 months
                    MOP: BDO/Gcash
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
        <Box>
            <Paper sx={{ padding: '4rem'}} elevation={4}>
            <Typography variant='h4' noWrap  sx={{
                        mr: 4,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        letterSpacing: '0.25rem',
                        color: 'inherit',
                        textAlign: 'center',
                        justifyContent: 'center',
                        
                    }}
                    > New <Link fontFamily='monospace' fontStyle='italic' letterSpacing='0' underline='hover' href='/product'>ON HAND</Link> items
                </Typography>
                <Box  sx={{ flexGrow: 1, textAlign: 'right' }}>
        
                    <IconButton aria-label="add" color="secondary.dark" href='/add'>
                            <AddCircleIcon sx={{ fontSize:40 }}/>
                        </IconButton>
                </Box>
                
                <Box
                sx={{
                    height: '300px',
                    width: {
                        xs: 100,
                        sm: 200,
                        md: 300,
                    },
                    bgcolor: 'secondary.dark'
                }}
                >
            </Box>
            </Paper>
        </Box>
    
    </Stack>
    );
};