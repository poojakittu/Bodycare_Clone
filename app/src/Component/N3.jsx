import React from "react";
import{Box} from "@chakra-ui/react"
import{NavLink} from "react-router-dom";
const links=[
    {path:"/top",title:"TOP OFFERS"},
    {path:"/body",title:"BODY CARE"},
    {path:"/Candles",title:"CANDELS"},
    {path:"/wall",title:"WALLFLOWERS AND AIRFRESSNERS"},
    {path:"/hand",title:"HANDSOAP AND SANATIZERS"},
    {path:"/MAN",title:"MAN'S SHOP"},
    {path:"/MOXY",title:"MOXY"},
    {path:"/HOLYDAY",title:"HOLIDAY SHOP"}
];

 
const N3=()=>{
    const defaultStyle={
        textDecoration:"none",
        color:"black"
    };
    const activeStyle={
        textDecoration:"none",
        color:"red"
    }

    return(
       
        <Box
        style={{
            display:"flex",
            height:"50px",
            margin:"auto",
            textAlign:"center",
            gap:"100px",
            paddingLeft:"150px",
            width:"100%",
            margin:"auto",
            marginTop:"20px",
            
            

        }}>
        {links.map((link)=>(
            <NavLink
            style={({isActive})=>{
                return isActive ? activeStyle:defaultStyle;
            }}  key={link.path} to={link.path}
            end>
                
                {link.title}
            </NavLink>
            ))
        }
        
      </Box>

        
    )
}
export default N3;