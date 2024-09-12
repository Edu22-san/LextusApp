import React, { useState, useEffect, useRef } from "react";

const StatesColors = () => {
  return (
    <>
      <div className="w-[90%] flex flex-row justify-center md:justify-end lg:justify-end ">
        <p className="flex flex-row items-center justify-center text-black text-[15px]">
          <span className="w-[26px] h-[8px] bg-green-rv mr-[10px] rounded-[3px]"></span>
          Completed
        </p>
        <p className="flex flex-row items-center justify-center text-black text-[15px] ml-[2rem] ">
          <span className="w-[26px] h-[8px] bg-red-rv mr-[10px] rounded-[3px]"></span>
          Pending
        </p>
      </div>
    </>
  );
};

export default StatesColors;
