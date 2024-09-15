import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import Lottie from "lottie-react";
import girlAnimation from "../assets/empty girl.json";
import popcornAnimation from "../assets/popcornAnimation.json";

const LastBooking = () => {
  const { lastBooking, isDark, handleClear } = useContext(MyContext);
  return (
    <div className="flex flex-col items-center">
      <div
        className={`bg-white box-shadow-dark-main rounded-lg mx-4 mt-5 font-semibold px-2 dark:bg-gray-700 sm:mx-10 pb-4 md:ml-1 md:min-w-[325px] md:max-h-96 dark:text-white`}
      >
        <div className="text-3xl pl-4 py-2">Last Booking Details:</div>
        {lastBooking ? (
          <div className="flex flex-col gap-2 ">
            <div className="text-blue-600 text-xl font-bold ml-4 dark:text-green-400">
              Seats :
            </div>
            <div className="flex flex-row justify-center flex-wrap gap-2 ">
              {Object.keys(lastBooking.seats).map((key) => (
                <div
                  key={key}
                  className={` bg-green-400 text-white font-bold  py-1 rounded-full  px-3 ${
                    isDark ? "box-shadow-dark background-light" : "box-shadow "
                  }`}
                >
                  {key}:{" "}
                  {typeof lastBooking[key] === "object"
                    ? JSON.stringify(lastBooking.seats[key])
                    : lastBooking.seats[key]}
                </div>
              ))}
            </div>
            <div className="text-blue-600 text-xl font-bold ml-4 dark:text-green-400">
              Slot :{" "}
              <span className="text-black font-semibold dark:text-white">
                {lastBooking["slot"]}
              </span>
            </div>
            <div className="text-blue-600 text-xl font-bold ml-4 dark:text-green-400">
              Movie :{" "}
              <span className="text-black font-semibold dark:text-white">
                {lastBooking["movie"]}
              </span>
            </div>
            <div className="h-40 w-32 mx-auto mt-4 md:mt-0 md:mb-2">
              <Lottie autoplay loop animationData={popcornAnimation} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-3">
            <div className="text-lg text-blue-600 dark:text-blue-400">
              No Previous Booking Found
            </div>
            <div className="h-60 w-56 ">
              {/* Using the lottie-react Player component */}
              <Lottie autoplay loop animationData={girlAnimation} />
            </div>
          </div>
        )}
      </div>
      {lastBooking && (
        <button
          className="mt-5 bg-yellow-400 mb-3 box-shadow-dark-main text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none  transition"
          onClick={handleClear}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default LastBooking;
