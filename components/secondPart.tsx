import Image from "next/image";
import React from "react";

export default function SecondPart() {
  return (
    <div className="p-9 mt-9 grid">
      <div className="flex gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-button1 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>

        <p className="text-button1 font-bold">BEMARKETING</p>
      </div>
      <div className="mt-3">
        <p className="text-4xl">
          I will help you increase <br />
          your reach by
        </p>
      </div>

      <div className="flex justify-center justify-between mt-9">
        <div className="grid justify-items-start">
          <button className="bg-button1 rounded-md w-16 my-3">01</button>
          <div>
            <Image
              src="https://themes.muffingroup.com/be/marketing2/wp-content/uploads/2022/06/marketing2-home-icon1.svg"
              alt="Picture of the author"
              width={75}
              height={75}
            />
            <p className="text-xl py-5">Marketing Audit</p>
            <p className="py-3">Quis est metus at sodales imperdiet.</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-2xl"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>

        <div className="grid justify-items-start">
          <button className="bg-button2 rounded-md w-16 my-3">02</button>
          <div>
          <Image
              src="https://themes.muffingroup.com/be/marketing2/wp-content/uploads/2022/06/marketing2-home-icon2.svg"
              alt="Picture of the author"
              width={75}
              height={75}
            />

            <p className="text-xl py-5">Marketing Audit</p>
            <p className="py-3">Quis est metus at sodales imperdiet.</p>
          </div>
          <svg
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <div className="grid justify-items-start">
          <button className="bg-button3 rounded-md w-16 my-3">03</button>
          <div>
          <Image
              src="https://themes.muffingroup.com/be/marketing2/wp-content/uploads/2022/06/marketing2-home-icon3.svg"
              alt="Picture of the author"
              width={75}
              height={75}
            />

            <p className="text-xl py-5">Marketing Audit</p>
            <p className="py-3">Quis est metus at sodales imperdiet.</p>
          </div>
          <svg
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <div className="grid justify-items-start">
          <button className="bg-button4 rounded-md w-16 my-3">04</button>
          <div>
          <Image
              src="https://themes.muffingroup.com/be/marketing2/wp-content/uploads/2022/06/marketing2-home-icon4.svg"
              alt="Picture of the author"
              width={75}
              height={75}
            />

            <p className="text-xl py-5">Marketing Audit</p>
            <p className="py-3">Quis est metus at sodales imperdiet.</p>
          </div>
          <svg
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
