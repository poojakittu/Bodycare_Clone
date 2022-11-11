import {  Box ,Stack,Text} from '@chakra-ui/react'

const Navbar=()=>{
    return(<>
    <Stack direction={['column', 'row','row']} spacing='24px'>
        <Box w={["0",'0','40%']} h={['0','60px','40px']}bg='#4d88bd' ></Box>
        <Box w={["100%",'80%', '60%']}  color='#4d88bd' m="20">
        <Text fontSize={['md']}>Today only! Online only! Get 2 FREE gifts with any purchase + FREE shipping on $50 order</Text>
            
        </Box>
        <Box w={["0",'0','40%']} h={['0','60px','40px']}bg='#4d88bd' ></Box>
         </Stack>  
    </>)

}
export default Navbar