import Link from "next/link";
import React from "react";
import Img from "./Image";
import FirstHalf from "./_Navbar/FirstHalf";
export default function Navbar() {
  return (
    <div className="fixed w-full  z-[9999999999]">
      <FirstHalf />
      <div className="w-full max-md:hidden secend-half flex items-center bg-purple h-[48px] overflow-hidden">
        <div className="flex items-center justify-between w-[80%] m-auto">
          <div className="left h-full">
            <div className="two-links flex items-center gap-5 h-full text-white">
              <Link href={"/Personal"} className="py-3 px-7 bg-blue  ">
                تسجيل الدخول{" "}
              </Link>
              <Link href={"https://www.alrajhibank.com.sa/en"}>English</Link>
              <Img imgsrc={"/search.svg"} styles={"w-[25px]"} />
            </div>
          </div>
          <div className="right flex items-center gap-8">
            <div className="two-links mr-4 flex items-center text-white gap-6">
              <Link href={"https://www.alrajhibank.com.sa/Business"}>
                الأعمال
              </Link>
              <Link href={"https://www.alrajhibank.com.sa/Personal"}>
                الأفراد
              </Link>
            </div>
            <Link
              href={"https://www.alrajhibank.com.sa/"}
              className="logo cursor-pointer"
            >
              <Img imgsrc="/logo-arb.png" styles="w-[30px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-1 px-1 max-md:flex  secend-half hidden items-center justify-between bg-purple h-fit overflow-hidden">
        <div className="flex items-center gap-12">
          <Link
            href={"/Personal"}
            className="py-3 text-white px-4 bg-blue rounded-full  "
          >
            تسجيل الدخول{" "}
          </Link>
          <div className="logo cursor-pointer">
            <Img imgsrc="/logo-arb.png" styles="w-[30px]" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="28"
          height="28"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            className="hover:text-purple"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
