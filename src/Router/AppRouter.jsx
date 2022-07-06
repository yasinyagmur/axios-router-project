import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Navbar from "../components/NavBar";
import NotFound from "../Pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
