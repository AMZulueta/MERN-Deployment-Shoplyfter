import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;
const Title = styled.h1`
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 30%;
    height: 40px;
    backgground-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    background-color: pink;
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates for live selling and from you favorite products.</Description>
            <InputContainer>
                <Input placeholder="Email address"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter