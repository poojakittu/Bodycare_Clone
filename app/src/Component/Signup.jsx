import {Box,GridItem,Grid,Image,Heading,Button,
    FormControl,FormLabel,Input} from "@chakra-ui/react";
import { useState } from "react";
import "./styles.css";
import React from "react";
const initState = {
    email: "",
    reemail: "",
    zip: "",
    phone: "",
    password:""
  };
const Signup=()=>{
    const [formData, setFormData] = useState(initState);
    const [users, setUsers] = useState([]);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const handleChange = (e) => {
    
        const { type, checked, value, name } = e.target;
        const inputValue = type === "checkbox" ? checked : value;
    
        setFormData({ ...formData, [name]: inputValue });
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.value===" "){
            alert("Fill the Information")
          }else{
        alert(`Data has been added successfully`);
          }       
       
        setUsers([...users, formData]);
        setFormData.email=" ";

      };
    
      const { reemail, email, password, phone, zip } = formData;
     
      
      
    return(<Box>
        <Box width="70%" margin="auto">
        <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        <GridItem w='100%'  >
            <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" alt="abc"/>
        </GridItem>
        <Heading as='h5'  size='lg' width="100%" className="point" paddingTop="30px" textAlign="left" margin="auto">CREATE AN ACCOUNT</Heading>
        </Grid>
        </Box>
        <Box padding="30px">
        <hr  style={{borderTop: "1px solid gray" ,width:"75%", margin:"auto", paddingTop:"20px"}}/>           
        </Box>
        <Box  width="20%" margin="auto" >

            
        <FormControl isRequired >
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter Email'
           name="email"
           type="email"
           value={email}
           onChange={handleChange} />
        <FormLabel marginTop="20px">Confirm Email</FormLabel>
        <Input placeholder='Confirm Email' 
            name="reemail"
            type="email"
            value={reemail}
            onChange={handleChange}
        />
        <FormLabel marginTop="20px">Zip/Postal Code</FormLabel>
        <Input placeholder='Zip/Postal Code'
            name="zip"
            type="number"
            value={zip}
            onChange={handleChange} />
        <FormLabel marginTop="20px">Phone</FormLabel>
        <Input placeholder='Phone Number'
            name="phone"
            type="number"
            value={phone}
            onChange={handleChange}
             />
        <FormLabel marginTop="20px">Password</FormLabel>
        <Input              
                type={show ? 'text' : 'password'}
                placeholder='Enter password' width="80%"
                name="password"
                value={password}
                onChange={handleChange}
                />
            
           
                <Button  onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
        <Button marginTop="35px" bg="black" color="white" padding="25px" type="submit" onClick={handleSubmit}>SIGN UP</Button>   
        </FormControl>

        </Box>
       

    </Box>

    )
}
export default Signup;