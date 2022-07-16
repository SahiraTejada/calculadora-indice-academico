import React from 'react'
 import  '../../css/login.css';
 import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Box,Input,Image,Text
} from '@chakra-ui/react';
 import { Button} from '@chakra-ui/react';
 import LoginImage from '../../imgs/Reading.svg';
 import {  FaBookReader} from 'react-icons/fa';

function Login() {
  return (
  
<Box className='splitScreen'>
        <Box className='topPane' textAlign='center'>
       
        < Box className='LoginImage-container' position={'relative'}>
            <Image position={'absolute'} src={LoginImage}/>
        </ Box>
        </Box>
        < Box className='bottomPane' textAlign='center'  >
          <Box position={'relative'} left={115}>
            < FaBookReader color="#3884e7" size={60}/> </Box>
         <h2 className='title'>Login</h2>
          <form>
  <Box mb={6}>
    {/*imput para el usuario*/}
  <FormControl className='form-control'>
  <Input id='usuario'  borderRadius={50} variant='outline' placeholder='Usuario' />
</FormControl>
</Box>
  <Box mb={6}>
      {/*imput para el contrasena*/}
  <FormControl className='form-control'>
  <Input id='contraseña' type='password'  borderRadius={50} variant='outline' placeholder='Contraseña' />
</FormControl>
{/*Text para indicar si el usuario y contraseña*/}
 <Text mt={4}>El usuario o contraseña no son correctos</Text>
</Box>

{/*Boton para acceder a las diferentes dashboard*/}
  <Button type="submit" className='btn' variant='solid'>
    Acceder
  </Button>

  {/*Link para poder recuperar  contraseña*/}
    < Box>
          <a href='#' className='reset'>
                 ¿Olvidaste tu contraseña?
                </a>
    </ Box>
</form>
 
        </ Box>
    </Box>
   
  )
}

export default Login
