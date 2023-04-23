import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Container = styled.div`
  height: 135px;
  background-color: #5b08a9;
  z-index: 2;
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

const UserName = styled.span`
    font-size: 15px;
    font-weight: 400;
    color: grey;
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
                <LogoContaier>
                    <Logo src="https://firebasestorage.googleapis.com/v0/b/zucatto-6c730.appspot.com/o/Yayoamigosoy_logotype_for_socialmedia_website_whose_logo_is_a_c_2e13f396-362d-41f6-84f7-1d3bcfb56b0a-removebg-preview.png?alt=media&token=960e7346-e85a-445b-9391-14cc4ea2196b" />
                </LogoContaier>
                <SearchContainer>
                <SearchIcon style={{color: "gray", fontSize: 26}} />
                    <Input placeholder="Search for friends, news and more" />
                </SearchContainer>                
            </Left>
            <Right>
                <DataContainer>
                <ProfileContainer>
                    <Profile src="https://firebasestorage.googleapis.com/v0/b/zucatto-6c730.appspot.com/o/1664972407940.jpg?alt=media&token=40e7aa2a-51ed-4894-8e47-5bfb959719cd" />
                </ProfileContainer>
                <NameContainer>
                    <Name>Yayo Amigo</Name>
                    <UserName>@yayoamigo</UserName>
                </NameContainer>
                </DataContainer>
                <IconContainer>
                    <Icon>
                        <SettingsOutlinedIcon style={{color: "black", fontSize: 26}} />
                    </Icon>
                    <Icon>
                        <NotificationsActiveIcon style={{color: "black", fontSize: 26}} />
                    </Icon>
                    <Icon>
                        <LightbulbIcon style={{color: "black", fontSize: 26}} />
                    </Icon>
                </IconContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}