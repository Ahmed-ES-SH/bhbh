"use client";
import React, { useRef, useState } from "react";
import Img from "../_components/Image";
import axios from "axios"; // استيراد مكتبة axios
import Loading from "../_components/Loading";
export default function Addfile() {
  const openinput = useRef(null);
  const [serial_number, setserial_number] = useState("");
  const [id_number, setid_number] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // إضافة حالة للملف
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [done, setdone] = useState("");

  // دالة للتحقق من المدخلات والسماح فقط بالأرقام
  const handleInputChange = (e, setState) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, ""); // استبدال أي شيء غير الأرقام
    setState(numericValue);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile || !id_number || !serial_number) {
      setmessage("يرجى ملء جميع الحقول وإختيار ملف.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // إضافة الملف إلى formData
    formData.append("id_number", id_number);
    formData.append("serial_number", serial_number);

    try {
      setloading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload", // تعديل الرابط إلى رابط API
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // ضروري لتحديد نوع البيانات المرسلة
          },
        }
      );
      setdone("تم رفع الملف بنجاح!");
      setloading(false);
    } catch (error) {
      setloading(false);
      console.error(error);
      setmessage("حدث خطأ أثناء رفع الملف. حاول مرة أخرى.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setmessage("");
    }
  };

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="w-full relative h-screen flex items-center justify-center"
      >
        {loading ? (
          <Loading />
        ) : (
          <div className="w-[70%] border border-gray-300 px-4 py-2 shadow-md">
            <div className="logo w-full">
              <Img
                imgsrc={"/arb-media-center.png"}
                styles={"w-[200px] mx-auto"}
              />
            </div>
            <div className="flex items-center justify-between max-md:flex-col w-full">
              <div
                onClick={() => openinput.current.click()}
                className={`chossefile w-[280px] max-md:w-[90%] py-4 max-md:h-fit h-[220px] border-4 border-dashed border-sky-400 flex items-center justify-center bg-gray-300 cursor-pointer hover:bg-gray-200 duration-300 ${
                  selectedFile ? "bg-green-500 shadow-lg" : ""
                }`} // إضافة تغيير اللون وتظليل عند اختيار ملف
              >
                <div className="w-full">
                  <h1 className="w-fit mx-auto text-[16px] font-semibold my-2">
                    إختر الملف
                  </h1>
                  <Img imgsrc={"/file.png"} styles={"w-[150px] mx-auto"} />
                </div>
              </div>
              <form onSubmit={handlesubmit} className="w-full">
                <input
                  type="file"
                  name="file"
                  hidden
                  ref={openinput}
                  onChange={handleFileChange} // دالة لتحديث حالة الملف عند تغييره
                />
                <div className="flex w-[90%] mx-auto my-2 flex-col items-start gap-4">
                  <label>رقم الهوية :</label>
                  <input
                    type="text"
                    value={id_number}
                    name="id_number"
                    className="w-full p-2 rounded-md shadow-md outline-none border border-transparent"
                    onChange={(e) => handleInputChange(e, setid_number)} // استخدام دالة onChange للتحقق
                  />
                </div>
                <div className="flex w-[90%] mx-auto my-2 flex-col items-start gap-2">
                  <label>الرقم التسلسلي :</label>
                  <input
                    type="text"
                    value={serial_number}
                    name="serial_number"
                    className="w-full p-2 rounded-md shadow-md outline-none border border-transparent focus:border-purple"
                    onChange={(e) => handleInputChange(e, setserial_number)} // استخدام دالة onChange للتحقق
                  />
                </div>
                <div className="w-[90%] m-auto">
                  <input
                    type="submit"
                    value="رفع الملف"
                    className="mt-3 w-fit cursor-pointer px-4 py-2 text-white bg-purple text-center border border-transparent hover:bg-transparent hover:border-purple hover:text-black rounded-md duration-300"
                  />
                </div>
                {message && (
                  <p className="w-fit mx-auto text-red-400 text-[17px]">
                    {message}
                  </p>
                )}
                {done && (
                  <p className="w-fit mx-auto text-green-400 text-[17px]">
                    {done}
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
