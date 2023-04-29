import styled from "styled-components";
import Logo from '../ShopLogo.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import { IconButton, Link, Typography } from "@mui/material";
import Mop from '../mop.png';
import CourierPh from '../CourierPH.png';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Desc = styled.div`
    margin: 20px 0px;
    font-weight: 200;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h5`
    margin-bottom: 30px;
    font-weight: 300;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: 200;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 8px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    font-weight: 200;
`;

const Payment = styled.img`
    width: 280px;
    display: flex;
    flex-direction: column;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <img src={Logo} alt="logo-icon" width='100px' height='60px'/> 
                <Typography variant="h6" fontWeight='500' marginTop='5px'> SHOPLYFT3R.</Typography>
                <Desc>
                    Hello ShopLyft3rs! We are California US based online store for PH consumers. 
                    We sell different items for all genders and ages. The products we are selling are original brands
                    that are bought from US outlet stores, store main online websites, etc. 
                </Desc>
                <SocialContainer>
                    <IconButton 
                        area-aria-label='facebook' 
                        href='https://www.facebook.com/ShopLyft3rs'
                        sx={{borderRadius: '50%', bgcolor: '#3B5999', color: 'white', mr: '20px'}}
                    
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton 
                        area-aria-label='instagram' 
                        href='https://www.instagram.com/shoplyft3rs/'
                        sx={{borderRadius: '50%', bgcolor: '#E4405F', color: 'white', mr: '20px'}}    
                    >
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton 
                        area-aria-label='email' 
                        href='mailto:shoplyft3rs@gmail.com'
                        sx={{borderRadius: '50%', bgcolor: 'primary.light', color: 'white', mr: '20px'}}     
                    >
                        <EmailIcon/>
                    </IconButton>
                </SocialContainer>   
            </Left>
            <Center>
                <Title>Quick Links</Title>
                <List>
                    <ListItem><Link href='/' underline='hover' color='inherit'>Home</Link></ListItem>
                    <ListItem><Link href='/product' underline='hover' color='inherit'>Collections</Link></ListItem>
                    <ListItem>Videos</ListItem>
                    <ListItem><Link href='/cart' underline='hover' color='inherit'>Cart</Link></ListItem>
                    <ListItem>Policies</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>FAQs</ListItem>
                    <ListItem>About Us</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <IconButton area-aria-label='location' href="https://goo.gl/maps/CjeqgaCy4zhCf7Z57">
                        <RoomIcon sx={{color: 'primary.dark'}}/>
                    </IconButton>
                        Los Angeles, CA, USA
                    </ContactItem>
                <ContactItem>
                    <IconButton area-aria-label='email' href='mailto:shoplyft3rs@gmail.com'>
                        <EmailIcon/>
                    </IconButton>        
                        shoplyft3rs@gmail.com
                </ContactItem>
                <Payment src={Mop} />
                <Payment src={CourierPh} />
            </Right>
        </Container>
    )
}

export default Footer