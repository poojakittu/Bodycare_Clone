import React from "react";
import {Routes,Route} from "react-router-dom";

// import Notfound from "./NotFound";
const AllRoute =()=>{
    return(
        <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        {/* <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:id" element={<Single/>}></Route>
        <Route path="*" element={<Notfound/>}></Route> */}
      </Routes>
    )
}
export default AllRoute;