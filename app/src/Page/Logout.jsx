import { Alert, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {
    logoutACTION
  } from "../Context/action"
  import { AuthContext } from "../Context/AuthContextProvider";
//   import axios from "axios";
//   import { Navigate } from "react-router-dom";

const Logout=()=>{
    const { state, dispatch } = useContext(AuthContext);
    const handleLogout=()=>{
        Alert("helo")
        // dispatch(logoutACTION())
    }
    

   if(!state.isAuth){
    return<Navigate to="/home"/>
   }

    return(
        <>
        <Button onClick={handleLogout}>LOGOUT</Button>

        </>

    )
    
}
export default Logout