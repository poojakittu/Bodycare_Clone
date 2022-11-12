import React from "react";
import{Box,Heading} from "@chakra-ui/react"
import{NavLink} from "react-router-dom";
import "./styles.css";
import { AuthContext } from "../Context/AuthContextProvider";
    
import {  useContext } from "react";   
   
  
   

 
const N3=()=>{
    const defaultStyle={
        textDecoration:"none",
        color:"black"
        
    };
    const activeStyle={
        textDecoration:"none",
        border: "1px solid black",
        paddingLeft:"5px",
        paddingRight:"5px",
        paddingTop:"8px",
        color:"red"
        
    }
    const { state, dispatch } = useContext(AuthContext);

    return(
       
        <Box
        style={{
            display:"flex",
            height:"50px",
            margin:"auto",
            textAlign:"center",
            gap:"80px",
            paddingLeft:"150px",
            width:"100%",
            marginTop:"40px",
            
            

        }}>
         <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/home" to="home"
            >
                <Box>HOME</Box>
                
        </NavLink>   
        
        
        <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/body" to="BODY CARE"
            >
                <Box className="dropdown">
                <Box className="dropbtn">BODY CARE</Box>
                <Box className="dropdown-content">
                    
                    <Box>
                    <Heading as='h5' size='sm' className="point">BATH & SHAWAR  {">"}</Heading>
                    <Heading as='h5' size='sm' className="point">MOISHTURISER       </Heading>
                    <Heading as='h5' size='sm' className="point">NEW & NOW</Heading>
                    <Heading as='h5' size='sm' className="point">EXPLORE BODY CARE</Heading>
                    </Box>
                    <Box>
                    <Heading as='h5' size='sm' className="point">BODY CARE OFFERS</Heading>
                    <p>BUY 3 GET 1 FREE ALL FULL SIZE BODY CARE</p>
                    <p>2/&10,4/10 SHEA BETTER CLEANING BATH</p>
                    <p>BUY 3 GET 1 FREE HAND AND LIP CARE</p>
                    </Box>
                   </Box>

                </Box>
        </NavLink>
        <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/candles" to="CANDELS"
            ><Box className="dropdown">
            <Box className="dropbtn">CANDELS</Box>
            <Box className="dropdown-content">
                
                <Box>
                <Heading as='h5' size='sm' className="point">BATH & SHAWAR</Heading>
                <Heading as='h5' size='sm' className="point">MOISHTURISER</Heading>
                <Heading as='h5' size='sm' className="point">NEW & NOW</Heading>
                <Heading as='h5' size='sm' className="point">EXPLORE BODY CARE</Heading>
                </Box>
                <Box>
                <Heading as='h5' size='sm' className="point">BODY CARE OFFERS</Heading>
                <p>BUY 3 GET 1 FREE ALL FULL SIZE BODY CARE</p>
                <p>2/&10,4/10 SHEA BETTER CLEANING BATH</p>
                <p>BUY 3 GET 1 FREE HAND AND LIP CARE</p>
                </Box>
               </Box>

            </Box>
        </NavLink>
        <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/wall" to="WALLFLOWERS AND AIRFRESSNERS"
            >
            <Box className="dropdown">
                <Box className="dropbtn">WALLFLOWERS AND AIRFRESSNERS</Box>
                <Box className="dropdown-content">
                    
                    <Box>
                    <Heading as='h5' size='sm' className="point">BATH & SHAWAR</Heading>
                    <Heading as='h5' size='sm' className="point">MOISHTURISER</Heading>
                    <Heading as='h5' size='sm' className="point">NEW & NOW</Heading>
                    <Heading as='h5' size='sm' className="point">EXPLORE BODY CARE</Heading>
                    </Box>
                    <Box>
                    <Heading as='h5' size='sm' className="point">BODY CARE OFFERS</Heading>
                    <p>BUY 3 GET 1 FREE ALL FULL SIZE BODY CARE</p>
                    <p>2/&10,4/10 SHEA BETTER CLEANING BATH</p>
                    <p>BUY 3 GET 1 FREE HAND AND LIP CARE</p>
                    </Box>
                   </Box>

                </Box>
        </NavLink>
        <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/hand" to="HANDSOAP AND SANATIZERS"
            >
            <Box className="dropdown">
                <Box className="dropbtn">HANDSOAP AND SANATIZERS</Box>
                <Box className="dropdown-content">
                    
                    <Box>
                    <Heading as='h5' size='sm' className="point">BATH & SHAWAR</Heading>
                    <Heading as='h5' size='sm' className="point">MOISHTURISER</Heading>
                    <Heading as='h5' size='sm' className="point">NEW & NOW</Heading>
                    <Heading as='h5' size='sm' className="point">EXPLORE BODY CARE</Heading>
                    </Box>
                    <Box>
                    <Heading as='h5' size='sm' className="point">BODY CARE OFFERS</Heading>
                    <p>BUY 3 GET 1 FREE ALL FULL SIZE BODY CARE</p>
                    <p>2/&10,4/10 SHEA BETTER CLEANING BATH</p>
                    <p>BUY 3 GET 1 FREE HAND AND LIP CARE</p>
                    </Box>
                   </Box>

                </Box>
        </NavLink>
        <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/cart" to="cart"
            >
        
        <Box className="dropdown">
                <Box className="dropbtn">Cart</Box>
                <Box className="dropdown-content">
                    
                    <Box>
                    <Heading as='h5' size='sm' className="point">BATH & SHAWAR</Heading>
                    <Heading as='h5' size='sm' className="point">MOISHTURISER</Heading>
                    <Heading as='h5' size='sm' className="point">NEW & NOW</Heading>
                    <Heading as='h5' size='sm' className="point">EXPLORE BODY CARE</Heading>
                    </Box>
                    <Box>
                    <Heading as='h5' size='sm' className="point">BODY CARE OFFERS</Heading>
                    <p>BUY 3 GET 1 FREE ALL FULL SIZE BODY CARE</p>
                    <p>2/&10,4/10 SHEA BETTER CLEANING BATH</p>
                    <p>BUY 3 GET 1 FREE HAND AND LIP CARE</p>
                    </Box>
                   </Box>

                </Box>
        </NavLink>
            
        <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key="/Logout" to="Logout"
            >
                  {(state.isAuth===false)? 
                <Box className="dropbtn">LOG OUT</Box> :<Box></Box>}
        </NavLink>
       
                <NavLink
                    style={({isActive})=>{
                        return isActive ? activeStyle:defaultStyle;
                    }}  key="/Signin" to="Signin"
                    >
        
                    <Box className="dropbtn">SIGN IN</Box>
                </NavLink>
                   
           
                
        
      </Box>

        
    )
}
export default N3;