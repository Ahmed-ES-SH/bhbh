"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function FirstHalf() {
  const [lastScrollY, setLastScrollY] = useState(0); // لمتابعة موضع التمرير السابق
  const [isVisible, setIsVisible] = useState(true); // للتحكم في إظهار أو إخفاء العنصر

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // تحقق مما إذا كان المستخدم يتحرك لأعلى أو لأسفل
      if (currentScrollY > lastScrollY) {
        // التمرير لأسفل
        setIsVisible(false);
      } else {
        // التمرير لأعلى
        setIsVisible(true);
      }

      // تحديث موضع التمرير السابق
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <div
        className={`w-full max-md:hidden h-[40px] flex items-center bg-white transition-all duration-500 ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <Link
          href={
            "https://www.alrajhibank.com.sa/Business/Financing-and-savings-products-for-enterprises"
          }
          className="w-1/4 ml-auto text-blue font-semibold text-[14px]"
        >
          أسعار المنتجات التمويلية والادخارية
        </Link>
      </div>
    </>
  );
}
