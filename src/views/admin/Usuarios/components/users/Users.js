import React,{useState} from 'react';
import '../../../marketplace/components/create.css';
import {
FormLabel,
FormControl,
FormControlProps,FormHelperText,FormErrorMessage,
Input,
SimpleGrid,
Box,
Text,
Flex,Icon,
Button} from '@chakra-ui/react';
import SelectDropDown from '../SelectDropDown';
import {RiAddLine} from 'react-icons/ri';
import {ArrowForwardIcon} from '@chakra-ui/icons';
import '../../../../../css/users.css';



function Users (props)  {
  return (
    <Box>
    <Box mt={10} alignItems='center'  justifyContent={'center'}>
        <header>{props.action} Usuario</header>
     <Box className='Arrow'>
        <ArrowForwardIcon float={'right'} position={'relative'} top={-58}  h={8} w={8} /></Box>
          <form>
            <Box>
     <SimpleGrid columns={3} spacing='40px'>
  <Box  height='80px'>
    
    <FormControl isRequired className='clave' >
    <FormLabel>Nombre</FormLabel>
    <Input
     placeholder='IDS345L'  
      
    />
  </FormControl></Box>
  <Box  height='80px'>
    
    <FormControl isRequired className='clave' >
    <FormLabel>Apellido</FormLabel>
    <Input
     placeholder='IDS345L'   
      
    />
  </FormControl></Box>
 

   <Flex mb={-6}>
    
<Box >
    <Text fontWeight={'500'} fontFamily="DM Sans" pb='2'>Rol</Text>
<SelectDropDown/></Box></Flex>
</SimpleGrid>

   <SimpleGrid columns={3} spacing='40px' mt={10}>
   <Box  height='80px'>
    
    <FormControl isRequired className='clave' >
    <FormLabel>Correo</FormLabel>
    <Input
     placeholder='IDS345L'   
      
    />
  </FormControl></Box>
    <Box  height='80px'>
    
    <FormControl isRequired className='clave' >
    <FormLabel>Usuario</FormLabel>
    <Input
     placeholder='IDS345L'   
      
    />
  </FormControl></Box>
    <Box  height='80px'>
    
    <FormControl isRequired className='clave' >
    <FormLabel>Contraseña</FormLabel>
    <Input
     placeholder='IDS345L'   
      
    />
  </FormControl></Box>
        
</SimpleGrid>
</Box>
<Button
leftIcon={props.icon}
          
            style={{backgroundColor:'#4070f4',borderRadius:'5px'}}
            font-size='14px'
            font-weight='400'
            align-items='center'
             justify-conten='center'
             pr={6}
             pl={4}
             m={23}
            type='submit'
            float={'right'}
            color='white'
            bottom={-37}
            right={15}
          >
            Crear
          </Button>
 </form>
 </Box>
</Box>

  )
}

export default Users
