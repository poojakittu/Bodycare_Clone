import {Button,Heading} from "@chakra-ui/react"
const Btn=({text})=>{
    return(
        <>
        <Button color="white" bg="black" marginTop="30px" padding="40px"><Heading size="md">{text}</Heading></Button>
        </>
    )
}
export default Btn