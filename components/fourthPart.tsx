import Image from "next/image";
import React from "react";
import marketing2home from '../public/images/marketing2-home-pic1.webp.webp'
export default function ForthPart() {
  return (
    <div className="flex m-5">
      <div className="grid p-9">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red-500 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <p className="text-button1 font-bold">BEMARKETING</p>
        </div>
        <p className="text-4xl py-7">
              We will<br />
              increase <br/>
              your sales <br/>
               <span className="text-button1">your sales </span>
            
            </p>
            <p className="text-gray-400 py-7">
              Nullam consequat volutpat donec urna lorem pellentesque. Pharetra
              velit pellentesque convallis augue. Nulla imperdiet aliquam
              accumsan auctor integer parturient.
            </p>
      </div>
      <div>
        <Image src={marketing2home} alt="pic" />
      </div>
    </div>
  );
}
