import React from "react";
import Img from "./Image.jsx";
import Link from "next/link.js";
export default function LogoPart() {
  return (
    <>
      <div className="w-[80%] h-[200px] max-md:h-fit mx-auto my-4 flex items-center justify-between">
        <Img imgsrc={"/footer/3.png"} styles={"w-[250px] max-md:hidden"} />
        <div className="flex items-center gap-3">
          <div className="content">
            <p className="max-md:text-[12px]">
              اجعل حياتك أسهل وأسرع مع خياراتنا المصرفية على مدار الساعة
            </p>
            وطوال أيام الأسبوع ،{" "}
            <Link
              href={"#"}
              className="underline underline-gray-300 hover:text-sky-400 hover:underline-sky-400 duration-300"
            >
              حمل تطبيق مصرف الراجحي الأن
            </Link>
          </div>
          <Img
            imgsrc={"/footer/qr-logo-arb.png"}
            styles={"w-[180px] hidden md:block"}
          />
          <Img
            imgsrc={"/footer/app.png"}
            styles={"w-[80px] block md:hidden "}
          />
        </div>
      </div>
    </>
  );
}
