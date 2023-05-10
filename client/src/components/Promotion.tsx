import styled from "styled-components";

const Container = styled.div`
    height: 1000px;
    background-color: black;
    display: flex;
`;

const ImageContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
flex: 1;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


//put it in the middle
const TitleContainer = styled.div`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.2);
flex-direction: column;
`;



const Title = styled.h1`
color: white;
`;

const Paragraph = styled.p`
color: white;
`;


export const Promotion = () => {
  return (
    <Container>
        <ImageContainer>
        <Image src="https://firebasestorage.googleapis.com/v0/b/quipsy-329c2.appspot.com/o/irene-kredenets-dwKiHoqqxk8-unsplash.jpg?alt=media&token=513d5acb-277c-493d-8e0e-7ad470cffc2a" />
        <TitleContainer>
            <Title>NEW COLLECTION</Title>
            <Paragraph>SHOP NOW</Paragraph>
        </TitleContainer>
        </ImageContainer>
    </Container>
  )
}
