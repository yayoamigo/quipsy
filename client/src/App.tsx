import Home from "./pages/home";
import ProductPage from "./pages/productPage";
import Category from "./pages/category";
import Cart from "./pages/cart";
import { Route, Routes, Navigate } from 'react-router-dom';




function App() {
  //create routes, if there is no user, redirect to login page
  const user = true;
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register"/>} />
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/category/:category" element={<Category/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}

export default App;
