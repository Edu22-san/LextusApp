import React, { useState, useEffect, useRef } from "react";

const StatesColors = () => {
  return (
    <>
      <div className="w-[90%] flex flex-row justify-center md:justify-end lg:justify-end ">
        <p className="flex flex-row items-center justify-center text-black text-[14px] md:text-[15px] lg:text-[15px]">
          <span className="w-[15px] h-[15px] bg-green-rv mr-[10px] rounded-[20px]"></span>
          Completed
        </p>
        <p className="flex flex-row items-center justify-center text-black text-[14px] md:text-[15px] lg:text-[15px] ml-[2rem] ">
          <span className="w-[15px] h-[15px] bg-red-rv mr-[10px] rounded-[20px]"></span>
          Pending
        </p>
      </div>
    </>
  );
};

export default StatesColors;
