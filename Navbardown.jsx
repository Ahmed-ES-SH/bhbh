import React from "react";
import { personaledownlinks } from "../constants/websiteconstant";
import Img from "./Image";
import Link from "next/link";
export default function Navbardown() {
  return (
    <>
      <div className="w-full relative bg-transparent z-[9999999999]">
        <div className="w-[55%] max-md:w-[75%]  bg-blue left-1/2 -translate-x-1/2 h-[68px] overflow-hidden rounded-full m-auto fixed bottom-8">
          <ul className=" grid grid-cols-4 justify-items-center items-center align-end w-full h-full">
            {personaledownlinks.map((link, index) => (
              <Link
                href={`${link.link}`}
                className={`flex flex-col  justify-center items-center w-full h-full group ${
                  index == 1 ? "bg-sky-300" : ""
                }`}
                key={index}
              >
                <Img
                  imgsrc={link.imgsrc}
                  styles={`w-[34px] brightness-100 group-hover:brightness-0 ${
                    index == 1 ? "brightness-0" : ""
                  }  `}
                />
                <p
                  className={` text-white  group-hover:text-black ${
                    index == 1 ? "brightness-0" : ""
                  }`}
                >
                  {link.title}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
