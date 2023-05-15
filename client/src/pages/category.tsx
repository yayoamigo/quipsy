import styled from "styled-components";
import { popularProducts } from "../Data";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const Wrapper = styled.div`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;


interface ProductCat {
  id: number;
  img: string;
  name: string;
  cat: string;
}


const Category = () => {
  const location = useLocation();
  const cat= location.pathname.split("/")[2];
  const [ProductsArr, setProducts] = useState<ProductCat[] | null>([]);

  useEffect(() => {
    const getProducts = () => {
      const filteredProducts = popularProducts.filter((item) => item.cat === cat);

      if (filteredProducts.length > 0) {
        const productData = filteredProducts.map(({ id, img, name, cat }) => ({
          id,
          img,
          name,
          cat,
        }));
        setProducts(productData);
      } else {
        setProducts(null);
      }
    };

    getProducts();
  }, [cat]);


    return (
      <>
      <Navbar />
      <Products products={ProductsArr} padding={150} />
      </>
    );
};


export default Category