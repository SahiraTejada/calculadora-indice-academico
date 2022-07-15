import React from "react";

import { Icon } from "@chakra-ui/react";
import {MdBarChart,MdPerson,MdHome,MdLock,} from "react-icons/md";
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
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Tablero,
  },
  {
    name: "Asignaturas",
    layout: "/admin",
    path: "/nft-marketplace",
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
    path: "/data-tables",
    component: Calificaciones,
  },
  {
    name: "Usuarios",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Usuarios,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },

];

export default routes;
