import React from 'react'
import {Box,Flex,Button} from '@chakra-ui/react';
import {MdEdit,MdLibraryAdd,MdAdd} from 'react-icons/md';
import { Link } from 'react-router-dom';

const ActionsBar = () => {
  return (
    <Flex width={'100%'}  h={'70'} alignItems={'center'} alignContent={'center'}>
      <Flex>
   <Box mb='10px' mt={5}>
        <Flex>
          <Box>
       <Button boxShadow={'4px -3px 9px 1px rgba(0,0,0,0.07)'} mr={5}>Total: 4</Button>
  
     </Box>
     <Box style={{position: 'absolute',
  right: '0',}}>
    <Link to="/about">
       <Button  leftIcon={<MdEdit />}  variant='brand' mr={6}>Editar</Button>
       </Link></Box> </Flex>
       
       </Box>
    </Flex>
       </Flex>
  )
}

export default ActionsBar
