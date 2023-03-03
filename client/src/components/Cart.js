import axios from "axios";
import { useState, useEffect } from "react"
import { Stack, 
        Box,
        Typography,
        Button,
        ButtonGroup,
        IconButton,
        AppBar,
        Toolbar,
        Menu,
        MenuItem,
        TableContainer, 
        Table, 
        TableHead, 
        TableRow, 
        TableCell, 
        TableBody } from "@mui/material";
import Logo from '../ShopLogo.jpeg';
import { Container } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import DeleteIcon from '@mui/icons-material/Delete';


export const Cart = (props) => {

const [ cart, setCart ] = useState([]);
// const navigate = Navigate();

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('myCart'));
        axios
            .get(`http://localhost:8000/api/product` + (cart ? '?productIds=' + JSON.stringify(cart) : ''))
            .then((response) => setCart(response.data))
            .catch((err) => console.log(err));
    }, []);    

    const deleteProduct = (productId) => {
        axios
            .delete(`http://localhost:8000/api/product/${productId}`)
            .then((res) => {
                console.log("Successfully deleted product");
                // navigate('/cart')
    })
            .catch((err) => console.log("Something went wrong", err))
    }

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const invoiceSubtotal = subtotal(cart);

    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    };

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

            <TableContainer sx={{display: 'flex', p:10}}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Order Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Product Title</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Remove</TableCell>
                        <TableCell align="right">Sum</TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { cart.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell>{product.title}</TableCell>
                            <TableCell align="right">{product.description}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => deleteProduct(product._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell align="right">{ccyFormat(product.price)}</TableCell>
                        </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}