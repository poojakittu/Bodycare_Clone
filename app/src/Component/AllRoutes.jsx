import React from "react";
import {Routes,Route} from "react-router-dom";
import Candle from "../Page/Candle";
import Cart from "../Page/Cart";
import Logout from "../Page/Logout";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";



// import Notfound from "./NotFound";
const AllRoute =()=>{
    return(
        <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Signup/Signin" element={<Signin/>}></Route>
        <Route path="/Signin/Signup" element={<Signup/>}></Route>
        <Route path="/Signin/Signup/Signin" element={<Signin/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>
        <Route path="/CANDELS" element={<Candle/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/LOGOUT" element={<Logout/>}></Route>
        <Route path="/Signin/CANDELS" element={<Candle/>}></Route>
      </Routes>
    )
}
export default AllRoute;