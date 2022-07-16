// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";
import Banner from "views/admin/profile/components/Banner";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
export default function GeneralInformation(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  //const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Informacion General
      </Text>
      <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Maria Hernández'
          carrera='Ingenieria en Software'
          trigpa='3.75'
          totalgpa='3.85'
          materia='20'
        />
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='ID'
          value= '1234567'
        />
        <Information
          boxShadow={cardShadow}
          title='Area Academica'
          value='Ingenieria'
        />
        <Information
          boxShadow={cardShadow}
          title='Condición Academica'
          value='Normal'
        />
        <Information
          boxShadow={cardShadow}
          title='Fecha de Ingreso'
          value='20/6/22'
        />
      </SimpleGrid>
    </Card>
  );
}
