import Navbar from "../components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="absolute right-0 top-0 -z-50 w-1/3 h-screen bg-gradient-to-br from-[#C4EFC5] to-[#E2EDA7]"></div>
      <div className="ml-32 mt-32">
        <div className="text-7xl text-lime-600 font-semibold">
        <p>Customer Analytics </p>
        <p>Beautified.</p>
        </div>

        <div className="text-3xl mt-6 text-lime-900">
          <p>Discover a powerful sentiment </p>
          <p>analysis tool for your reviews in one click</p>
        </div>

        
        {/* <p className="ml-16 bg-primary-green font-medium text-md text-white l-[100px] w-[150px] rounded-lg">Upload CSV</p> */}
        <div className="flex w-2/5 items-center pt-8 mt-10">
        <Link href="/upload" className="bg-primary-green font-medium text-md text-white px-16 py-4 rounded-lg cursor-pointer">Upload CSV</Link>
        <Link href="/dashboard" className="bg-white border-2 ml-8 border-primary-green font-medium placeholder:text-md text-primary-green px-16 py-4 rounded-lg cursor-pointer">Review Data</Link>
        </div>
      </div>
      
   </>
  )
}
