import Navbar from "../components/Navbar"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="absolute right-32 z-50 mt-40 shadow-lg rounded-md"> 
      <Image 
        src="/chart.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      </div>
      <div className="absolute right-0 top-0 z-10 w-1/3 h-screen bg-gradient-to-br from-[#53E0FF] to-[#8CA4F8]"></div>
      <div className="ml-32 mt-32">
        <div className="text-7xl text-[#4361EE] font-semibold">
        <p>Customer Analytics </p>
        </div>

        <div className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF65DD] to-[#4361EE]">
        <p>Beautified.</p>
        </div>

        <div className="text-3xl mt-6 text-slate-900">
          <p>Discover a powerful sentiment </p>
          <p>analysis tool for your reviews in one click</p>
        </div>
       

        <div className="flex w-2/5 items-center pt-8 mt-8">
        <Link href="/upload" className="bg-[#4361EE] font-medium text-md text-white px-16 py-4 rounded-lg">Upload Reviews</Link>
        <Link href="/dashboard/none" className="bg-white border-2 ml-8 border-[#4361EE] font-medium placeholder:text-md text-[#4361EE] px-16 py-4 rounded-lg">Review Data</Link>
        </div>
      </div>
      
   </>
  )
}
