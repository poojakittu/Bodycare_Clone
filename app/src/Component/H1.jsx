import {Box,Heading,Image,Grid,GridItem,Text,Button} from "@chakra-ui/react"
import Btn from "./Button"

import Small from "./Small";
import Small1 from "./Small1";
import Small3 from "./Small3";
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
            <Box width="50%" margin="auto" >
            <Heading size="xl" padding="20px">NEW Dream Bright</Heading>
            <Text fontSize='xl'>Let fragrance dreams become reality with a unique blend of sapphire berries, night-blooming orchid and crystalized vanilla.</Text>
            <Button size="lg" bg="#f2f2f2 " color="black" marginTop="20px" padding="30px"><Heading size="md">SHOP THE COLLECTION</Heading></Button>
            </Box>

            <Box  marginTop="50px"  >
            <Heading size="lg" padding="20px"></Heading>

            <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} >
            <GridItem w='100%'  >
            <Small3 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5e99db2a/images/Christmas2022/xcat_dream-bright_c1_atb.jpg?yocs=o_s_" title="Shop Body Care"  />
            </GridItem>
            <GridItem w='100%'  >
            <Small3 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9c3dac1d/images/Christmas2022/cndl_holtrads-wb_c1_vn.jpg?yocs=o_s_" title="Shop Candles" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3 text="Hectix holiday>Not this year" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw872bda80/images/Christmas2022/xcat_wellness-pov_c1_hps.jpg?yocs=o_s_" title="ShopWall Flowers" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3 text="Let Wintry shades,shimmering details and flurrying fragrance be your reason for the gifting Season!" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa7f4e5a2/images/Christmas2022/xcat_snow-beautiful_c1_hps.jpg?yocs=o_s_" title="Shop Handeash" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3 text="For the really,really nice list.Bring joy home" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55db398a/images/Christmas2022/xcat_nutcracker-nightb4_c1_hps.jpg?yocs=o_s_" title="Shop Men's" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3 text="Go for gifting gold with a sophisticated routine upgrade." src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4a0649b6/images/Christmas2022/bc_mens-sfl-blktie_c1_hps.jpg?yocs=o_s_" title="Shop Men's" />
            </GridItem>
            </Grid>
            </Box>


            <Box>
                <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw126cc0be/images/Christmas2022/xcat_hp-gifting-zone_c1_hb.jpg?yocs=s_" alt="abc"/>
            </Box>


            <Box>
            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} >
            <GridItem w='100%'  >
            <Btn text="STOCKING STUFFERS"/>
            </GridItem>
            <GridItem w='100%'  >
            <Btn text="GIFT SETS"/>
            </GridItem>
            <GridItem w='100%'  >
            <Btn text="GIFT UNDER $15"/>
            </GridItem>
            <GridItem w='100%'  >
            <Btn text="GIFT UNDER $40"/>
            </GridItem>
            <GridItem w='100%'  >
            <Btn text="GIFT FOR HER"/>
            </GridItem>
            <GridItem w='100%'  >
            <Btn text="GIFT FOR HIM"/>
            </GridItem>
            </Grid>
            </Box>

            
            <Box>
                <Image marginTop="40px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9a12e321/images/Christmas2022/xcat_moxy-launch_fa3_hb.jpg?yocs=s__" alt="abc"/>
            </Box>
            <Box>
            <Heading size="xl" paddingTop="40px">MORE GOOD THINGS, THIS WAY</Heading>
            <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(6, 1fr)']} >
            <GridItem w='100%'  >
            <Small3 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_" title="JOIN THE VIPs"  />
            </GridItem>
            <GridItem w='100%'  >
            <Small3 src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwae0faf07/images/Christmas2022/xcat_bopisgeneric_c1_vn.png?yocs=o_s_" title="SHOP YOUR WAY" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_" title="SIGNUP FOT TEXT" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_" title="SIGNUP EMAIL" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_" title="CHECKOUT AUTO REFRESS" />
            </GridItem>
            <GridItem w='100%'  >
            <Small3  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_" title="SEE RETURN POLICY" />
            </GridItem>
            </Grid>
            </Box>

            <Box  width="100%" m="auto"  >
            <Heading size="xl" paddingTop="40px">Bath & Body Works</Heading>
            <Text width="70%" padding="30px" margin="auto">Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite discontinued scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions, soaps and candles!</Text>
                
                </Box>

        </Box>

    )
}
export default H1;
