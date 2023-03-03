import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Logo from '../ShopLogo.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EditIcon from '@mui/icons-material/Edit';
import {Typography,  
        Stack,
        Button,
        IconButton, 
        ButtonGroup, 
        AppBar,
        Toolbar,
        Menu,
        MenuItem,
        Box, 
        Card,
        CardActionArea,
        CardMedia,
        CardContent,
        Fab
    } from '@mui/material'
import { Container } from "@mui/system";

const DisplayOneProduct = (props) => {
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [id]);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then((res) => {
                console.log("Successfully deleted product");
                navigate("/add");
    })
            .catch((err) => console.log("Something went wrong", err))
    }

    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    };

const addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('myCart') || "[]");
    cart.indexOf(productId) === -1 ? cart.push(productId) : console.log("This item already exists");
    localStorage.setItem('myCart', JSON.stringify(cart));

 }

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

            {/* // START Display One Product */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 22 }}
                >
                <Card sx={{maxWidth: 750,
                    pb: 20,
                    pr: 20,
                    pl: 20}}
                >
                <CardActionArea>
                        <CardMedia
                        component='img'
                        image={oneProduct.image}
                        height='450'
                        />
                    </CardActionArea>
                    <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{ 
                                textAlign: 'center'}}
                            >
                                {oneProduct.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{
                                textAlign: 'center', 
                                color: 'primary.dark'}}
                            > 
                                $ {oneProduct.price}
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{
                                textAlign: 'center'
                                }}
                            > 
                                {oneProduct.description}
                            </Typography>
                            <Box direction='row' sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 4}}>
                                <ButtonGroup 
                                    variant='contained'
                                    size='small'
                                    aria-label='btn group'
                                >
                                    <Button sx={{ pl: 3, pr: 2}} onClick={() => deleteProduct(oneProduct._id)}>
                                        Delete
                                    </Button>
                                    <Button onClick={() => addToCart(oneProduct._id)}>Add to Cart</Button>
                                </ButtonGroup>
                            </Box>
                        </CardContent>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 1 }}
                    >
                        <Fab color="secondary" aria-label="edit" href={`/add/${oneProduct._id}`}>
                            <EditIcon />
                        </Fab>
                    </Box>
                </Card>
            </Box>
    </Stack>
    );
};         

export default DisplayOneProduct;