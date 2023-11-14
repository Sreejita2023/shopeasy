import Nav from "./components/Nav";
import Mainstream from "./components/Mainstream";
import Bill from './pages/Bill'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Eachcategory from "./pages/Eachcategory";
const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Mainstream/>}>
         <Route index element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/cart" element={<Bill/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/category" element={<Category/>}/>
         <Route path="/category/men" element={<Eachcategory/>}/>
         <Route path="/category/women" element={<Eachcategory/>}/>
         <Route path="/category/jewelery" element={<Eachcategory/>}/>
         <Route path="/category/electronics" element={<Eachcategory/>}/>
      </Route>
    </Routes>
  </div>;
};

export default App;
