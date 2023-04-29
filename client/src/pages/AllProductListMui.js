import { 
        Grid
    } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Contents from '../components/Contents';

const Container = styled.div``;

const AllProductListMui = () => {

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Grid container direction='column'>
                <Grid item>All Products</Grid>
                <Grid item container>
                    <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                    <Contents />
                    </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
            </Grid>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default AllProductListMui;