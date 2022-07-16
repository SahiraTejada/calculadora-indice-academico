import React, { useState } from 'react'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
const SelectDropDown = () => {

    const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
  }

  const  options  = [
    { label:  'Estudiante', value:  'Estudiante'  },
    { label:  'Profesor', value:  'Profesor' },
   
  ]

  return (
    <div >
      <MultiSelect
        onChange={handleOnchange}
        options={options}
        disableChip= {true}
        singleSelect={true}
      />
    </div>
  )
}

export default SelectDropDown
