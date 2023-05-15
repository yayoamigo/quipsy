import {useSelector} from "react-redux";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { popularProducts } from "../Data";

const Wrapper = styled.div`
    padding: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

const Info = styled.div`
    flex: 1;
    padding: 0px 20px;
`;

//create the component
const Cart = () => {
    const cart = useSelector((state: any) => state.cart);
    const { products } = cart;
    const ProductsToBuy = popularProducts.filter((item: any) => item.id === products.id);
    console.log(products)
    return (
        <Wrapper>
            <Navbar />
            <CartItems>
                {ProductsToBuy?.map((item: any) => (
                    <CartItem key={item.id}>
            </CartItem>
                ))}
            </CartItems>
        </Wrapper>
    );
};

export default Cart;
                    