import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-16 pt-8 z-50">
      <div className="ml-2"> 
      <Image 
        src="/logo.png"
        alt="Picture of the author"
        width={75}
        height={50}
      />
      </div>
      {/* <Link href='/' className="text-2xl font-OP text-transparent bg-clip-text bg-gradient-to-r from-[#FF65DD] to-[#CC24F2] font-bold">ReVal</Link> */}
      <a href="https://github.com/Abhishek-More/reval" target="_blank" rel="noreferrer" className="z-50 bg-indigo-600 font-medium text-md text-white px-6 py-4 rounded-lg">View on Github</a>
    </div>
  )
}
