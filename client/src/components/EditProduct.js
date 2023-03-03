import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import Logo from '../ShopLogo.jpeg';
import { Button, ButtonGroup, Stack } from "@mui/material";

const EditProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [ image, setImage ] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setImage(res.data.image);
            })
            .catch((err) => console.log(err))
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const updatedProduct = {
            title,
            price,
            description,
            image
        }

        axios.put(`http://localhost:8000/api/update/product/${id}`, updatedProduct)
            .then((res) => {
                console.log("Successfully updated product", res);
                navigate("/product");
            })
            .catch((err) => {
                console.log(err.response.data.error.errors);
            });
    };

    return (
        <div className="container">
            <img src={Logo} alt="logo-icon" width='100px'/>
            <hr/>
            <h1>Product Manager</h1>
            <Link to={"/"}>back to home</Link>
            <form onSubmit={onSubmitHandler}>
                <div className="form-input">
                    <label>Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} 
                        value={title}
                        name="title"
                        type="text"/>
                </div>
                <div className="form-input">
                    <label>Price</label>
                    <input onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"/>
                </div>
                <div className="form-input">
                    <label>Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} 
                    value={description}
                    name="description"
                    type="text"/>
                </div>
                <div className="form-input">
                    <label>Image</label>
                    <input onChange={(e) => setImage(e.target.value)} 
                    value={image}
                    name="image"
                    type="text"/>
                </div>
                <Stack sx={{ alignItems: 'center', pt: 3}}>
                    <ButtonGroup variant='contained' size='small'>
                        <Button onClick={(e) => onSubmitHandler(e)}>Update</Button>
                        <Button href={`/product`}>Cancel</Button>
                    </ButtonGroup>
                </Stack>
                <hr/>
            </form>
        </div>          
    );
};

export default EditProduct;