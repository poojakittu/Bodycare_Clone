import Navbar from "./Navbar";
import{Box,Heading} from "@chakra-ui/react"
import N1 from "./N1";
import N3 from "./N3";



const Main=()=>{
    return(
        <Box paddingBottom="120px">
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
        
        </Box>
    )
}
export default Main;