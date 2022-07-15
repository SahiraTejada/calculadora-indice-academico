import React from 'react';
import { AreaChart ,Area, XAxis, YAxis, Tooltip } from 'recharts';
import {
  Box,Button,Flex,Icon,} from "@chakra-ui/react";
import { ImUsers} from "react-icons/im";
import {TbChartArea} from "react-icons/tb";


const data = [
  {
    "name": "Enero",
    "Estudiantes": 4000,
    "Profesores": 2400,
    "amt": 2400
  },
  {
    "name": "Febreo",
    "Estudiantes": 3000,
    "Profesores": 1398,
    "amt": 2210
  },
  {
    "name": "Marzo",
    "Estudiantes": 2000,
    "Profesores": 9800,
    "amt": 2290
  },
  {
    "name": "Abril",
    "Estudiantes": 2780,
    "Profesores": 3908,
    "amt": 2000
  },
  {
    "name": "Mayo",
    "Estudiantes": 1890,
    "Profesores": 4800,
    "amt": 2181
  },
  {
    "name": "Junio",
    "Estudiantes": 2390,
    "Profesores": 3800,
    "amt": 2500
  },
  {
    "name": "Julio",
    "Estudiantes": 3490,
    "Profesores": 4300,
    "amt": 2100
  }
]

const Chart = () => {
  return (

     <>
        <Flex justify='space-between' ps='0px' pe='20px' pt='2px' mb= '10px'>
        <Flex align='center' w='100%'>

                    <Button
            bg='secondaryGray.300'
            fontSize='sm'
            fontWeight='500'
            color='secondaryGray.600'
            borderRadius='10px'
            mb='5px'>
            <Icon
              as={ ImUsers}
              color='secondaryGray.600'
              me='4px'
            />
            Cantidad de Usuarios
          </Button>       
           <Button
            ms='auto'
            align='center'
            justifyContent='center'
            bg='secondaryGray.300'
            _hover='secondaryGray.400'
            _focus='secondaryGray.300'
            _active='secondaryGray.300'
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
           >
            <Icon as={TbChartArea} color='brand.500' w='24px' h='24px' />
          </Button></Flex>
          </Flex>
          <Box minH='260px' minW='75%' mt='auto' >

     
   <AreaChart width={978} height={320} data={data} 
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient  id="colorUv" x1="0" y1="0" x2="0" y2="1" >
      <stop offset="5%" stopColor="#3965FF" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#3965FF" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#CBC3E3" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#CBC3E3" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
 
  <Tooltip />
  <Area type="monotone" dataKey="Estudiantes" stroke="#3965FF" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Profesores" stroke="#CBC3E3" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      
  
    </Box></>
   
  );
}

export default Chart