import Image from "next/image";
import React from "react";
import logo from "../public/images/marketing2 (1).svg";

export default function Header() {
  return (
    <div className="bg-bg h-20  top-0 flex items-center">
      <div className="flex	 fixed	 items-center m-5 justify-between">
        <Image src={logo} alt="logo" />
        <div>
          <ul className="flex gap-8 items-center text-lg">
            <li className="cursor-pointer text-red-600">HOME</li>
            <li className="cursor-pointer flex items-center">
            <span> ABOUT ME</span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg> */}
            </li>
            <li className="cursor-pointer flex items-center">
            <span> PACKAGES</span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg> */}
            </li>
            <li className="cursor-pointer">HOW I WORK</li>
            <li className="cursor-pointer">CONTACT</li>
            <li>
              <button className="border rounded-md p-2">
                Buy now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
