import React from "react";
import logo from "/logo.png";
import { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import MyContext from "../context/MyContext";

const Header = () => {
 // Destructure context values and functions from MyContext
  const {handleDarkToggle}= useContext(MyContext)
    

 
  return (
    <div className={`box-shadow-dark-main w-full h-12 bg-white flex flex-row justify-between px-3 sm:px-9  dark:bg-gray-800 sm:h-14`}>
      <div className=" h-[100%]">
        <img src={logo} alt=""  className="h-[100%]  w-18"/>
      </div>
      <div className='flex items-center ' >
            {/* Created a button to toggle between light mode and dark mode */}
            <MdLightMode  className="text-yellow-400 text-3xl mr-2" />    
            <label className="relative inline-flex items-center cursor-pointer">
                <input onClick={handleDarkToggle} type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
            </label>
        </div>
    </div>
  );
};

export default Header;
