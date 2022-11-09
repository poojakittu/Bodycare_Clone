import Navbar from "./Navbar";
import{Box} from "@chakra-ui/react"
import N1 from "./N1";
import N3 from "./N3";

const Main=()=>{
    return(
        <Box>
        <Navbar/>
        <Box width="100%" bg="#f2f2f2 " m="auto">
            <N1/>

        </Box>
        <Box  width="100%" m="auto">

            <N3/>
        </Box>
        </Box>
    )
}
export default Main;