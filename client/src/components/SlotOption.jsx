import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/MyContext'

const SlotOption = ({text,index}) => {
    const {handleSlotSelected, slotSelected,isDark} = useContext(MyContext)
  return (
    <div 
    className={`${isDark?'box-shadow-dark':"box-shadow-2"}  bg-blue-500 text-white rounded-full py-1 w-fit px-4 text-center  font-medium hover:bg-blue-600 sm:py-2 ${slotSelected==index?'bg-green-500 hover:bg-green-700':''}`}
    onClick={()=>handleSlotSelected(index)}
    >
        {text}
    </div>
  )
}

export default SlotOption