import React, { useContext } from 'react'
import SlotOption from './SlotOption'
import { slots } from '../data'


const SelectSlot = () => {

  return (
    <div className={`bg-white box-shadow-dark-main rounded-lg mx-4 my-5 font-semibold px-2 dark:bg-gray-700 sm:mx-10 pb-4 dark:text-white`}>
    <div className='text-3xl pl-4 py-2'>
    Select a Schedule :-
    </div> 
     {/* Container for slot options */} 
  <div className='flex flex-row gap-3 flex-wrap justify-center my-2'>
       {slots.map((item,index)=>{
           return <SlotOption key={index} text={item} index={index} />
       })}
  </div>
</div>
  )
}

export default SelectSlot