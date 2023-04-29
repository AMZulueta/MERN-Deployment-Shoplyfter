import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EditIcon from '@mui/icons-material/Edit';
import {Typography,
        Button,
        ButtonGroup, 
        Box, 
        Card,
        CardActionArea,
        CardMedia,
        CardContent,
        Fab
    } from '@mui/material';
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

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

const addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('myCart') || "[]");
    cart.indexOf(productId) === -1 ? cart.push(productId) : console.log("This item already exists");
    localStorage.setItem('myCart', JSON.stringify(cart));
}

    return (
        <>
            <Announcement />
            <Navbar/>

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
            <Newsletter />
            <Footer />
        </>
    );
};         

export default DisplayOneProduct;