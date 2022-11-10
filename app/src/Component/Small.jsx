import {Box,Text,Button,Heading} from "@chakra-ui/react"
const Small=({f,s,t})=>{
    return(
        <Box  padding="30px" bg="white" margin="30px">
            <Text paddingTop="30px">{f}</Text>
            <Heading size='md' paddingTop="30px">{s}</Heading>
            <Text paddingTop="30px">{t}</Text>
            <Button color="white" bg="black" size='lg' marginTop="30px">
                Shop Now
            </Button>

        </Box>

    )
}
export default Small;