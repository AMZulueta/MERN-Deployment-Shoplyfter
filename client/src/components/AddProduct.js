import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Logo from '../ShopLogo.jpeg';


const AddProduct = (props) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [ image, setImage ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

            const newProduct = {
                title,
                price,
                description,
                image
            }

        axios
            .post("http://localhost:8000/api/product", newProduct)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/product");
            })
            .catch((err) => console.log(err));
            // window.location.reload();
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
                    <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    name="title"
                    type="text"
                    />
                </div>
                <div className="form-input">
                    <label>Price</label>
                    <input 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                    />
                </div>
                <div className="form-input">
                    <label>Description</label>
                    <input 
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description}
                    name="description"
                    type="text"
                    />
                </div>
                <div className="form-input">
                    <label>Image Url</label>
                    <input 
                    onChange={(e) => setImage(e.target.value)} 
                    value={image}
                    name="image"
                    type="text"
                    />
                </div>
                <div className="Add">
                    <button className="add-btn">Add</button>
                    <button className="add-btn"><Link to ={`/product`}>Cancel</Link></button>
                
                </div>
                <hr/>
            </form>
        </div>
    );
};

export default AddProduct;