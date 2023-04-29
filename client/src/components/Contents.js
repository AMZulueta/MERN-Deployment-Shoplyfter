import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, 
    CardHeader, 
    IconButton, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography, 
    Checkbox, 
    Button,
    Grid
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Contents = () => {

    const [ productList, setProductList ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product", {withCredentials: true})
            .then((res) => {
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
            })
            .catch((err) => { 
            console.log(err)
            })
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

return (
    <Grid item xs={12} sm={4}>
    {productList.map((product, i)=>{
        return <Card key={i} sx={{margin: 5, mt: 8}}>
            <CardHeader
                title={product.title}
            />
            <CardMedia
                component="img"
                height="20%"
                image={product.image}
                alt="post-image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="addCart" onClick={() => addToCart(product._id)}>
                    <ShoppingCartOutlinedIcon />
                </IconButton>
            </CardActions>
        <Button onClick={() => deleteFilter(product._id)}>Remove</Button>
    </Card>
        })}
    </Grid>
    );
};

export default Contents;