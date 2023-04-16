import React from 'react'
import banner from '../public/images/Capture.PNG'
import Image from 'next/image'
export default function Banner() {
  return (
    <div>
        <Image src={banner} alt="banner"/>
      
    </div>
  )
}
