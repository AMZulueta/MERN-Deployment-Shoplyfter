import React, { useState } from "react";
import CarouselFirstSlide from '../shoplyfter1.png';
import CarouselSecondSlide from '../CarouselKarl.jpeg';
import CarouselThirdSlide from '../Shoplyfter.jpeg';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components"
import Categories from "../components/Categories";
import { Link, Typography } from "@mui/material";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

export const Homepage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
return (
    <>
        <div>
            <Announcement/>
            <Navbar/>
        </div>
        {/* <Container> */}
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
        {/* </Container> */}
        <Categories />
        <Typography variant='h4' noWrap  sx={{
            mr: 4,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Roboto',
            fontWeight: 700,
            letterSpacing: '0.1rem',
            color: 'inherit',
            textAlign: 'center',
            justifyContent: 'center',
            }}> 
                Latest <Link 
                fontFamily='monospace' 
                fontStyle='italic' 
                letterSpacing='0' 
                underline='hover' 
                href='/product'>
                    ON HAND </Link> items
        </Typography>
        <Products />
        <Newsletter />
        <Footer />
    </>
    );
};