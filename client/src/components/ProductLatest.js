import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Checkbox, IconButton } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Info = styled.div`
    opacity: 0;
    height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

// const Icon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 10px;
//     transition: all 0.5s ease;
//     &:hover {
//         background-color: #e9f5f5;
//         transform: scale(1.1);
//     }
// `;

const ProductLatest = (product) => {

    const addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem('myCart') || "[]");
        cart.indexOf(productId) === -1 ? cart.push(productId) : console.log("This item already exists");
        localStorage.setItem('myCart', JSON.stringify(cart));
    }

return (     
    <Container>
        <Circle/>
        <Image src={product.product.image} />
        <Info>
            <IconButton onClick={() => addToCart(product._id)} sx={{ bgcolor: 'white', m: 1}}>
                <ShoppingCartOutlinedIcon/>
            </IconButton>
            <IconButton href={`/product/${product._id}`} sx={{ bgcolor: 'white', m: 1}}>
                <InfoOutlinedIcon />
            </IconButton>
            <IconButton sx={{ bgcolor: 'white', p:0, m: 1}}>
                <Checkbox icon={<FavoriteBorder  />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
            </IconButton>
        </Info>
    </Container> 
    );
};

export default ProductLatest;