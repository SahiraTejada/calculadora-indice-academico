import React from 'react';
import '../create.css';
import {
FormLabel,
FormControl,
FormControlProps,
Input,
SimpleGrid,
Box,
Text,
Flex,
Button} from '@chakra-ui/react';
import SelectDropDown from '../SelectDrop';
import {RiAddLine} from 'react-icons/ri';
import {ArrowForwardIcon} from '@chakra-ui/icons';

function Subject (props){

  return (
    <Box>
        <Box mt={10} alignItems='center'  justifyContent={'center'}>
           
        <header>{props.action} Asignatura</header>
     
        </Box>
        <Box className='Arrow'>
        <ArrowForwardIcon float={'right'} position={'relative'} top={-58}  h={8} w={8} /></Box>
         <form >
    <SimpleGrid columns={3} >
         <Box   height='80px'    > 
         <FormControl isRequired className='clave' >
    <FormLabel>Clave</FormLabel>
    <Input
     placeholder='IDS345L'  htmlSize={7} width='auto' 
      
    />
  </FormControl></Box>
  <Box   height='80px'    > <Box marginLeft={-52} paddingLeft={12}><FormControl isRequired  >
    <FormLabel>Nombre</FormLabel>
    <Input
     placeholder='LABORATORIO DE ASEGURAMIENTO DE LA CALIDAD DEL SOFTWARE'  width={540} 
      
    />
  </FormControl></Box>
 </Box>
  <Box   height='80px' paddingInlineStart={120} >
    <Box width={95} ><FormControl isRequired>
  <FormLabel htmlFor='first-name'>Credito</FormLabel>
  <Input id='first-name' />
</FormControl></Box></Box>
</SimpleGrid>
<Box mt={10}>
<SimpleGrid columns={3} >
  <Box   height='80px'>
    <Flex>
    
<Box mt={1}>
    <Text fontWeight={'500'} fontFamily="DM Sans" pb='2'>Pre-requisito</Text>
<SelectDropDown/></Box></Flex>

</Box>
  <Box   height='80px' marginLeft={12}>    
   <Flex  >
<Box mt={1} >
<Text fontWeight={'500'} fontFamily="DM Sans" pb='2'>Co-requisto</Text>
<SelectDropDown/>
</Box>
</Flex>
</Box>
  <Box   height='80px'></Box>
</SimpleGrid>
</Box>
<Button
leftIcon={props.Icon}
          
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
            top={-70}
            right={12}
          >
            {props.action}
          </Button>
        
          </form>
</Box>
  )
}



export default Subject
