import React from 'react'
 import  '../../css/login.css';
 import { Breadcrumb} from 'react-bootstrap';
 import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Box,Input,Image,Text
} from '@chakra-ui/react';
 import { Button} from '@chakra-ui/react';
 import LoginImage from '../../imgs/Reading.svg';
 import { AiFillQuestionCircle } from 'react-icons/ai';
 import {  SiSamsungpay } from 'react-icons/si';

function Login() {
  return (
   <>
<Box className='splitScreen'>
        <Box className='topPane' textAlign='center'>
       
        < Box className='LoginImage-container' position={'relative'}>
            <Image position={'absolute'} src={LoginImage}/>
        </ Box>
        </Box>
        < Box className='bottomPane' textAlign='center'  >
          <Box position={'relative'} left={115}>
            <SiSamsungpay color="#3884e7" size={60}></SiSamsungpay></Box>
         <h2 className='title'>Login</h2>
          <form>
  <Box mb={6}>
  <FormControl className='form-control'>
  <Input id='email' type='email' borderRadius={50} variant='outline' placeholder='Usuario' />
  
</FormControl>
</Box>
  <Box mb={6}>
  <FormControl className='form-control'>
  <Input id='email' type='password'  borderRadius={50} variant='outline' placeholder='Contrasena' />
</FormControl>
 <Text mt={4}>El usuario o contraseña no son correctos</Text>
</Box>

  <Button type="submit" className='btn' variant='solid'>
    Acceder
  </Button>
    < Box>
          <a href='#' className='reset'>
                 ¿Olvidaste tu contraseña?
                </a>
    </ Box>
</form>
 < Box className='question' position={'fixed'}>
   <Breadcrumb>
      <Breadcrumb.Item href='#'>
        <AiFillQuestionCircle color="#3490ef" size={30}/>
      </Breadcrumb.Item>
    </Breadcrumb>
    </ Box>
        </ Box>
    </Box>
    </>
  )
}

export default Login
