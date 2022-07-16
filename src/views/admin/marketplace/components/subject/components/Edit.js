import React from 'react'
import Subject from '../Subject';
import {MdOutlineModeEditOutline} from 'react-icons/md';

function Edit ()  {
  return (
    <Subject
    action = 'Editar'
    Icon = {<MdOutlineModeEditOutline size={25}/>}
    />
  )
}

export default Edit