import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const MovieOption = ({text,index}) => {

  const {handleMovieSelected, movieSelected,isDark} = useContext(MyContext)

  return (
    <div 
     // Apply styles based on dark mode and selection state
    className={`${isDark?'box-shadow-dark':"box-shadow-2"} bg-blue-500 text-white rounded-full py-1 w-fit px-4 text-center  font-medium hover:bg-blue-600 sm:py-2 ${movieSelected==index?'bg-green-500 hover:bg-green-700':''} `}
     // Handle click events to select a movie
    onClick={()=>handleMovieSelected(index)}
    >
        {text}
    </div>
  )
}

export default MovieOption