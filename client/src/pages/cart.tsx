import {useSelector} from "react-redux";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { popularProducts } from "../Data";
import { Remove } from "@mui/icons-material";
import { removeItem } from "../redux/cartDucks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Wrapper = styled.div`
    padding: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    padding-top: 200px;
`;

// Styled components
const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const ProductName = styled.p`
  margin-right: 10px;
`;

const ProductPrice = styled.p`
  margin-right: 10px;
`;

const Total = styled.p`
  margin-top: 20px;
  text-align: center;
`;

const Pay = styled.button`
    padding: 10px;
    width: 100%;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
`;

const Cart = () => {
  let cart = useSelector((state: any) => state.cart.products);
  const total = useSelector((state: any) => state.cart.total);

  const handlePrint = () => {
    console.log(cart);
    };

  const dispatch = useDispatch();

  const handleRemove = (uniqueId: string, price: number, quantity: number) => {
    dispatch(removeItem({ uniqueId, price, quantity }));
  };
  
  return (
    <Wrapper>
      <Navbar />
      <CartItems>
        {cart?.map((item: any) => (
          <CartItemContainer key={item.id}>
            <ProductImage src={item.img} alt={item.name} />
            <ProductInfo>
              <ProductName>{item.name}</ProductName>
              <ProductPrice>${item.price}</ProductPrice>
              <p>Quantity: {item.quantity}</p>
               <Remove onClick={() => handleRemove(item.uniqueId, item.price, item.quantity)} /> 
            </ProductInfo>
          </CartItemContainer>
        ))}
      </CartItems>
      <Total>Total: ${total}</Total>
        <Pay onClick={handlePrint}>Pay</Pay>
    </Wrapper>
  );
};

export default Cart;