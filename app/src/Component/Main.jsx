import Navbar from "./Navbar";
import{Box,Text,Heading} from "@chakra-ui/react"
import N1 from "./N1";
import N3 from "./N3";
import N4 from "./N4";
import Home from "./Home";

const Main=()=>{
    return(
        <Box>
        <Navbar/>
        <Box width="100%" bg="#f2f2f2 " m="auto">
            <N1/>

        </Box>
        <Box  width="100%" m="auto" >

            <N3/>
        </Box>
        <Box  width="100%" m="auto" bg="#e6f5ff" height="50px">
         <Heading as='h4' size={["xs","sm",'md']} padding="10px" color="#4d88bd ">  
        My Bath & Body Works Rewards is  now avilable nationwide! Join the VIPs </Heading>
        
        </Box>
        <Box width="100%">
            <Home/>
            
        </Box>
        </Box>
    )
}
export default Main;