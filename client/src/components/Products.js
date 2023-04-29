import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductLatest from './ProductLatest';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = () => {

    const [ productList, setProductList ] = useState([]);
    
    useEffect(() => {
        console.log('hi');
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

return (
        <Container>
            {productList.map((product, index) => (
                <ProductLatest key={index} product={product} />
            ))}
        </Container>
    );
};

export default Products