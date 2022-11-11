import React from "react";
import {Routes,Route} from "react-router-dom";
import Candle from "../Page/Candle";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";



// import Notfound from "./NotFound";
const AllRoute =()=>{
    return(
        <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/moxy" element={<Signup/>}></Route>
        <Route path="/login" element={<Signin/>}></Route>
        <Route path="/CANDELS" element={<Candle/>}></Route>
        
      </Routes>
    )
}
export default AllRoute;