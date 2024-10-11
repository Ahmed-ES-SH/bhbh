import Link from "next/link";
import React from "react";
import {
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
} from "../constants/websiteconstant";

const MultiColumnList = () => {
  return (
    <div className="w-[80%] hidden m-auto md:grid grid-cols-5 max-md:grid-cols-1 gap-8">
      <div className="col-span-1 max-md:col-span-full">
        <h3 className="font-bold text-white mb-4">{list_1[0]}</h3>
        <ul className="space-y-2">
          {list_1.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:undelline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1 max-md:col-span-full">
        <h3 className="font-bold text-white mb-4">{list_2[0]}</h3>
        <ul className="space-y-2">
          {list_2.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:undelline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1 max-md:col-span-full">
        <h3 className="font-bold text-white mb-4">{list_3[0]}</h3>
        <ul className="space-y-2">
          {list_3.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:undelline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1 max-md:col-span-full">
        <h3 className="font-bold text-white mb-4">{list_4[0]}</h3>
        <ul className="space-y-2">
          {list_4.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:undelline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1 max-md:col-span-full">
        <h3 className="font-bold text-white mb-4">{list_5[0]}</h3>
        <ul className="space-y-2">
          {list_5.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="text-gray-300 hover:underline hover:undelline-gray-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiColumnList;
