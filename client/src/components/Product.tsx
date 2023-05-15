import styled from "styled-components";
import { Link } from "react-router-dom";

  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 205, 200, 0.2);
    position: relative;
  `;
  

  
  const Image = styled.img`
    height: 50%;
    z-index: 2;
  `;

  const Name = styled.h1`
    color: Black;
    z-index: 2;
    `;

  const Shop = styled.button`
    width: 20%;
    height: 10%;
    border-radius: 10px;
    border: none;
    background-color: rgb(255, 205, 200, 0.8);
    color: Black;
    font-weight: 600;
    cursor: pointer;
`;
  
  
  
  const Product = ({ item }: any) => {
    return (
      <Container>
        <Image src={item.img} />
        <Name>{item.name}</Name>
        <Shop>
        <Link to={`/product/${item.id}`}>Shop Now</Link></Shop>
      </Container>
    );
  };
  
  export default Product;