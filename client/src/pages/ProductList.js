import { IconButton } from "@mui/material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box} from "@mui/system";
import Products from "../components/Products";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar />
            <Title>Bags</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText></Filter>
                <Filter><FilterText>Sort Products:</FilterText></Filter>
            </FilterContainer>
            <Products/>
            {/* Start Add Product  */}
            <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                <IconButton aria-label="add" color="secondary.dark" href='/add'>
                    <AddCircleIcon sx={{ fontSize:40 }}/>
                </IconButton>
            </Box>
            <Newsletter />
            <Footer/>
        </Container>
    );
};

export default ProductList