import {  Image,Box ,Stack,Text,Input,InputGroup,InputLeftElement} from '@chakra-ui/react'

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
                width={["20px"]}
                objectFit='cover'
                src='data:image/jpeg;base64,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'
                alt='Dan Abramov'
            />
        </Box>

        <Box w={["30%","40%","100%"]} m={["0","0","-100"]}  ml={["70px","30","5"]}>
          <Text as='cite' fontSize={["20px","30px",'50px']} color='tomato'>Body Cares</Text>
        </Box>

        <Box  w={["0","20%","40%"]}   m={["0","-45px","50px"]} ml={["450","300","1100"]} display="flex">
        <InputGroup>
            <Input type='tel' placeholder='Search Products and Items' w="48%"/>
            <InputLeftElement
            pointerEvents='none'
            children={<BsSearch />}
            />
        </InputGroup>
        <Box width="20px" height="20px" m={["-10px","10px","10px"]} ml={["10","10px","-300px"]}> <AiOutlineShoppingCart width="100%" height="30"/></Box>
        <Box width="20px" height="20px" m={["-10px","10px","10px"]} ml={["10","10px","0px"]}> <CgGirl/></Box>
           
            

        </Box>

        </Box>
         </Stack>    
   
    
    </>)

}
export default N1