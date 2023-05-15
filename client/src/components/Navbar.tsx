import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Face3Icon from '@mui/icons-material/Face3';
import FaceIcon from '@mui/icons-material/Face';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 135px;
  background-color: #f76a31;
  z-index: 1;
  position: fixed;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 135px;
`;

const Left = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    padding-left: 80px;
    gap: 50px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: 80px;
    justify-content: space-between;
`;

const LogoContaier = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: white;
`;

const Logo = styled.img`
    width: 100%;
    object-fit: contain;
`;


const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    width: 60%;
    height: 40px;
    background-color: white;
    box-shadow: 8px 4px 17px 2px rgba(54,42,42,0.68);
    -webkit-box-shadow: 8px 4px 17px 2px rgba(54,42,42,0.68);
    -moz-box-shadow: 8px 4px 17px 2px rgba(54,42,42,0.68);
`;

const Input = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    width: 100%;
    font-size: 25px;
`;

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    flex: 2;
`;

const ProfileContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 8px 4px 17px 2px rgba(54,42,42,0.68);
    -webkit-box-shadow: 8px 4px 17px 2px rgba(54,42,42,0.68);
    -moz-box-shadow: 8px 4px 17px 2px rgba(54,42,42,0.68);
`;

const Profile = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: white;
`;


const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    gap: 25px;
    flex: 1;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;




export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to={`/`}>
                <LogoContaier>
                    <Logo src="https://firebasestorage.googleapis.com/v0/b/zucatto-6c730.appspot.com/o/Yayoamigosoy_logotype_for_socialmedia_website_whose_logo_is_a_c_2e13f396-362d-41f6-84f7-1d3bcfb56b0a-removebg-preview.png?alt=media&token=960e7346-e85a-445b-9391-14cc4ea2196b" />
                </LogoContaier>
                </Link>
                <SearchContainer>
                <SearchIcon style={{color: "gray", fontSize: 26}} />
                    <Input placeholder="Search by size, color or style" />
                </SearchContainer>                
            </Left>
            <Right>
                <DataContainer>
                <ProfileContainer>
                    <Profile src="https://firebasestorage.googleapis.com/v0/b/zucatto-6c730.appspot.com/o/1664972407940.jpg?alt=media&token=40e7aa2a-51ed-4894-8e47-5bfb959719cd" />
                </ProfileContainer>
                <NameContainer>
                    <Name>Yayo Amigo</Name>
                </NameContainer>
                </DataContainer>
                <IconContainer>
                <Link to={`/category/women`}> 
                    <Icon>
                        <Face3Icon style={{color: "black", fontSize: 26}} />
                    </Icon>
                    </Link>
                    <Link to={`/category/men`}> <Icon>
                     
                        <FaceIcon style={{color: "black", fontSize: 26}} />
                    </Icon>
                    </Link>
                    <Icon>
                        <NotificationsActiveIcon style={{color: "black", fontSize: 26}} />
                    </Icon>
                    <Icon>
                        <Link to={`/cart`}>
                        <ShoppingCartTwoToneIcon style={{color: "black", fontSize: 26}} />
                        </Link>
                    </Icon>
                </IconContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}
