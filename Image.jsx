import Image from "next/image";
import React from "react";

export default function Img({ styles, imgsrc }) {
  return (
    <>
      <Image
        src={imgsrc}
        alt="Image"
        width={1280}
        height={1024}
        className={`${styles}`}
      />
    </>
  );
}
