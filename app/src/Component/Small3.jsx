import {Box,Heading,Image,Text} from "@chakra-ui/react"
const Small3=({src,title,text})=>{
    return(
        <Box  padding="20px" bg="white" margin="30px" >
            <Image src={src} alt="abc" width="100%" />
            <Text fontSize="xl" marginTop="20px" color="gray">{text}</Text>
            <Heading size="sm" paddingTop="20px">{title}</Heading>
            <hr  style={{borderTop: "1px dotted black" ,width:"120px", margin:"auto", paddingTop:"20px"}}/>

        </Box>

    )
}
export default Small3;