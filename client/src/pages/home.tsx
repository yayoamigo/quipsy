import {   Navbar} from "../components/Navbar";
import { Promotion } from "../components/Promotion";
import Products from "../components/Products";
import { popularProducts } from "../Data";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Promotion/>
      <Products products={popularProducts} padding={0}/>
    </div>
  );
};

export default Home;