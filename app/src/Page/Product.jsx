import React from "react";
import{Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"


const Product = ({image,title,key,price,category,gender}) => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Box boxShadow='xs' p='6' rounded='md' bg='white'>
    <Stack data-cy="product" key={key}>
      <Image data-cy="product-image" src={image} alt={title} />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
    </Box>
  );
};

export default Product;