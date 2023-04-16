import Image from "next/image";
import React from "react";
import marketing2work from "../public/images/marketing2-work-pic1.webp";
export default function ThirdPart() {
  return (
    <div className="grid">
      <div className="flex justify-center p-10 mt-9">
        <div className="flex-1  justify-center">
          <Image
            src={marketing2work}
            alt="marketing2work"
            width={450}
            height={450}
          />
        </div>
        <div className="flex-1  justify-center">
          <div className="grid">
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
              We focus on <br />
              <span className="text-button1">efficiency</span>
            </p>
            <p className="text-gray-400 py-7">
              Nullam consequat volutpat donec urna lorem pellentesque. Pharetra
              velit pellentesque convallis augue. Nulla imperdiet aliquam
              accumsan auctor integer parturient.
            </p>
            <div className="flex gap-9">
              <div className="grid">
                <p className="py-3">Increase</p>
                <button className="bg-button2 rounded-md text-3xl ">60%</button>
                <p className="text-xl py-3">Page views</p>
              </div>
              <div className="grid">
                <p className="py-3">Increase</p>
                <button className="bg-button3 rounded-md text-3xl">78%</button>
                <p className="text-xl py-3">Website views</p>
              </div>
            </div>
            <button className="flex border border-button1 p-3 rounded-md w-1/2  items-center text-button1 font-bold hover:bg-button1 hover:text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              show me how
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around p-5">
        <div>
          <span className="text-4xl font-bold	 text-button1">347</span>
          <p>Ratings</p>
        </div>
        <div>
          <span className="text-4xl font-bold	 text-button1">213</span>
          <p>Sales of projects</p>
        </div>
        <div>
          <span className="text-4xl font-bold	 text-button1">70k+</span>
          <p>Happy customers</p>
        </div>
        <div>
          <span className="text-4xl font-bold	 text-button1">$22M</span>
          <p>Total investments</p>
        </div>
      </div>
      <div className="flex p-9 m-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-9 h-9 m-2 border border-yellow-500 rounded-full bg-yellow-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-9 h-9 m-2 border border-yellow-500 rounded-full bg-yellow-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-9 h-9 m-2 border border-yellow-500 rounded-full bg-yellow-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </div>
    </div>
  );
}
