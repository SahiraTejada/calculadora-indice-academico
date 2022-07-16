import React from 'react'
import Users from '../Users';
import {MdOutlineModeEditOutline} from 'react-icons/md';


function Edit (){
  return (
    <Users
   action = 'Editar'
    Icon = {<MdOutlineModeEditOutline size={25}/>}
    
    />
  )
}



export default Edit
