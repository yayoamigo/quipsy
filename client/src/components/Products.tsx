import Product from "./Product";
import styled from "styled-components";

interface ContainerProps {
  padding: number;
}

const Container = styled.div<ContainerProps>`
  padding-top: ${(props) => props.padding}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: -1;
  cursor: pointer;
`;

const Products = ({ products, padding }: ContainerProps | any) => {
  return (
    <Container padding={padding}>
      {products?.map((item: any) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;


