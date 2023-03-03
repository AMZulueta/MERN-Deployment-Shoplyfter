import axios from "axios";
import { useEffect, useState } from "react";
import Logo from '../ShopLogo.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material/styles';
import {Typography, 
        Button, 
        Stack,
        IconButton, 
        ButtonGroup, 
        AppBar,
        Toolbar,
        Menu,
        MenuItem,
        Box, 
        Grid,
    } from '@mui/material'
import { Container } from "@mui/system";

export const DisplayAllProduct = (props) => {
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    };

    const [ productList, setProductList ] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((response) => setProductList(response.data))
            .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/product/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);

                const newList = productList.filter((product, index) => product._id !== idFromBelow)
                setProductList(newList);
                })
            .catch((err) => {
                console.log(err);
            });
    }

    const addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem('myCart') || "[]");
        cart.indexOf(productId) === -1 ? cart.push(productId) : console.log("This item already exists");
        localStorage.setItem('myCart', JSON.stringify(cart));
    }

    const Img = styled('img')({
        margin: 'auto',
        display: 'inline-block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

return (
    <Stack>
        <Box sx={{ display: 'block', bgcolor: 'primary.light', 
        }}>
            <Typography variant ='subtitle1'  sx={{
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontStyle: 'normal',
                letterSpacing: 2
            }}
            >
                Shopping is Life!
                50% DP within 5 days. 
                50% remaining upon arrival to PH.
            </Typography>
            <Box sx={{ display: 'block', textAlign: 'right' }}>
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
        {/* // Start of NavBar */}
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
            
        <Stack>
            <Typography variant='h2' sx={{
                textAlign: 'center',     
                mt: 3
            }}
            > All Products
            </Typography>
        </Stack>
        {/* // Start of Grid Product List */}
            <Grid container
                direction='row'
                spacing={4}
            >
                <Grid item container spacing={4} justifyContent='center'>
                    <Grid item />
                        {
                        productList.length > 0 &&
                        productList.map((product, index) => (
                            <Grid item key={index}>
                                <Box sx={{ width: 350, height: 250 }}>
                                    <Img src={product.image} />
                                        <Grid item  xs={12} sm={4}>
                                            <Typography noWrap>{product.title}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Typography noWrap>$ {product.price} </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Typography noWrap>{product.description}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Stack>
                                                <Button onClick={() => deleteFilter(product._id)}>Remove</Button>
                                                <Button onClick={() => addToCart(product._id)}>Add to Cart</Button>
                                                <Button href={`/product/${product._id}`}
                                                > 
                                                    details
                                                </Button>
                                            </Stack>
                                        </Grid>
                                </Box>
                            </Grid>
                            ))
                        }
                    <Grid item xs={0} sm={2} />    
                </Grid>
            </Grid>
            {/* // Add Product Button */}
            <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                <IconButton aria-label="add" color="secondary.dark" href='/add'>
                    <AddCircleIcon sx={{ fontSize:40 }}/>
                </IconButton>
            </Box>
    </Stack>
    );
};

