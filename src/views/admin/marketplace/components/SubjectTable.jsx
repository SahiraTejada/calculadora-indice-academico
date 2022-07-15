import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const SubjectTable = () => {
  return (

        <TableContainer  overflowY={'scroll'} font-family={"DM Sans"} textAlign={'center'}>
  <Table variant='simple' textAlign={'center'}>
    <Thead borderColor='gray.200'  justify='space-between' align='center'>
      <Tr borderColor='gray.200' color='gray.400'>
        <Th  borderColor='gray.200' textAlign={'center'}>Clave</Th>
        <Th borderColor='gray.200' textAlign={'center'}>Nombre</Th>
        <Th  borderColor='gray.200' textAlign={'center'}>Correquisito</Th>
        <Th borderColor='gray.200' textAlign={'center'}>Prerequisito</Th>
        <Th borderColor='gray.200' textAlign={'center'}>Creditos</Th>
        <Th borderColor='gray.200' textAlign={'center'}>Profesor</Th>
      </Tr>
    </Thead>
    <Tbody color={'secondaryGray.900'} fontSize='sm' fontWeight='700'  >
      <Tr  textAlign={'center'}>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres</Td>
        <Td textAlign={'center'} >25.4</Td>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres  </Td>
        <Td  textAlign={'center'}>25.4</Td>
      </Tr>
      <Tr>
        <Td textAlign={'center'}>feet</Td>
        <Td textAlign={'center'}>centimetres (cm)</Td>
        <Td  textAlign={'center'}>30.48</Td>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres  </Td>
        <Td textAlign={'center'} >25.4</Td>
      </Tr>
      <Tr>
        <Td textAlign={'center'}>yards</Td>
        <Td textAlign={'center'}>metres (m)</Td>
        <Td textAlign={'center'} >0.91444</Td>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres  </Td>
        <Td textAlign={'center'} >25.4</Td>
      </Tr>
          <Tr>
        <Td textAlign={'center'}>yards</Td>
        <Td textAlign={'center'}>metres (m)</Td>
        <Td textAlign={'center'} >0.91444</Td>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres  </Td>
        <Td textAlign={'center'} >25.4</Td>
      </Tr>
          <Tr>
        <Td textAlign={'center'}>yards</Td>
        <Td textAlign={'center'}>metres (m)</Td>
        <Td textAlign={'center'} >0.91444</Td>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres  </Td>
        <Td textAlign={'center'} >25.4</Td>
      </Tr>
          <Tr>
        <Td textAlign={'center'}>yards</Td>
        <Td textAlign={'center'}>metres (m)</Td>
        <Td textAlign={'center'} >0.91444</Td>
        <Td textAlign={'center'}> IDS345</Td>
        <Td textAlign={'center'}>millimetres  </Td>
        <Td  textAlign={'center'}>25.4</Td>
      </Tr>
  
    </Tbody>
  </Table>
</TableContainer>
    
        
  )
}

export default SubjectTable
