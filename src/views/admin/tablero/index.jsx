import {Box,Icon,SimpleGrid,useColorModeValue,} from "@chakra-ui/react";
// Assets
// Custom components

import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import React from "react";
import {BiBookBookmark} from "react-icons/bi";
import {AiOutlineUserSwitch,AiOutlineBarChart} from "react-icons/ai";
import UserChart from './components/UserChart';
import Card from "../../../components/card/Card.js";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
           <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={AiOutlineBarChart} color={brandColor} />
              }
            />
          }
          name='Promedio General'
          value='4.0'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={AiOutlineUserSwitch} color={brandColor} />
              }
            />
          }
          name='Usuarios'
          value='12,338'
        />
  
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={BiBookBookmark} color={brandColor} />
              }
            />
          }
          name='Asignaturas'
          value='2935'
        />
      </SimpleGrid>

      <SimpleGrid columns={1} gap='20px' mb='20px'>
        <Card>
      <UserChart/>
      </Card>
    
      </SimpleGrid>

  
    </Box>
  );
}
