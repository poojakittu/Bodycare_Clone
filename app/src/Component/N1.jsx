import {  Image,Box ,Stack,Text,Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import  image  from '../Image/1.png';

import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgGirl } from "react-icons/cg";
import "./styles.css";
const N1=()=>{
   
    return(<>
  
    


        

        <Stack direction={['row', 'row','row']}>
        <Box  w="80%" m="auto" height={["40px","40px","100px"]}>
        <Box  w={["0","0","100%"]}  >
              
        <Image
                boxSize={["0","0",'100']}
                width="40px"
                objectFit='cover'
                src={image}
                alt='Dan Abramov'
            />
        </Box>

        <Box w={["30%","40%","100%"]} m={["0","0","-100"]}  ml={["70px","30","5"]}>
          <Text as='cite' fontSize={["20px","30px",'50px']} color='tomato'>Body Cares</Text>
        </Box>

        <Box  w={["0","20%","40%"]}   m={["0","-45px","50px"]} ml={["450","300","1100"]} display="flex">
        <InputGroup>
            <Input type='text' placeholder='Search Products and Items' w="48%"/>
            <InputLeftElement
            pointerEvents='none'
            children={<BsSearch />}
            />
        </InputGroup>
        <Box width="20px" height="20px" m={["-10px","10px","10px"]} ml={["10","10px","-300px"]}> <AiOutlineShoppingCart width="100%" height="30"/></Box>
                              
        <a href='/Signin.jsx'><Box width="20px" height="20px" m={["-10px","10px","10px"]} ml={["10","10px","0px"]}> <CgGirl/>  </Box> </a>
       
        
            

        </Box>

        </Box>
         </Stack>    
   
    
    </>)

}
export default N1