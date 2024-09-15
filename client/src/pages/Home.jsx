import React, { useContext } from 'react'
import Header from '../components/Header'
import SelectMovie from '../components/SelectMovie'
import SelectSlot from '../components/SelectSlot'
import SelectSeat from '../components/SelectSeat'
import BookNow from '../components/BookNow'
import LastBooking from '../components/LastBooking'
import MyContext from '../context/MyContext'
import BookNowAnimation from '../components/BookNowAnimation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const {showAnimation } = useContext(MyContext)
    
  return (
      <div className="  ">
           {/* Conditionally render BookNowAnimation component based on showAnimation state */}
        {showAnimation && <BookNowAnimation/> }
          <Header/>
          <div className='flex flex-col  md:flex-row-reverse md:justify-center gap-0 '>
             <LastBooking/>
             <div>
               <SelectMovie/>
               <SelectSlot/>
               <SelectSeat/>
               <BookNow/>
             </div>
          </div>
            {/* ToastContainer component to display notifications */}
          <ToastContainer position="top-center" theme="colored" autoClose={3000}/>
      </div>
  )
}

export default Home