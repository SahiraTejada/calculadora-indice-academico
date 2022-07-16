import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    useColorModeValue,
    Flex,
    Process,
  } from '@chakra-ui/react';
 // import { Box,Icon } from '@chakra-ui/react';
  // import ImageUser from './Componentes/ImageUser';
  import Card from "components/card/Card.js";
  // import { Button} from '@chakra-ui/react';
  //import {BiUserPlus} from "react-icons/bi";
  
  import React from 'react'
  
  const UserTb = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    return (
      <Card align='center' maxHeight='420px'>
        <Flex px='25px' mb='5px' align='center'>
      </Flex>
  <TableContainer pt='12px'>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Clave</Th>
          <Th>Nombre</Th>
          <Th>Profesor</Th>
          <Th>Creditos</Th>
          <Th>Area Academica</Th>
          <Th>Calificación</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr> 
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >85</Td>
        </Tr>

        <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >-</Td>
        </Tr>

        <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >85</Td>
        </Tr>

        <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >-</Td>
        </Tr>

        <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >85</Td>
        </Tr>

        <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >-</Td>
        </Tr>

       <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >85</Td>
        </Tr>

          <Tr>
          {/* Rows */}
          <Td>IDS200</Td>
          <Td>Diseño de Software</Td>
          <Td >Rosario Guzman</Td>
          <Td >3</Td>
          <Td >Ingenieria</Td>
          <Td >-</Td>
          </Tr>

      </Tbody>
    </Table>
  </TableContainer>
 </Card>   
    )
  }
  
  export default UserTb