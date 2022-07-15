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
// Custom components


import React from "react";
import Card from "../../../components/card/Card";

// Assets
import ActionsBar from "../../../components/Actionsbar/ActionsBar";
import SubjectTable from "../marketplace/components/SubjectTable";
import Create from '../marketplace/components/Create';


export default function Overview() {
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
    

           <Card mt={40} w={900}  mx={67} right={2} h={340} mb={40}>
         <Create/>
        
         </Card>
      
        
       
        </Flex> 
        
       
      {/* Delete Product */}
    </Box>
  );
}
