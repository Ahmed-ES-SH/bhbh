"use client";
import React from "react";
import Img from "../_components/Image";
import Link from "next/link";

export default function Files() {
  return (
    <div className="w-full h-screen pt-8 flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
        {/* المربع الأول */}
        <Link href="/allfiles">
          <div className="w-[250px] h-[300px] bg-sky-400  shadow-lg rounded-lg flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300">
            <Img
              imgsrc={"/documents.png"}
              styles={"w-[150px] h-[150px] object-cover"}
            />
            <h2 className="mt-4 text-lg font-semibold text-center">
              كل الملفات
            </h2>
          </div>
        </Link>

        {/* المربع الثاني */}
        <Link href="/addfile">
          <div className="w-[250px] h-[300px] bg-green-400  shadow-lg rounded-lg flex flex-col items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300">
            <Img
              imgsrc={"/file.png"}
              styles={"w-[150px] h-[150px] object-cover"}
            />
            <h2 className="mt-4 text-lg font-semibold text-center">
              رفع ملف جديد
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
