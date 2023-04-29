import React, { useState } from "react";
import { 
        Badge, 
        ButtonGroup, 
        IconButton,  
        InputBase, 
        styled,
        Typography,
        } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../ShopLogo.jpeg';

const Container = styled('div')(({ theme }) => ({
    backgroundColor: 'primary.light'
}));

const Wrapper = styled('div')(({ theme }) => ({
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const Left = styled('div')(({ theme }) => ({
    flex: '1',
    display: 'flex',
    alignItems: 'center'
}));

const Language = styled('div')(({ theme }) => ({
    fontSize: '14px',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    width: '12ch',
    '&:focus': {
    width: '20ch',
            },
        },
    },
}));

const Center = styled('div')(({ theme }) => ({
    flex: '1',
    justifyContent: 'center',
    textAlign: 'center'
}));

const Right = styled('div')(({ theme }) => ({
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end'
}));

const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Left>
                <Center>
                    <img src={Logo} alt="logo-icon" width='120px' height='70px'/>
                    <Typography variant='h6' component='a' href='/'
                        sx={{ display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 500
                    }}
                    >
                        SHOPLYFT3R.
                    </Typography>
                </Center>
                <Right>
                    <ButtonGroup variant='text' aria-label='alignment button group'>
                        
                        <IconButton size="large" aria-label="search" color="inherit">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                        <IconButton size="large" aria-label="search" color="inherit" href='/cart'>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                </Right>
            </Wrapper> 
        </Container>
        
    );
};

export default Navbar;