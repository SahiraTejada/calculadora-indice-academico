import React from 'react'
import Users from '../Users';
import {RiAddLine} from 'react-icons/ri';

function Create ()  {
  return (
    <Users
    action = 'Crear'
    Icon = {<RiAddLine size={25}/>}
    />
  )
}

export default Create