import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { IoMdAnalytics } from 'react-icons/io'
import { IoAnalyticsOutline} from 'react-icons/io5'
import {SlSpeech} from 'react-icons/sl'

export default function DashNavbar() {

  const [selected, setSelected] = useState("overview")

  return (
    <div className="sticky left-0 top-0 h-screen w-[250px] pt-8 pl-10 border-r-2 border-gray-100">
      <p className='text-2xl font-OP text-primary-blue font-bold flex-grow-0'>ReVal</p>
      <div className="mt-32">
        <div className="flex items-center bg-gray-200 pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer">
          <IoAnalyticsOutline />
          <a className="text-lg font-semibold font-OP pl-2">Analytics</a>
        </div>
        <div className="flex items-center  pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer">
          <SlSpeech />
          <a className="text-lg font-OP pl-2 ">Reviews</a>
        </div>
        <div className="flex items-center pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer">
          <IoAnalyticsOutline />
          <a className="text-lg font-OP pl-2 ">Dashboard</a>
        </div>
      </div>
      <div className="absolute left-0 bottom-8 pt-8 pl-10 w-[250px] border-t-2 border-gray-100">
        <p className="text-xl font-bold font-poppins">Product Name</p>
        <p className="text-lg font-medium font-poppins">Vendor Name</p>
      </div>
    </div>
  )

  //return (
  //   <div className="flex justify-between items-center px-16 pt-8">
  //     <Link href='/' className="text-2xl font-OP text-primary-blue font-bold w-1/3 flex-grow-0">ReVal</Link>
  //     <div className="flex justify-center items-center w-1/3 flex-grow">
  //       <a className="text-gray-700 text-xl font-medium px-6 cursor-pointer">Overview</a>
  //       <a className="text-gray-700 text-xl font-medium px-6 cursor-pointer">Search</a>
  //       <a className="text-gray-700 text-xl font-medium px-6 cursor-pointer">Something</a>
  //     </div>
  //     <div className="flex justify-between w-1/3">
  //       <div></div>
  //       <a href="https://github.com/Abhishek-More/reval" target="_blank" className="bg-primary-blue font-medium text-md text-white px-6 py-4 rounded-lg flex-grow-0">View on Github</a>
  //     </div>
  //   </div>
  // )
}
