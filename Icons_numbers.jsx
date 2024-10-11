import React from "react";
import { thirdpart_half, socialicons } from "../constants/websiteconstant";
export default function Icons_numbers() {
  return (
    <>
      <div className="m-auto h-[20vh] max-md:h-fit w-[80%] max-md:flex-col max-md:gap-y-3 flex items-center justify-between">
        <div className="w-1/2 flex max-md:flex-col max-md:gap-y-6 md:gap-x-4  justify-between">
          {thirdpart_half.map((item, index) => (
            <div
              key={index}
              className="flex items-start max-md:items-center flex-col"
            >
              <h1 className="text-[18px] font-semibold text-[#DCDCDC]">
                {item.text}
              </h1>
              <p className="text-[20px] text-[#DCDCDC] ">{item.number}</p>
            </div>
          ))}
        </div>
        <div className="w-[35%] max-md:w-[90%] text-[20px] flex items-center justify-between">
          {socialicons.map((item, index) => (
            <div key={index}>{item.icon}</div>
          ))}
        </div>
      </div>
    </>
  );
}
