// Chakra imports
import {
  //Avatar,
  Box,
  //Flex,
  //FormLabel,
  Icon,
  //Select,
  SimpleGrid,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

// Assets
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  //MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
//Componentes
import {
  columnsDataColumns,
} from "views/admin/dataTables/variables/columnsData";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";

import General from "views/admin/profile/components/General";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";


export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
     
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3}}
        gap='20px'
        mb='20px'>
        <MiniStatistics
         // Mini estadisticas de la app. 
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Índice Académico'
          value='4.0'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='Calificaciones asignadas'
          value='0'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total de Asignaturas'
          value='8'
        />
      </SimpleGrid>

      <SimpleGrid rows={{ base: 1, md: 1, xl: 2}} gap='20px' mb='20px'>
        <General />
        <WeeklyRevenue />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </SimpleGrid>
    </Box>
  );
}
