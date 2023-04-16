import Image from 'next/image'
import React from 'react'
import mappic from '../public/images/marketing2-home-pic2.webp'
export default function SixthPart() {
  return (
    <div className='grid bg-mapbg  justify-items-center'>
        <div className="flex gap-2 justify-center mt-9">
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
        <p className="text-4xl py-7 text-white font-bold">
        We will increasee <br/>
        your sales threefold
        </p>
        <Image className='h-auto max-w-full	' src={mappic} alt='map' />
    </div>
  )
}
