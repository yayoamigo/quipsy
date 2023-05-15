import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Add, Remove } from "@mui/icons-material";
import { popularProducts } from "../Data";
import { Navbar } from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartDucks";
import {useSelector} from 'react-redux';

const Container = styled.div`
    flex: 1;
    padding-top: 100px;
    min-width: 280px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 205, 200, 0.2);
    position: relative;
`;

const Image = styled.img`
    height: 50%;
    z-index: 1;
`;

const Name = styled.h1`
    color: Black;
    z-index: 2;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

interface Product {
    id: number;
    img: string;
    name: string;
    price: number;
}


const ProductPage = () => {
    const location = useLocation();
    const id = parseInt(location.pathname.split("/")[2]);
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    const handleQuantity = (type: string) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
        console.log(quantity);
      } else {
        setQuantity(quantity + 1);
        console.log(quantity);
      }
    }

   const handleAddCart = () => {
      dispatch(addItem({ price: product!.price,  quantity: quantity, id: product!.id }));
    };

    const handlePrint = () => {
      console.log(cart);
    };

  
    useEffect(() => {
      const getProduct = () => {
        const data = popularProducts.find((item) => item.id === id);
  
        if (data) {
          const { id, img, name, price } = data;
          const productData: Product = {
            id,
            img,
            name,
            price,
          };
          setProduct(productData);
        } else {
          setProduct(null);
        }
      };
      getProduct();
    }, [id]);


  
    return (
        <> 
      <Navbar />
      <Container>
        {product && 
        <Image src={product.img} />
        }
        {product &&
        <Name>{product.name}</Name>
        }
        <AddContainer>
            <AmountContainer>
              <Remove onClick={()=> handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=> handleQuantity("asc")} />
            </AmountContainer>
            <Button onClick={handleAddCart} >ADD TO CART</Button>
            <button onClick={handlePrint}>BUY NOW</button>
          </AddContainer>
      </Container>
      </>
    );
  };


export default ProductPage
