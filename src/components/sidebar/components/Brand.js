import React from "react";

// Chakra imports
import { Flex, useColorModeValue,Icon,Text } from "@chakra-ui/react";
 import { FaBookReader  } from 'react-icons/fa';
import { HSeparator } from "../../separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
       <Icon as={FaBookReader } color='#3884e7'  my='10px' boxSize={50}/>
       <Text fontWeight={'bold'} fontSize='20' color=' #444' mb='5'>Indice Academico</Text>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
