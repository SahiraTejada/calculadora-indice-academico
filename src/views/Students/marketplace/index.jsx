import React from "react";

// Chakra imports
import {
  Box,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import UserTb from "./components/UserTb";


export default function Marketplace() {
  
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <SimpleGrid rows={{ base: 1, md: 1, xl: 2}} gap='20px' mb='20px'>
        <UserTb></UserTb>
        </SimpleGrid>
      </Grid>
    </Box>
    
  );
}
