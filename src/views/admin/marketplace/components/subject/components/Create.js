import React from 'react'
import Subject from '../Subject';
import {RiAddLine} from 'react-icons/ri';

function Create ()  {
  return (
    <Subject
    action = 'Crear'
    Icon = {<RiAddLine size={25}/>}
    />
  )
}

export default Create
