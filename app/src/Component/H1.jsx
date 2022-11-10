import {Box,Heading,Image,Grid,GridItem} from "@chakra-ui/react"

import Small from "./Small";
import Small1 from "./Small1";
const H1=()=>{
    return(
        <Box>
            <Box width="100%" bg="#e40532" >
                <Heading size={["xs","sm","md"]} color="white" padding="10px">Today ONLY!</Heading>
            </Box>
            <Box width="100%"  height="700px"  >
                <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw3d73a684/images/Christmas2022/350crs_c1_16x9.gif?yocs=s_" alt="abc" height="100%"width="100%"/>

            </Box>
            <Box padding="20px">
                <Heading size="sm">*Promo Detail.In store:must show email</Heading>
                
            </Box>
            <Box bg="#f2f2f2" margin="30px"  >
            <Heading size="lg" padding="20px">TODAY'S TOP OFFERS</Heading>

            <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} >
            <GridItem w='100%'  >
            <Small f="ALL CANDLES" s="Buy 1, Get 1 FREE" t="Lowest-Priced item is free"/>
            </GridItem>
            <GridItem w='100%'   >
            <Small f="ALL FULL SIZE BODY CARE" s="Buy 3, Get 1 FREE" t="Lowest-Priced item is free"/>
            </GridItem>
            <GridItem w='100%'   >
            <Small f="Wall FLOWERS FREGNANCE REFILS" s="5/$25"/>
            </GridItem>
            <GridItem w='100%'  >
            <Small f="HAND SHOPS" s="5/$25"/>
            </GridItem>
            </Grid>
            </Box>
            <Box width="100%"  height="700px"  >
                <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw03022172/images/Christmas2022/bc_sb-faceted_c1_hm.gif?yocs=s__" alt="abc" height="100%"width="100%"/>

            </Box>
            <Box  marginTop="50px"  >
            <Heading size="lg" padding="20px">SHOP BY CATEGORY</Heading>

            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']} >
            <GridItem w='100%'  >
            <Small1 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw90169280/images/Christmas2022/bc_dream-bright_c1_vn.jpg?yocs=o_s_" title="Shop Body Care"  />
            </GridItem>
            <GridItem w='100%'  >
            <Small1 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9c3dac1d/images/Christmas2022/cndl_holtrads-wb_c1_vn.jpg?yocs=o_s_" title="Shop Candles" />
            </GridItem>
            <GridItem w='100%'  >
            <Small1 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4201241f/images/Christmas2022/diff_decor_c1_vn.jpg?yocs=o_s_" title="ShopWall Flowers" />
            </GridItem>
            <GridItem w='100%'  >
            <Small1 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ac572be/images/Christmas2022/sp_holtrads-gifting_c1_vn.jpg?yocs=o_s_" title="Shop Handeash" />
            </GridItem>
            <GridItem w='100%'  >
            <Small1 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf3b1b26/images/Christmas2022/bc_mens-sfl-blktie_c1_vn.jpg?yocs=o_s_" title="Shop Men's" />
            </GridItem>
            </Grid>
            </Box>

        </Box>

    )
}
export default H1;
