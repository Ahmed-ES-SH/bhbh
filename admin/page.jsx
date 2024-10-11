"use client";
import React, { useState } from "react";
import Img from "../_components/Image";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [email, setEmail] = useState("alrajhiadmin@com");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  const router = useRouter(); // استخدم useRouter لتوجيه المستخدم

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      setmessage("");
      // تحقق من البريد الإلكتروني وكلمة المرور
      if (email === "alrajhiadmin@com" && password === "admin123123") {
        router.push("/files"); // التوجيه إلى /files
      } else {
        setmessage("ليس لديك صلاحيات الوصول الى هذة الصفحة تأكد من كلمة السر");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div
          style={{ direction: "rtl" }}
          className="w-[70%] pt-8 m-auto max-md:w-[97%] flex flex-col items-start gap-6 py-4 px-2 rounded-md shadow-xl border border-gray-300"
        >
          <div className="logo w-full">
            <Img
              imgsrc={"/arb-media-center.png"}
              styles={"w-[200px] mx-auto"}
            />
          </div>
          <form onSubmit={handlesubmit} className="w-full">
            <div className="flex w-[90%] mx-auto my-2 flex-col items-start gap-4">
              <label>البريد الالكتروني : </label>
              <input
                type="email"
                name="email"
                value={"alrajhiadmin@com"}
                readOnly
                className="w-full bg-gray-300 p-2  rounded-md shadow-md outline-none border border-transparent "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex w-[90%] mx-auto my-2 flex-col items-start gap-2">
              <label>كلمة السر : </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 rounded-md shadow-md outline-none border border-transparent focus:border-purple"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-[90%] m-auto ">
              <input
                type="submit"
                value="تحقق"
                className=" mt-3 w-fit cursor-pointer px-4 py-2 text-white bg-purple text-center border border-transparent hover:bg-transparent hover:border-purple hover:text-black rounded-md duration-300"
              />
            </div>
            {message && (
              <p className="w-fit mx-auto text-red-400 text-[17px]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
