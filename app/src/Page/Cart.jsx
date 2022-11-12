import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
  Center,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,Image
} from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout, removeFromCart } from "../Context/CartContext/action";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleCheckout = () => {
    dispatch(checkout());
    onClose();
  };
  return (
    <Box>
      <TableContainer mt={{ base: 20, sm: 20, md: 28, lg: 32 }}>
        <Table
          variant="simple"
          colorScheme="grey"
          size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        >
          <TableCaption>No Exchange / No Refund</TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Product Name</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Price</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Remove from Cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.map((cartItem) => (
              <Tr key={cartItem.id}>
               <Td><Image src={cartItem.img} alt="abc" width="100px"/></Td>
                <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.title}</Td>
                <Td fontSize={{ base: "xs", md: "md" }}>${cartItem.price}</Td>
                <Td fontSize={{ base: "xs", md: "md" }}>
                  <Button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                    Remove From Cart
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
            <Th fontSize={{ base: "xs", md: "md" }}></Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Final Price</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>$
                {(state.reduce((b, c) => b + c.price, 0))}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Center mt={{ base: 4, md: 8 }}>
        <Button variant="outline" colorScheme="grey" onClick={onOpen}>
          Place Order
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Place Order
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to place order?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleCheckout} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
    </Box>
  );
};

export default Cart;