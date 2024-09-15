import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const SeatOption = ({text,index}) => {
    const {isDark,handleSeatSelected,seatSelected} = useContext(MyContext)
  return (
    <div className={`${isDark?'box-shadow-3 background-light':"box-shadow-2  "} flex flex-row gap-2  bg-blue-600 px-3 py-2 rounded-full text-xl text-white`}>
        <div>{text}</div>
        <div>
            <input type="number"  value={seatSelected[text] || 0} min='0' max="100"  className='text-green-500 rounded-full text-center w-16'
             onChange={(e)=>handleSeatSelected(e,text)}
            />
        </div>
    </div>
  )
}

export default SeatOption