import React, { useState } from "react";

const SearchForm = () => {
  const [num, setNum] = useState(0);

  // Function to handle the increase
  const increaseNum = () => {
    setNum(prevNum => prevNum + 1);
  };

  // Function to handle the decrease
  const decreaseNum = () => {
    setNum(prevNum => (prevNum > 0 ? prevNum - 1 : 0));
  };

  return (
    <div className="w-full border mt-7 bg-[#FFFFFF33] min-h-[135px] flex justify-center items-center p-3">
      <form className="bg-white rounded-[10px] text-black flex flex-col lg:flex-row gap-2.5 lg:gap-0 items-center justify-center lg:justify-between w-full max-w-[1200px] min-h-[86px] p-3 lg:p-0">
        {/* Location Input */}
        <div className="border-r-2 border-r-gray-300 w-full lg:w-[300px] pl-0 lg:pl-3 mb-4 lg:mb-0">
          <label
            htmlFor="location"
            className="block text-[#30343B] font-semibold text-center lg:text-start"
          >
            LOCATION
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g Gbagada"
            className="block outline-0 w-50 lg:ml-0 ml-[110px]"
          />
        </div>

        {/* Property Type Input */}
        <div className="border-r-2 border-r-gray-300 w-full lg:w-[300px] mb-4 lg:mb-0">
          <label
            htmlFor="type"
            className="block text-center lg:text-start text-[#30343B] font-semibold"
          >
            PROPERTY TYPE
          </label>
          <input
            type="text"
            id="type"
            placeholder="e.g Duplex, Bedroom Flat"
            className="block outline-0 w-50 lg:ml-0 ml-[80px]"
          />
        </div>

        {/* Bedroom Counter */}
        <div className="w-full lg:w-[200px] flex items-center flex-col justify-center mb-4 lg:mb-0">
          <label className="block text-[#30343B] font-semibold">BEDROOM</label>
          <div className="flex items-center gap-5 mx-0 lg:mx-auto">
            <button
              type="button"
              onClick={decreaseNum}
              className="w-[21px] h-[21px] rounded-full border flex items-center justify-center"
            >
              -
            </button>
            <p>{num}</p>
            <button
              type="button"
              onClick={increaseNum}
              className="w-[21px] h-[21px] rounded-full border flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button className="bg-[#3D9970] text-white rounded-r-[10px] block h-[86px] w-full lg:w-[297px]">
          <a href="#property-section">Find Property</a>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
