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
import ActionsBar from "../../../components/Actionsbar/ActionsBar";
import SubjectTable from "../marketplace/components/SubjectTable";






export default function calificaciones() {
  // Chakra Color Mode

 
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

            <Card height={456}>
              nlnnm
            </Card>



          </Flex>
       
  
      
       
        </Flex> 
        
       
      {/* Delete Product */}
    </Box>
  );
}
