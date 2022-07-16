import React from "react";

import { Icon } from "@chakra-ui/react";
import {MdBarChart,MdPerson,MdHome} from "react-icons/md";
import {GoSignOut} from "react-icons/go";
import {BiBookBookmark} from "react-icons/bi";

// Admin Imports
import Tablero from "./views/admin/tablero";
import Asignaturas from "./views/admin/marketplace";
import Usuarios from "./views/admin/Usuarios";
import Calificaciones from "./views/admin/calificaciones";


// Auth Imports
import SignInCentered from "./views/auth/signIn";


const routes = [
  {
    name: "Tablero",
    layout: "/admin",
    path: "/tablero",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Tablero,
  },
  {
    name: "Asignaturas",
    layout: "/admin",
    path: "/asignaturas",
    icon: (
      <Icon
        as={BiBookBookmark}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component:  Asignaturas,
    secondary: true,
  },
  {
    name: "Calificaciones",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/calificaciones",
    component: Calificaciones,
  },
  {
    name: "Usuarios",
    layout: "/admin",
    path: "/usuarios",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Usuarios,
  },
  {
    name: "Salir",
    layout: "/auth",
    path: "/login",
    icon: <Icon as={GoSignOut} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },

];

export default routes;
