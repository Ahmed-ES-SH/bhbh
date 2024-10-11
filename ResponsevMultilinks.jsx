"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
} from "../constants/websiteconstant";

const ResponsevMultiColumnList = () => {
  const [statelist_1, setstatelist_1] = useState(false);
  const [statelist_2, setstatelist_2] = useState(false);
  const [statelist_3, setstatelist_3] = useState(false);
  const [statelist_4, setstatelist_4] = useState(false);
  const [statelist_5, setstatelist_5] = useState(false);

  return (
    <div className="w-[90%] md:hidden m-auto grid grid-cols-1 gap-8">
      {/* القائمة الأولى */}
      <div className="col-span-full">
        <div
          onClick={() => setstatelist_1((prev) => !prev)}
          className="flex items-center justify-between w-full cursor-pointer pb-4 border-b border-gray-300"
        >
          <h3 className="font-bold text-[18px] text-[#828282] mb-3">
            {list_1[0]}
          </h3>
          <i
            className={`fa ${
              statelist_1 ? "fa-minus" : "fa-plus"
            } text-[18px] text-white duration-200`}
          ></i>
        </div>
        <ul
          style={{
            maxHeight: statelist_1 ? "500px" : "0",
            transition: "max-height 1s ease",
          }}
          className="space-y-2 overflow-hidden duration-300"
        >
          {list_1.slice(1).map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <i className="fa-solid fa-greater-than text-[6px] text-white"></i>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:underline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* القائمة الثانية */}
      <div className="col-span-full">
        <div
          onClick={() => setstatelist_2((prev) => !prev)}
          className="flex items-center justify-between w-full cursor-pointer pb-4 border-b border-gray-300"
        >
          <h3 className="font-bold text-[18px] text-[#828282] mb-3">
            {list_2[0]}
          </h3>
          <i
            className={`fa ${
              statelist_2 ? "fa-minus" : "fa-plus"
            } text-[18px] text-white`}
          ></i>
        </div>
        <ul
          style={{
            maxHeight: statelist_2 ? "500px" : "0",
            transition: "max-height 1s ease",
          }}
          className="space-y-2 overflow-hidden duration-300"
        >
          {list_2.slice(1).map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <i className="fa-solid fa-greater-than text-[6px] text-white"></i>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:underline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* القائمة الثالثة */}
      <div className="col-span-full">
        <div
          onClick={() => setstatelist_3((prev) => !prev)}
          className="flex items-center justify-between w-full cursor-pointer pb-4 border-b border-gray-300"
        >
          <h3 className="font-bold text-[18px] text-[#828282] mb-3">
            {list_3[0]}
          </h3>
          <i
            className={`fa ${
              statelist_3 ? "fa-minus" : "fa-plus"
            } text-[18px] text-white`}
          ></i>
        </div>
        <ul
          style={{
            maxHeight: statelist_3 ? "500px" : "0",
            transition: "max-height 1s ease",
          }}
          className="space-y-2 overflow-hidden duration-300"
        >
          {list_3.slice(1).map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <i className="fa-solid fa-greater-than text-[6px] text-white"></i>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:underline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* القائمة الرابعة */}
      <div className="col-span-full">
        <div
          onClick={() => setstatelist_4((prev) => !prev)}
          className="flex items-center justify-between w-full cursor-pointer pb-4 border-b border-gray-300"
        >
          <h3 className="font-bold text-[18px] text-[#828282] mb-3">
            {list_4[0]}
          </h3>
          <i
            className={`fa ${
              statelist_4 ? "fa-minus" : "fa-plus"
            } text-[18px] text-white`}
          ></i>
        </div>
        <ul
          style={{
            maxHeight: statelist_4 ? "500px" : "0",
            transition: "max-height 1s ease",
          }}
          className="space-y-2 overflow-hidden duration-300"
        >
          {list_4.slice(1).map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <i className="fa-solid fa-greater-than text-[6px] text-white"></i>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:underline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* القائمة الخامسة */}
      <div className="col-span-full">
        <div
          onClick={() => setstatelist_5((prev) => !prev)}
          className="flex items-center justify-between w-full cursor-pointer pb-4 border-b border-gray-300"
        >
          <h3 className="font-bold text-[18px] text-[#828282] mb-3">
            {list_5[0]}
          </h3>
          <i
            className={`fa ${
              statelist_5 ? "fa-minus" : "fa-plus"
            } text-[18px] text-white`}
          ></i>
        </div>
        <ul
          style={{
            maxHeight: statelist_5 ? "500px" : "0",
            transition: "max-height 1s ease",
          }}
          className="space-y-2 overflow-hidden duration-300"
        >
          {list_5.slice(1).map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <i className="fa-solid fa-greater-than text-[6px] text-white"></i>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:underline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsevMultiColumnList;
