import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-7xl ml-16 text-lime-600 font-semibold">
      <p>Customer Analytics </p>
      <p>Beautified.</p>
      </div>

      <div className="text-3xl ml-16 text-lime-900">
      <p>Discover a powerful sentiment </p>
      <p>analysis tool for your reviews in one click</p>
      </div>

      
      {/* <p className="ml-16 bg-primary-green font-medium text-md text-white l-[100px] w-[150px] rounded-lg">Upload CSV</p> */}
      <div className="flex justify-between items-center px-16 pt-8">
      <a className="bg-primary-green font-medium text-md text-white px-16 py-4 rounded-lg">Upload CSV</a>
      <a className="bg-primary-green font-medium text-md text-white px-16 py-4 rounded-lg">Review Data</a>
      </div>
      
   </>
  )
}
