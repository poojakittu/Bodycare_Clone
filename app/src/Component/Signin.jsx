import {Box,GridItem,Grid,Image,Heading,Text,Button,
    InputGroup,Stack,FormLabel,Input,Container,Alert,AlertIcon,AlertDescription} from "@chakra-ui/react";
import "./styles.css";
import React from "react"
import { useState, useContext } from "react";
import{NavLink} from "react-router-dom";
import {
  loginFailureAction,
  loginSuccessAction,
  loginLoadingAction 
} from "../Context/action"
import { AuthContext } from "../Context/AuthContextProvider";
import axios from "axios";
import { Navigate,Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const Signin=()=>{
    const { state, dispatch } = useContext(AuthContext);
    const [show, setShow] = React.useState(false)
    const[go,setGo]=useState(false)

  const handleClick = () => setShow(!show)
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogin = () => {
    dispatch(loginLoadingAction());
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
       
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };

 

  if (state.isError) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg",
        }}
        centerContent={true}
      >
        <Alert
          status="error"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
          px={{ base: 1, sm: 1, md: 4, lg: 6 }}
        >
          <AlertIcon />
          <AlertDescription>
            Somthing went wrong. Please Refresh
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  const { email, password } = loginDetails;
    return(<Box>
        <Box width="70%" margin="auto">
        <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        <GridItem w='100%'  >
            <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" alt="abc"/>
        </GridItem>
        <Heading as='h5'  size='lg' width="100%" className="point" paddingTop="30px" textAlign="left" margin="auto">Sign In or Sign Up</Heading>
        </Grid>
        </Box>
        <Box padding="30px">
        <hr  style={{borderTop: "1px solid gray" ,width:"75%", margin:"auto", paddingTop:"20px"}}/>           
        </Box>
        <Box  width="60%" margin="auto">

            
        <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}>
           
        <GridItem w='100%'  >
           
            <Text fontSize="lg">SIGN IN</Text>
            <Text fontSize="md">If you already have an account with us, sign in below</Text>
            <Box  marginTop="40px">
            <Stack>
            <InputGroup marginTop="10px">
                <FormLabel>Email Address</FormLabel>
                <Input name="email"
                type="email"
                value={email}
                onChange={handleChange} 
                placeholder='Enter your Email' width="70%" />
                </InputGroup>

            {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
            <InputGroup paddingTop="20px">
               
            <FormLabel>Password</FormLabel>
            <Input              
                type={show ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder='Enter password'
                width="50%" marginLeft="30px"
                />
            
           
                <Button  onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
            </InputGroup>
            </Stack>
            <Box>
                <br/>

            <Button marginTop="35px" bg="black" color="white" padding="25px"  onClick={handleLogin}>SIGN IN</Button>
           </Box>
            </Box>
        </GridItem>
        
            <Box className="vl" marginLeft="200px"></Box>
        
        <GridItem w='100%' >
            <Text fontSize="lg">SIGNUP</Text>
            <Text fontSize="md" marginTop="15px"marginBottom="15px">Create an account to access the best of your favorite store</Text>
            <Image  margin="auto" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_" alt="abc"/>
            <NavLink key="/Signup" to="Signup"><Button marginTop="15px" bg="black" color="white" padding="25px">CREATE AN ACCOUNT</Button>
            </NavLink>
        </GridItem>
        </Grid>

        </Box>

    </Box>

    )
}
export default Signin;