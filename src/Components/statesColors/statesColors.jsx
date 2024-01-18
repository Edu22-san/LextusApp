import React, { useState, useEffect, useRef } from "react";

const StatesColors = () => {
  return (
    <>
      <div className="w-[90%] mt-[1rem] flex flex-row justify-center md:justify-end lg:justify-end">
        <p className="flex flex-row items-center justify-center text-white text-[20px]">
          <span className="w-[20px] h-[20px] bg-bg-verde mr-[10px] rounded-[3px]"></span>
          Delivered
        </p>
        <p className="flex flex-row items-center justify-center text-white text-[20px] ml-[2rem] ">
          <span className="w-[20px] h-[20px] bg-bg-rojo mr-[10px] rounded-[3px]"></span>
          Pending
        </p>
      </div>
    </>
  );
};

export default StatesColors;
