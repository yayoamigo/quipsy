import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';




function App() {
  //create routes, if there is no user, redirect to login page
  const user = true;
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register"/>} />
    </Routes>
  );
}

export default App;
