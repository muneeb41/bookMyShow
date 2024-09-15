import React, { useContext } from 'react'
import MyContext from '../context/MyContext'


const BookNow = () => {
     // Extract handleSubmit function from context
    const {handleSubmit} = useContext(MyContext)
    
  return (
     <div className='flex flex-row justify-center'>
          <button className="bg-red-500 mb-3 box-shadow-dark-main text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 active:bg-red-600 focus:outline-none  transition"
            // Call handleSubmit when button is clicked
            onClick={handleSubmit}
          >
                          Book Now
          </button>
     </div>
  )
}

export default BookNow