import { createContext, useState ,useEffect} from "react";
import { toast } from 'react-toastify';
import { moviesList ,slots  } from '../data.js'
import audioPath from '/result_success.mp3'
import axios from 'axios';



// Create a context
const MyContext = createContext();

// Context provider component
export const MyProvider = ({children})=>{

    
 //////////////////////////////////////////////////////// DARK MODE SECTION //////////////////////////////////////////////
  // State for dark mode, defaulting to the value stored in localStorage
   const [isDark, setIsDark] = useState(() => {
    // Retrieve theme from localStorage and convert to boolean
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'true';
  });

  // Apply the 'dark' class on initial render based on localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]); // Apply the class whenever `isDark` changes

  const handleDarkToggle = () => {
    // Toggle dark mode
    document.documentElement.classList.toggle('dark');
    // Save the new theme preference in localStorage
    localStorage.setItem('theme', !isDark);
    // Update the state
    setIsDark(!isDark);
  };



   //////////////////////////////////////////////////////// SELECT MOVIE SECTION //////////////////////////////////////////////
      // State for selected movie
    const [movieSelected ,setMovieSelected] = useState(()=>{
      return localStorage.getItem('movieSelected');
    });
    
     // Handle movie selection and store in localStorage
    const handleMovieSelected = (index)=>{
      setMovieSelected(index);
      localStorage.setItem('movieSelected',index);
    }
    
       


    //////////////////////////////////////////////////////// SLOT SELECTION SECTION //////////////////////////////////////////////
      // State for selected slot
    const [slotSelected ,setSlotSelected] = useState(()=>{
      return localStorage.getItem('slotSelected');
    });

     // Handle slot selection and store in localStorage
    const handleSlotSelected = (index)=>{
        setSlotSelected(index);
        localStorage.setItem('slotSelected',index);
    }
    
    //////////////////////////////////////////////////////// SEAT SELECTION SECTION //////////////////////////////////////////////
    // State for selected seats
    const [seatSelected, setSeatSelected] = useState(() => {
      const savedSeats = localStorage.getItem('seatSelected');
      if (savedSeats) {
        return JSON.parse(savedSeats);
      } else {
        return {
          A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0
        };
      }
    });
    
    // Handle seat selection changes and store in localStorage
    const handleSeatSelected = (e, text) => {
      const newValue = +e.target.value;
      setSeatSelected(prevState => {
        const updatedSeats = { ...prevState, [text]: newValue };
        localStorage.setItem('seatSelected', JSON.stringify(updatedSeats));
        return updatedSeats;
      });
    };


    //////////////////////////////////////////////////////// BOOK NOW ANIMATION SECTION //////////////////////////////////////////////
  // State for showing animation
    const [showAnimation, setShowAnimation] = useState(false);

    // Hide the animation after 2 seconds
    useEffect(() => {
      setTimeout(() => {
        setShowAnimation(false);
      }, 2000);
    }, [showAnimation]);


    //////////////////////////////////////////////////////// VALIDATION OF BOOKING SECTION //////////////////////////////////////////////
  // Validate booking details before submission
      const isValidate = ()=>{
        // is movie selected 
        if(!movieSelected && movieSelected !=0 ){
             toast.warn('Please Selected Movie');
             return false;
        }else if(!slotSelected && slotSelected !=0){
          toast.warn('Please Select Slot');
             return false;
        }else if(
          seatSelected['A1'] == 0 && seatSelected['A2'] == 0 && seatSelected['A3' ]== 0 && seatSelected['A4'] == 0 
          && seatSelected['D1'] == 0  && seatSelected['D2'] == 0 
         ){
          toast.warn('Please Select Seats');
          return false;
         }else{
           toast.success('Booking Successfully');
           return true;
         }
      }
      
      
      //////////////////////////////////////////////////////// SUBMIT BOOKING SECTION //////////////////////////////////////////////
       // Reset form to initial state
      const resetForm = ()=>{
         handleMovieSelected(null);
         handleSlotSelected(null);
         setSeatSelected({
          A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0
        })
        localStorage.setItem('seatSelected', JSON.stringify({
          A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0
        }));

      }

       //////////////////////////////////////////////////////// LAST BOOKING SECTION //////////////////////////////////////////////
     // State for storing last booking details
       const [lastBooking, setLastBooking] = useState(() => {
        const savedBooking = localStorage.getItem('lastBooking');
        return savedBooking ? JSON.parse(savedBooking) : null;
      });

      // Clear last booking details
      const handleClear = ()=>{
        setLastBooking(null);
        localStorage.setItem('lastBooking', null);

      }
      


      
      //////////////////////////////////////////////////////// SUBMIT BOOKING SECTION //////////////////////////////////////////////
        // Handle form submission
       const handleSubmit = async ()=>{
        try {
          if(isValidate()){
            setShowAnimation(true) 
            const payload = {
              movie : moviesList[movieSelected],
              slot : slots[slotSelected],
              seats : seatSelected
            }
            const audio = new Audio(audioPath);
            audio.play()
            
            resetForm();
            const res =  await  axios.post('/api/booking',payload);
            console.log(res);
            if(res.data.status == 200){
              setLastBooking(res.data.data);
            localStorage.setItem('lastBooking', JSON.stringify(res.data.data));
            console.log('it working')
            }else{
              console.log(res);
              toast.warn('there is problem in the server. \n please try again');
            }
            
           }
        } catch (error) {
          console.log(error);
        }

       }





    //////////////////////////////////////////////////////// CONTEXT PROVIDER VALUES SECTION //////////////////////////////////////////////
    const contextValues = {
      setMovieSelected,movieSelected,handleMovieSelected ,handleSlotSelected,
      slotSelected,handleDarkToggle,isDark,seatSelected,handleSeatSelected,
      setShowAnimation, showAnimation , handleSubmit,
      lastBooking,setLastBooking,handleClear
    }
    return (
      <MyContext.Provider value={contextValues}>
        {children}
      </MyContext.Provider>
    )
}

export default MyContext;

