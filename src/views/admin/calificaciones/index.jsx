// Chakra imports
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import Card from "../../../components/card/Card";

// Assets
import ActionsBar from "./components/Actionsbar/ActionsBar";
import SubjectTable from "../marketplace/components/SubjectTable";






export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
        
          <Flex direction='column'>
         
            <SimpleGrid columns={1} gap='20px'>
              <ActionsBar></ActionsBar>
              <Card height={400}  >
              <SubjectTable/></Card>
            

              
            </SimpleGrid>

          </Flex>
       
  
      
       
        </Flex> 
        
       
      {/* Delete Product */}
    </Box>
  );
}
