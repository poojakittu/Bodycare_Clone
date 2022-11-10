import {Box,Heading,Image} from "@chakra-ui/react"
const Small1=({src,title})=>{
    return(
        <Box  padding="20px" bg="white" margin="30px" >
            <Image src={src} alt="abc" width="100%"/>
            <Heading size="sm" paddingTop="20px">{title}</Heading>

        </Box>

    )
}
export default Small1;