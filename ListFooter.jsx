import react from "react";
import { list_6, compaylogos } from "../constants/websiteconstant";
import Img from "./Image";
export default function ListFooter() {
  return (
    <>
      <div className=" w-[70%] max-md:w-[90%] my-4  mx-auto items-center justify-center  text-[12px] max-md:text-[13px] flex flex-wrap">
        {list_6.map((item, index) => (
          <span key={index} className="mx-1 text-[#DCDCDC]">
            {item}
            {index < list_6.length - 1 && <span className="mx-1">|</span>}
          </span>
        ))}
      </div>
      <div className="w-[80%] my-4 mx-auto flex flex-wrap justify-center items-center gap-4">
        {compaylogos.map((imgsrc, index) => (
          <div key={index}>
            <Img imgsrc={imgsrc} styles={"w-[150px] max-md:w-[80px]"} />
          </div>
        ))}
      </div>
      <p className=" w-[80%] mx-auto  my-6 text-[13px] text-[#808080]">
        شركة الراجحي المصرفية للاستثمار، نوع الكيان: مصرف / مؤسسة مالية، شركة
        سعودية مساهمة برأس مال: 40,000,000,000.00، رقم السجل التجاري:
        1010000096، صندوق بريد: 28 الرياض 11411 المملكة العربية السعودية، هاتف:
        0096611211600، العنوان الوطني: شركة الراجحي المصرفية للاستثمار، 8467
        طريق الملك فهد-حي المروج، وحدة رقم (1)، الرياض، 122630 – 2743 ، الموقع
        الإلكتروني: www.alrajhibank.com.sa ، مرخص لها برقم الترخيص: 1420 ،
        وخاضعة لرقابة وإشراف البنك المركزي السعودي
      </p>

      <p className=" w-fit mx-auto  my-6 text-[12px] text-[#808080]">
        جميع الحقوق محفوظة لمصرف الراجحي © 2024
      </p>
    </>
  );
}
