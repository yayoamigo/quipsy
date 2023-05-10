import {   Navbar} from "../components/Navbar";
import { Promotion } from "../components/Promotion";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Promotion/>
      <Products/>
    </div>
  );
};

export default Home;