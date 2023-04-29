import axios from "axios";
import React, { useState, useEffect } from "react"
import {
        IconButton,
        Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components"
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    margin-top: 10px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductDesc = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font-size: 18px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;
export const Cart = (props) => {

const [ cart, setCart ] = useState([]);

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


    // function total(productId) {
    //     return productId.map(({price}) => price)
    // }

    // const cartItem = total(cart);

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
            <Container>
                <Announcement />
                <Navbar />
                <Wrapper>
                    <Title>Your Bag</Title>
                    <Top>
                        <TopButton>Continue Shopping</TopButton>
                        <TopTexts>   
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Wishlist(0)</TopText>
                        </TopTexts> 
                        <TopButton type="filled">Checkout</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                        { cart.map((product, index) => (
                            <Product>
                                <ProductDetail key={index}>
                                    <Image alt="" src={product.image} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductDesc><b>Desc:</b> {product.description}</ProductDesc>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail> 
                                    <ProductAmountContainer>
                                        {/* <AddIcon />
                                        <ProductAmount>1</ProductAmount>
                                        <RemoveIcon /> */}
                                        <IconButton href='/cart' onClick={() => deleteProduct(product._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ProductAmountContainer>
                                    <ProductPrice> PHP {product.price}</ProductPrice>
                                </PriceDetail>
                            </Product>
                            ))}
                        </Info>
                        { cart.map((product, index) => (
                        <Summary>
                            <SummaryTitle>ORDER SUMMMARY</SummaryTitle>
                            <SummaryItem>    
                                <SummaryItemText>Shipping</SummaryItemText>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>{ccyFormat(product.price)}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>{ccyFormat(invoiceSubtotal)}</SummaryItemPrice>
                            </SummaryItem>
                            <Button variant="contained">Checkout</Button>
                        </Summary>
                        ))}
                    </Bottom>
                </Wrapper>
                <Footer />
        </Container>                        
    );
};