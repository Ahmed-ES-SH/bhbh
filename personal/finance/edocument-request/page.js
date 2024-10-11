"use client";
import React, { useState } from "react";
import Img from "../../../_components/Image";
import axios from "axios";

export default function EdocumentRequest() {
  const [idNumber, setIdNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [message, setMessage] = useState("");
  const [fileLink, setFileLink] = useState(""); // حالة لتخزين رابط الملف

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      // إرسال طلب التحقق
      const response = await axios.post(
        "http://127.0.0.1:8000/api/file-by-id-serial",
        {
          id_number: idNumber,
          serial_number: serialNumber,
        }
      );

      // تحقق من استجابة الخادم
      if (response.data) {
        setFileLink(response.data.file_path); // حفظ رابط الملف في الحالة
        setMessage("تم التحقق بنجاح!"); // تحديث الرسالة
      } else {
        setMessage("فشل التحقق! يرجى التحقق من المعلومات المدخلة.");
      }
    } catch (error) {
      console.error("خطأ في طلب التحقق:", error);
      setMessage("حدث خطأ أثناء التحقق!"); // تحديث الرسالة في حالة وجود خطأ
    }
  };

  const handleDownload = () => {
    // فتح رابط الملف في نافذة جديدة
    if (fileLink) {
      window.open(fileLink, "_blank");
    }
  };

  return (
    <>
      <div className="w-[82%] mx-auto max-md:hidden pt-40 flex items-center justify-between">
        <Img imgsrc={"/paper.png"} styles={"w-[530px]"} />
        <h1 className="text-4xl font-semibold text-purple">
          نموذج التحقق من مستندات
        </h1>
      </div>
      <div
        style={{ direction: "rtl" }}
        className="w-full flex items-center justify-center max-md:pt-20 py-4 bg-[#f7f8f9] h-[60vh] max-md:h-fit"
      >
        <form onSubmit={handleVerification} className="w-full">
          <h1 className="text-[20px] font-semibold text-purple w-[80%] m-auto pb-3 border-b">
            قم بتعبئة البيانات التالية
          </h1>
          <div className="flex items-center justify-between max-md:flex-col py-3 gap-8 w-[80%] mx-auto pb-5 border-b">
            <div className="w-1/2 max-md:w-full flex flex-col items-start gap-3">
              <label className="text-[18px]">
                رقم الهوية الوطنية أو الإقامة أو رقم المنشأة
              </label>
              <input
                placeholder="برجاء إدخال رقم الهوية الوطنية أو الإقامة أو رقم المنشأة"
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full border border-gray-300 focus:border-purple duration-200 rounded-full outline-none h-[3.625em] bg-white px-2 placeholder-shown:px-2"
              />
            </div>
            <div className="w-1/2 max-md:w-full flex flex-col items-start gap-3">
              <label className="text-[18px]">الرقم التسلسلي</label>
              <input
                placeholder="برجاء إدخال الرقم التسلسلي"
                type="text"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                className="w-full border border-gray-300 focus:border-purple duration-200 rounded-full outline-none h-[3.625em] bg-white px-2 placeholder-shown:px-2"
              />
            </div>
          </div>
          <div className="w-fit mx-auto">
            <input
              type="submit"
              value={" التحقق من صحة الوثائق"}
              className="mt-4 text-white duration-300 bg-sky-500 cursor-pointer py-[15px] px-4 text-[13px] rounded-full hover:bg-sky-300 hover:text-black"
            />
          </div>
          {message && (
            <p className="mt-4 text-red-500 text-center">{message}</p>
          )}
          {fileLink && (
            <button
              type="button" // تحديد نوع الزر ليكون زر عادي وليس submit
              onClick={handleDownload}
              className="mt-4 text-white duration-300 bg-green-500 cursor-pointer py-[10px] px-4 text-[13px] rounded-full hover:bg-green-300 hover:text-black"
            >
              تحميل الملف
            </button>
          )}
        </form>
      </div>
    </>
  );
}
